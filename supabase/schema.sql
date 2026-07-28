-- Myntmore lead-magnet tools: shared Supabase schema
--
-- Run this once in your new Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).
--
-- Profile Optimizer, Posting Rhythm Builder, Lead Magnet Idea Generator,
-- DM Angle Generator, and Founder Presence Analyzer all gate access behind
-- the same shared Zoho lead form (components/tools/shared/LeadGate.tsx)
-- and log here as a secondary record; Zoho stays the primary record in
-- every case. ROI Calculator has no backend and does not use this table.
--
-- Each row starts life at LeadGate submission (name/email/phone/etc, plus
-- `inputs`/`outputs` empty). Once the tool actually runs, the same page
-- updates that row in place with what the visitor typed in (`inputs`) and
-- what the AI generated for them (`outputs`), keyed off the row `id`
-- LeadGate hands back on insert. So a single row captures the full
-- session: who they are, what they asked for, and what they got.

-- This whole file is safe to re-run: creating the table is a no-op if it
-- already exists, the two `alter table` lines below backfill `inputs`/
-- `outputs` onto a table created by an earlier version of this file, and
-- the policies are dropped and recreated so their definitions can change
-- without erroring on "policy already exists".

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('profile_optimizer', 'posting_rhythm_builder', 'lead_magnet_ideas', 'dm_angle_generator', 'founder_presence_analyzer', 'roi_calculator')),
  name text not null,
  email text,
  phone text,
  company_name text,
  company_website text,
  linkedin_url text,
  metadata jsonb not null default '{}'::jsonb,
  inputs jsonb not null default '{}'::jsonb,
  outputs jsonb not null default '{}'::jsonb
);

alter table public.leads add column if not exists inputs jsonb not null default '{}'::jsonb;
alter table public.leads add column if not exists outputs jsonb not null default '{}'::jsonb;

alter table public.leads enable row level security;

-- Anyone (including anonymous site visitors) can submit a lead.
drop policy if exists "Allow anonymous inserts" on public.leads;
create policy "Allow anonymous inserts"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- Anyone can also update a row (there's no user auth in these tools, so
-- this can't be scoped to "only the row's own creator" the way a signed-in
-- app would). This is only used by each tool's own client, right after its
-- own LeadGate submission, to attach that same session's `inputs`/
-- `outputs` by row id. Matches the same anonymous-write trust level as the
-- insert policy above.
drop policy if exists "Allow anonymous updates" on public.leads;
create policy "Allow anonymous updates"
  on public.leads
  for update
  to anon, authenticated
  using (true)
  with check (true);

-- No select/delete policy is defined for anon/authenticated, so only the
-- service role (or you, in the Supabase dashboard) can read or delete
-- rows. This matches how the original tools' tables were locked down.

create index if not exists idx_leads_source on public.leads(source);
create index if not exists idx_leads_created_at on public.leads(created_at desc);
