'use client';

import { useFormStatus } from 'react-dom';
import { SpinnerIcon } from '../icons/SpinnerIcon';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="focus-visible:ariakit-outline mt-1 flex h-12 w-[100px] items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg">
      {pending ? (
        <SpinnerIcon />
      ) : (
        <>
          <span>Submit</span>
        </>
      )}
    </button>
  );
}
