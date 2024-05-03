create table rate_areas (
  id bigint primary key generated always as identity,
  title text NOT NULL,
  created_at timestamptz default now()
);
