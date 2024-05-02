'use client';
import * as Ariakit from '@ariakit/react';

interface RateOptionProps {
  currentChecked: number;
  value: number;
  name: string;
  label: string;
}

export function RateOption({
  label,
  currentChecked,
  value,
  name,
}: RateOptionProps) {
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
