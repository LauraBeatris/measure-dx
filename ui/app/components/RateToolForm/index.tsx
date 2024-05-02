import { rateTool } from '@/app/actions';
import { RateArea } from '@/app/lib/api';
import * as Ariakit from '@ariakit/react';
import Link from 'next/link';
import { RateGroup } from './RateGroup';

interface RateToolFormProps {
  rateAreas: RateArea[];
}

export function RateToolForm({ rateAreas }: RateToolFormProps) {
  return (
    <form action={rateTool} className="mt-2 flex flex-col">
      {rateAreas.map(({ id, title }) => (
        <Ariakit.RadioProvider key={id}>
          <RateGroup title={title} />
        </Ariakit.RadioProvider>
      ))}

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
