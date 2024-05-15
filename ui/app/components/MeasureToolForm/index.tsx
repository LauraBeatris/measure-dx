import { measureTool } from '@/app/actions';
import * as Ariakit from '@ariakit/react';
import Link from 'next/link';
import { RadioGroup } from './RadioGroup';
import { Tables } from '@/app/types/supabase';

type RateArea = Tables<'form_questions'>;

interface MeasureToolFormProps {
  rateAreas: RateArea[];
  toolId: number;
  userId: string;
}

export function MeasureToolForm({
  rateAreas,
  toolId,
  userId,
}: MeasureToolFormProps) {
  return (
    <form action={measureTool} className="mt-2 flex flex-col">
      {rateAreas.map(({ id, title }) => (
        <Ariakit.RadioProvider key={id}>
          <RadioGroup id={id} title={title} />
        </Ariakit.RadioProvider>
      ))}

      <input type="hidden" value={toolId} name="toolId"></input>
      <input type="hidden" value={userId} name="userId"></input>

      <footer className="ml-auto flex w-full items-end justify-end">
        <Link
          href={`/get-started`}
          className="focus-visible:ariakit-outline flex h-12 items-center justify-center gap-1 whitespace-nowrap text-gray-600 sm:px-8 sm:text-lg"
        >
          <span>Back</span>
        </Link>
        <button className="focus-visible:ariakit-outline mt-1 flex h-12 w-max items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg">
          Submit
        </button>
      </footer>
    </form>
  );
}
