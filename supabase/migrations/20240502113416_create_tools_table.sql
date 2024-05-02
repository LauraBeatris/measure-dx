create table tools (
  id bigint primary key generated always as identity,
  name text,
  logo_url text,
  website_url text,
  average_rate DECIMAL(10, 2),
  created_at timestamptz default now()
);
