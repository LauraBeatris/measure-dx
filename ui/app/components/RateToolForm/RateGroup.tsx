'use client';

import { useState } from 'react';
import * as Ariakit from '@ariakit/react';
import { RateOption } from './RateOption';
import { Tables } from '@/app/types/supabase';

type RateArea = Tables<'rate_areas'>;

interface RateGroupProps extends Pick<RateArea, 'id' | 'title'> {}

export function RateGroup({ id, title }: RateGroupProps) {
  const [currentChecked, setCurrentChecked] = useState(0);

  const inputName = String(id);

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
          name={inputName}
          value={0}
          currentChecked={currentChecked}
        />

        <RateOption
          label="So-so"
          name={inputName}
          value={5}
          currentChecked={currentChecked}
        />

        <RateOption
          label="Good"
          name={inputName}
          value={10}
          currentChecked={currentChecked}
        />
      </div>
    </Ariakit.RadioGroup>
  );
}
