'use client';

import * as Ariakit from '@ariakit/react';
import Link from 'next/link';
import { useId } from 'react';

export function RateToolForm() {
  const id = useId();
  const form = Ariakit.useFormStore({ defaultValues: { color: '' } });

  return (
    <Ariakit.Form
      store={form}
      aria-labelledby={id}
      className="mt-2 flex flex-col"
    >
      <Ariakit.FormRadioGroup className="flex w-full gap-2">
        <Ariakit.FormGroupLabel className="mb-3 grow pr-2.5 font-bold text-gray-900 sm:mb-0 sm:w-72 sm:font-normal">
          Tool is simple, easy to install, setup and use
        </Ariakit.FormGroupLabel>

        <div className="grid grid-cols-4 gap-x-1.5 tracking-tight sm:tracking-normal">
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="bad"
            />
            Bad
          </label>
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="so-so"
            />
            So-so
          </label>
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="good"
            />
            Good
          </label>
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="good"
            />
            N/A
          </label>
        </div>
      </Ariakit.FormRadioGroup>

      <Ariakit.FormRadioGroup className="mt-4 flex w-full gap-2">
        <Ariakit.FormGroupLabel className="mb-3 grow pr-2.5 font-bold text-gray-900 sm:mb-0 sm:w-72 sm:font-normal">
          Clear documentation
        </Ariakit.FormGroupLabel>

        <div className="grid grid-cols-4 gap-x-1.5 tracking-tight sm:tracking-normal">
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="bad"
            />
            Bad
          </label>
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="so-so"
            />
            So-so
          </label>
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="good"
            />
            Good
          </label>
          <label className="rate-option justify-center">
            <Ariakit.FormRadio
              className="top-50 left-50 absolute cursor-pointer opacity-0"
              name={form.names.color}
              value="good"
            />
            N/A
          </label>
        </div>
      </Ariakit.FormRadioGroup>

      <footer className="ml-auto flex w-full items-end justify-end">
        <Link
          href={`/get-started`}
          className="focus-visible:ariakit-outline mt-2 flex h-12 items-center justify-center gap-1 whitespace-nowrap text-gray-600 sm:px-8 sm:text-lg"
        >
          <span>Back</span>
        </Link>
        <Ariakit.FormSubmit className="focus-visible:ariakit-outline mt-4 flex h-12 w-max items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg">
          Submit
        </Ariakit.FormSubmit>
      </footer>
    </Ariakit.Form>
  );
}
