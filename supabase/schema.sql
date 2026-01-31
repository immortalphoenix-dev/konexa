-- Create a table for contact submissions
create table public.contact_submissions (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  full_name text not null,
  email text not null,
  subject text null,
  message text not null,
  location text null,
  service_of_interest text null,
  constraint contact_submissions_pkey primary key (id)
);

-- Create a table for newsletter subscribers
create table public.newsletter_subscribers (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  email text not null,
  constraint newsletter_subscribers_pkey primary key (id),
  constraint newsletter_subscribers_email_key unique (email)
);

-- Set up Row Level Security (RLS)
alter table public.contact_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- Create policies

-- Allow public to insert into contact_submissions
create policy "Enable insert for public" on public.contact_submissions
  for insert
  with check (true);

-- Allow public to select their own submissions (this is tricky without auth, so maybe just admin read)
-- For now, let's allow service role/admin to read all. 
-- In a real app, you'd probably restrict read to authenticated admin users.
-- For this demo, we'll leave read restricted to service_role (default deny public read).

-- Allow public to insert into newsletter_subscribers
create policy "Enable insert for public" on public.newsletter_subscribers
  for insert
  with check (true);
