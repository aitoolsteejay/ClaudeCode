-- Myntmore lead-magnet tools: shared Supabase schema
--
-- Run this once in your new Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).
--
-- Profile Optimizer, Posting Rhythm Builder, Lead Magnet Idea Generator,
-- and DM Angle Generator all gate access behind the same shared Zoho lead
-- form (components/tools/shared/LeadGate.tsx) and log here as a secondary
-- record; Zoho stays the primary record in every case. ROI Calculator has
-- no backend and does not use this table.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('profile_optimizer', 'posting_rhythm_builder', 'lead_magnet_ideas', 'dm_angle_generator', 'roi_calculator')),
  name text not null,
  email text,
  phone text,
  company_name text,
  company_website text,
  linkedin_url text,
  metadata jsonb not null default '{}'::jsonb
);

alter table public.leads enable row level security;

-- Anyone (including anonymous site visitors) can submit a lead.
create policy "Allow anonymous inserts"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- No select/update/delete policy is defined for anon/authenticated,
-- so only the service role (or you, in the Supabase dashboard) can
-- read or manage rows. This matches how the original tools' tables
-- were locked down.

create index if not exists idx_leads_source on public.leads(source);
create index if not exists idx_leads_created_at on public.leads(created_at desc);
