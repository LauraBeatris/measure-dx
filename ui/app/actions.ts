'use server';

import { listFormQuestions } from './lib/supabase/queries';
import { createClient } from './lib/supabase/server';

export async function measureTool(formData: FormData) {
  const { userId, toolId, ...rest } = Object.fromEntries(formData);

  const scoreValues = Object.values(rest) as Array<string>;
  const totalScore = scoreValues.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0,
  );

  const rateAreas = await listFormQuestions();
  const averageScore = totalScore / (rateAreas?.length ?? 0);

  const { data, error } = await createClient<any>()
    .from('measurements')
    .insert({ score: averageScore, tool_id: Number(toolId), user_id: userId });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
