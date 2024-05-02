'use client';

import { RateArea } from '@/app/lib/api';
import { useState } from 'react';
import * as Ariakit from '@ariakit/react';
import { RateOption } from './RateOption';

interface RateGroupProps extends Omit<RateArea, 'id'> {}

export function RateGroup({ title }: RateGroupProps) {
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