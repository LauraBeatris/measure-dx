'use server';

import { redirect } from 'next/navigation';
import { listFormQuestions } from './lib/supabase/queries';
import { createClient } from './lib/supabase/server';
import { Database } from './types/supabase';

export async function measureTool(formData: FormData) {
  const { userId, toolId, ...rest } = Object.fromEntries(formData);

  const scoreValues = Object.values(rest) as Array<string>;
  const totalScore = scoreValues.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0,
  );

  const rateAreas = await listFormQuestions();
  const averageScore = totalScore / (rateAreas?.length ?? 0);

  const { data, error, ...test } = await createClient<any>()
    .from('measurements')
    .insert({ score: averageScore, tool_id: Number(toolId), user_id: userId })
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  const measurement = data[0];

  return redirect(`/share/${measurement.id}`);
}
