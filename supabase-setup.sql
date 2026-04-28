-- FarmPulse Database Setup Script
-- Run this in Supabase SQL Editor in order: 1) Create Tables first, 2) Run RLS policies

-- ============================================
-- PART 1: CREATE TABLES
-- ============================================

-- Farmers table (links to auth.users)
create table if not exists public.farmers (
  id uuid not null default gen_random_uuid() primary key,
  email text unique,
  phone text,
  name text,
  full_name text,
  farm_type text,
  created_at timestamptz not null default now(),
  updated_at timestamptz
);

-- Daily Records table
create table if not exists public.daily_records (
  id uuid not null default gen_random_uuid() primary key,
  farmer_id text not null,
  feed_bags_used numeric default 0,
  feed_cost numeric default 0,
  mortality_count numeric default 0,
  production_amt numeric default 0,
  sales_amount numeric default 0,
  notes text,
  record_date date not null,
  created_at timestamptz not null default now()
);

-- Health Logs table
create table if not exists public.health_logs (
  id uuid not null default gen_random_uuid() primary key,
  farmer_id text not null,
  action text not null,
  details text,
  cost numeric default 0,
  record_date date not null,
  created_at timestamptz not null default now()
);

-- Expenses table
create table if not exists public.expenses (
  id uuid not null default gen_random_uuid() primary key,
  farmer_id text not null,
  category text not null,
  description text,
  amount numeric not null,
  expense_date date not null,
  created_at timestamptz not null default now()
);

-- Batches table
create table if not exists public.batches (
  id uuid not null default gen_random_uuid() primary key,
  farmer_id text not null,
  batch_name text,
  animal_type text,
  initial_count numeric not null,
  current_count numeric not null,
  acquired_date date not null,
  created_at timestamptz not null default now()
);

-- Inventory table
create table if not exists public.inventory (
  id uuid not null default gen_random_uuid() primary key,
  farmer_id text not null,
  item_name text not null,
  quantity numeric default 0,
  unit text,
  reorder_level numeric,
  created_at timestamptz not null default now()
);

-- AI Alerts table
create table if not exists public.ai_alerts (
  id uuid not null default gen_random_uuid() primary key,
  farmer_id text not null,
  alert_type text not null,
  title text not null,
  message text not null,
  severity text default 'info',
  is_read boolean default false,
  created_at timestamptz not null default now()
);

-- ============================================
-- PART 2: ENABLE RLS
-- ============================================

alter table public.farmers enable row level security;
alter table public.daily_records enable row level security;
alter table public.health_logs enable row level security;
alter table public.expenses enable row level security;
alter table public.batches enable row level security;
alter table public.inventory enable row level security;
alter table public.ai_alerts enable row level security;

-- ============================================
-- PART 3: RLS POLICIES
-- ============================================

-- Farmers policies (uses id matches auth.uid)
drop policy if exists "Farmers can view own data" on public.farmers;
create policy "Farmers can view own data" on public.farmers
  for select using (auth.uid()::text = id);

drop policy if exists "Farmers can insert own data" on public.farmers;
create policy "Farmers can insert own data" on public.farmers
  for insert with check (auth.uid()::text = id);

drop policy if exists "Farmers can update own data" on public.farmers;
create policy "Farmers can update own data" on public.farmers
  for update using (auth.uid()::text = id);

-- Daily records policies
drop policy if exists "Farmers can view own daily records" on public.daily_records;
create policy "Farmers can view own daily records" on public.daily_records
  for select using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can insert own daily records" on public.daily_records;
create policy "Farmers can insert own daily records" on public.daily_records
  for insert with check (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can delete own daily records" on public.daily_records;
create policy "Farmers can delete own daily records" on public.daily_records
  for delete using (auth.uid()::text = farmer_id);

-- Health logs policies
drop policy if exists "Farmers can view own health logs" on public.health_logs;
create policy "Farmers can view own health logs" on public.health_logs
  for select using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can insert own health logs" on public.health_logs;
create policy "Farmers can insert own health logs" on public.health_logs
  for insert with check (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can delete own health logs" on public.health_logs;
create policy "Farmers can delete own health logs" on public.health_logs
  for delete using (auth.uid()::text = farmer_id);

-- Expenses policies
drop policy if exists "Farmers can view own expenses" on public.expenses;
create policy "Farmers can view own expenses" on public.expenses
  for select using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can insert own expenses" on public.expenses;
create policy "Farmers can insert own expenses" on public.expenses
  for insert with check (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can delete own expenses" on public.expenses;
create policy "Farmers can delete own expenses" on public.expenses
  for delete using (auth.uid()::text = farmer_id);

-- Batches policies
drop policy if exists "Farmers can view own batches" on public.batches;
create policy "Farmers can view own batches" on public.batches
  for select using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can insert own batches" on public.batches;
create policy "Farmers can insert own batches" on public.batches
  for insert with check (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can update own batches" on public.batches;
create policy "Farmers can update own batches" on public.batches
  for update using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can delete own batches" on public.batches;
create policy "Farmers can delete own batches" on public.batches
  for delete using (auth.uid()::text = farmer_id);

-- Inventory policies
drop policy if exists "Farmers can view own inventory" on public.inventory;
create policy "Farmers can view own inventory" on public.inventory
  for select using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can insert own inventory" on public.inventory;
create policy "Farmers can insert own inventory" on public.inventory
  for insert with check (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can update own inventory" on public.inventory;
create policy "Farmers can update own inventory" on public.inventory
  for update using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can delete own inventory" on public.inventory;
create policy "Farmers can delete own inventory" on public.inventory
  for delete using (auth.uid()::text = farmer_id);

-- AI Alerts policies
drop policy if exists "Farmers can view own alerts" on public.ai_alerts;
create policy "Farmers can view own alerts" on public.ai_alerts
  for select using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can insert own alerts" on public.ai_alerts;
create policy "Farmers can insert own alerts" on public.ai_alerts
  for insert with check (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can update own alerts" on public.ai_alerts;
create policy "Farmers can update own alerts" on public.ai_alerts
  for update using (auth.uid()::text = farmer_id);

drop policy if exists "Farmers can delete own alerts" on public.ai_alerts;
create policy "Farmers can delete own alerts" on public.ai_alerts
  for delete using (auth.uid()::text = farmer_id);

-- ============================================
-- PART 4: CREATE INDEXES (OPTIONAL)
-- ============================================

create index if not exists idx_daily_records_farmer_id on public.daily_records(farmer_id);
create index if not exists idx_daily_records_record_date on public.daily_records(record_date);
create index if not exists idx_health_logs_farmer_id on public.health_logs(farmer_id);
create index if not exists idx_expenses_farmer_id on public.expenses(farmer_id);
create index if not exists idx_batches_farmer_id on public.batches(farmer_id);
create index if not exists idx_inventory_farmer_id on public.inventory(farmer_id);
create index if not exists idx_ai_alerts_farmer_id on public.ai_alerts(farmer_id);

-- ============================================
-- PART 5: AUTH TRIGGER (creates farmer record on signup)
-- ============================================

-- Create a function to auto-create farmer on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.farmers (id, email, name, farm_type)
  values (new.id, new.raw_user_meta_data->>'email', new.raw_user_meta_data->>'name', 'Poultry');
  return new;
end;
$$ language plpgsql security definer;

-- Create the trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();