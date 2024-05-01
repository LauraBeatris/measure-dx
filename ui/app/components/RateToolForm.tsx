'use client';

import * as Ariakit from '@ariakit/react';
import Link from 'next/link';
import { useId } from 'react';
import { RateArea } from '../lib/api';

interface RateToolFormProps {
  rateAreas: RateArea[];
}

export function RateToolForm({ rateAreas }: RateToolFormProps) {
  const id = useId();
  const form = Ariakit.useFormStore({ defaultValues: { color: '' } });

  return (
    <Ariakit.Form
      store={form}
      aria-labelledby={id}
      className="mt-2 flex flex-col"
    >
      {rateAreas.map(({ id, title }) => (
        <Ariakit.FormRadioGroup key={id} className="mb-2 flex w-full gap-2">
          <Ariakit.FormGroupLabel className="mb-3 grow pr-2.5 font-bold text-gray-900 sm:mb-0 sm:w-72 sm:font-normal">
            {title}
          </Ariakit.FormGroupLabel>

          <div className="grid grid-cols-3 gap-x-1.5 tracking-tight sm:tracking-normal">
            <label className="rate-option justify-center">
              <Ariakit.FormRadio
                className="top-50 left-50 absolute cursor-pointer opacity-0"
                name="bad"
                value={0}
              />
              Bad
            </label>
            <label className="rate-option justify-center">
              <Ariakit.FormRadio
                className="top-50 left-50 absolute cursor-pointer opacity-0"
                name="so-so"
                value={5}
              />
              So-so
            </label>
            <label className="rate-option justify-center">
              <Ariakit.FormRadio
                className="top-50 left-50 absolute cursor-pointer opacity-0"
                name="good"
                value={10}
              />
              Good
            </label>
          </div>
        </Ariakit.FormRadioGroup>
      ))}

      <footer className="ml-auto flex w-full items-end justify-end">
        <Link
          href={`/get-started`}
          className="focus-visible:ariakit-outline flex h-12 items-center justify-center gap-1 whitespace-nowrap text-gray-600 sm:px-8 sm:text-lg"
        >
          <span>Back</span>
        </Link>
        <Ariakit.FormSubmit className="focus-visible:ariakit-outline mt-1 flex h-12 w-max items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg">
          Submit
        </Ariakit.FormSubmit>
      </footer>
    </Ariakit.Form>
  );
}
