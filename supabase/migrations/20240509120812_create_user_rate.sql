create table user_rate (
  id bigint primary key generated always as identity,
  rate decimal not null,
  user_id uuid not null references auth.users on delete cascade,
  tool_id bigint,
  created_at timestamptz default now(),
  foreign key (tool_id) references tools(id)
);
