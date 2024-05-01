'use client';

import * as Ariakit from '@ariakit/react';
import Link from 'next/link';
import { useState } from 'react';
import { RateArea } from '../lib/api';
import { rateTool } from '../actions';

interface RateToolFormProps {
  rateAreas: RateArea[];
}

export function RateToolForm({ rateAreas }: RateToolFormProps) {
  return (
    <form action={rateTool} className="mt-2 flex flex-col">
      {rateAreas.map(({ id, title }) => (
        <Ariakit.RadioProvider key={id}>
          <RateAreaRadioGroup title={title} />
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

interface RateAreaProps extends Omit<RateArea, 'id'> {}

function RateAreaRadioGroup({ title }: RateAreaProps) {
  const [currentChecked, setCurrentChecked] = useState(0);

  return (
    <Ariakit.RadioGroup
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setCurrentChecked(Number(event.target.value))
      }
      className="mb-2 flex w-full gap-2"
    >
      <label className="mb-3 grow pr-2.5 font-bold text-gray-900 sm:mb-0 sm:w-72 sm:font-normal">
        {title}
      </label>

      <div className="grid grid-cols-3 gap-x-1.5 tracking-tight sm:tracking-normal">
        <RateOption
          label="Bad"
          name="bad"
          value={0}
          currentChecked={currentChecked}
        />

        <RateOption
          label="So-so"
          name="average"
          value={5}
          currentChecked={currentChecked}
        />

        <RateOption
          label="Good"
          name="good"
          value={10}
          currentChecked={currentChecked}
        />
      </div>
    </Ariakit.RadioGroup>
  );
}

interface RateOptionProps {
  currentChecked: number;
  value: number;
  name: string;
  label: string;
}

function RateOption({ label, currentChecked, value, name }: RateOptionProps) {
  const isChecked = currentChecked === value;

  return (
    <label
      className={`rate-option justify-center ${isChecked ? '!bg-gray-200' : ''}`}
    >
      <Ariakit.Radio
        className="top-50 left-50 absolute cursor-pointer opacity-0"
        name={name}
        value={value}
      />
      {label}
    </label>
  );
}
