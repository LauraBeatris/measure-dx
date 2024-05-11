'use client';

import { useState } from 'react';
import * as Ariakit from '@ariakit/react';
import { RadioOption } from './RadioOption';
import { Tables } from '@/app/types/supabase';

type RateArea = Tables<'form_questions'>;

interface RadioGroupProps extends Pick<RateArea, 'id' | 'title'> {}

export function RadioGroup({ id, title }: RadioGroupProps) {
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
        <RadioOption
          label="Bad"
          name={inputName}
          value={0}
          currentChecked={currentChecked}
        />

        <RadioOption
          label="So-so"
          name={inputName}
          value={5}
          currentChecked={currentChecked}
        />

        <RadioOption
          label="Good"
          name={inputName}
          value={10}
          currentChecked={currentChecked}
        />
      </div>
    </Ariakit.RadioGroup>
  );
}
