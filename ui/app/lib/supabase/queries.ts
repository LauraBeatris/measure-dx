import { Database } from '@/app/types/supabase';
import { createClient } from './server';

export async function getLeaderboard() {
  const supabase = createClient<Database>();

  // TODO -> Remove `average_rate` column, refactor logic to calculate average rate
  const { data: tools } = await supabase
    .from('tools')
    .select()
    .order('average_rate', { ascending: false });

  return tools;
}

export async function listTools() {
  const supabase = createClient<Database>();

  const { data: tools } = await supabase.from('tools').select();

  return tools;
}

export async function getToolById(id: string) {
  const supabase = createClient<Database>();

  const { data: tool } = await supabase
    .from('tools')
    .select('*')
    .eq('id', id)
    .single();

  return tool;
}

export async function listRateAreas() {
  const supabase = createClient<Database>();

  const { data: rate_areas } = await supabase.from('rate_areas').select();

  return rate_areas;
}
