-- Users table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users(id) primary key,
  full_name text,
  email text,
  subscription_tier text default null, -- 'starseed' | 'cosmic_pro' | null
  subscription_status text default null, -- 'active' | 'cancelled' | 'expired'
  subscription_end_date timestamptz,
  razorpay_subscription_id text,
  birth_date date,
  birth_time time,
  birth_place text,
  birth_lat numeric,
  birth_lng numeric,
  questions_used_today integer default 0,
  questions_reset_date date,
  created_at timestamptz default now()
);

-- Kundali charts (cached to avoid recalculating)
create table public.kundali_charts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  name text not null,
  birth_date date not null,
  birth_time time,
  birth_place text not null,
  birth_lat numeric not null,
  birth_lng numeric not null,
  chart_data jsonb not null, -- full calculated chart as JSON
  ai_interpretation text,
  created_at timestamptz default now()
);

-- AI chat history
create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  role text not null, -- 'user' | 'assistant'
  content text not null,
  created_at timestamptz default now()
);

-- Tarot reading history
create table public.tarot_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  card_name text not null,
  is_reversed boolean default false,
  reading_date date not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.kundali_charts enable row level security;
alter table public.chat_messages enable row level security;
alter table public.tarot_history enable row level security;

-- Create Policies (Read/Write own rows only)
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

create policy "Users can view own charts" on public.kundali_charts for select using (auth.uid() = user_id);
create policy "Users can insert own charts" on public.kundali_charts for insert with check (auth.uid() = user_id);

create policy "Users can view own chat messages" on public.chat_messages for select using (auth.uid() = user_id);
create policy "Users can insert own chat messages" on public.chat_messages for insert with check (auth.uid() = user_id);

create policy "Users can view own tarot history" on public.tarot_history for select using (auth.uid() = user_id);
create policy "Users can insert own tarot history" on public.tarot_history for insert with check (auth.uid() = user_id);
