-- Myntmore lead-magnet tools: shared Supabase schema
--
-- Run this once in your new Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).
--
-- Profile Optimizer, Posting Rhythm Builder, Lead Magnet Idea Generator,
-- DM Angle Generator, Founder Presence Analyzer, and ICP Builder all gate
-- access behind the shared LeadGate component
-- (components/tools/shared/LeadGate.tsx), each posting to its own Zoho
-- form (or the shared one, if it doesn't have a dedicated form yet) as the
-- primary record, and logging here as a secondary record. ROI Calculator
-- has no backend and does not use this table.
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
  source text not null check (source in ('profile_optimizer', 'posting_rhythm_builder', 'lead_magnet_ideas', 'dm_angle_generator', 'founder_presence_analyzer', 'roi_calculator', 'icp_builder')),
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

-- Backfill: widen the source check constraint to include icp_builder for
-- tables created by an earlier version of this file.
alter table public.leads drop constraint if exists leads_source_check;
alter table public.leads add constraint leads_source_check
  check (source in ('profile_optimizer', 'posting_rhythm_builder', 'lead_magnet_ideas', 'dm_angle_generator', 'founder_presence_analyzer', 'roi_calculator', 'icp_builder'));

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

-- ─────────────────────────────────────────────────────────────────────
-- Live "gist of the room" feature (/menti, /menti/room)
--
-- A single fixed question is shown to a live audience at /menti; each
-- visitor submits one free-text answer, fully anonymous (no name/email,
-- unrelated to the `leads` table above). /menti/room is an unlisted,
-- password-free results view for whoever is running the event: it shows
-- a live-updating count and list of answers (via Supabase Realtime) and
-- a button to have Gemini summarize the room into an overall gist.
--
-- Because /menti/room has no login, it relies on Realtime + a direct
-- anon `select` to read responses, so unlike `leads` this table allows
-- anonymous reads too. That's an accepted tradeoff for this feature:
-- answers are anonymous and low-sensitivity, and the room view's only
-- protection is not publicizing its URL.

create table if not exists public.menti_responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  answer text not null
);

alter table public.menti_responses enable row level security;

drop policy if exists "Allow anonymous inserts" on public.menti_responses;
create policy "Allow anonymous inserts"
  on public.menti_responses
  for insert
  to anon, authenticated
  with check (char_length(answer) > 0 and char_length(answer) <= 500);

drop policy if exists "Allow anonymous reads" on public.menti_responses;
create policy "Allow anonymous reads"
  on public.menti_responses
  for select
  to anon, authenticated
  using (true);

-- No update/delete policy for anon/authenticated: answers are write-once
-- from the audience and only ever read in aggregate from the room view.

create index if not exists idx_menti_responses_created_at on public.menti_responses(created_at desc);

-- Enable Realtime on this table so /menti/room gets new answers pushed
-- live instead of having to poll. Safe to re-run: the exception handler
-- swallows "already added to publication" on subsequent runs.
do $$
begin
  alter publication supabase_realtime add table public.menti_responses;
exception
  when duplicate_object then null;
end $$;
