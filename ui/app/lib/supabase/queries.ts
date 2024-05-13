import { Database } from '@/app/types/supabase';
import { createClient } from './server';

export async function getLeaderboard() {
  const supabase = createClient<Database>();

  const { data: tools } = await supabase
    .from('tools')
    .select()

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

export async function listFormQuestions() {
  const supabase = createClient<Database>();

  const { data: form_questions } = await supabase.from('form_questions').select();

  return form_questions;
}
