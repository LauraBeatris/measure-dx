'use server';

import { listRateAreas } from './lib/supabase/queries';

// TODO - Implement tool rating
export async function rateTool(formData: FormData) {
  const formEntries = Object.fromEntries(formData);
  const formValues = Object.values(formEntries) as Array<string>;

  const totalRate = formValues.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0,
  );

  const rateAreas = await listRateAreas();
  const averagePerQuestion = totalRate / (rateAreas?.length ?? 0);

  console.log({ averagePerQuestion });
}
