'use client';

import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import { startTransition, useEffect, useMemo, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { PaperPlanIcon } from './icons/PaperPlanIcon';
import { useRouter } from 'next/navigation';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { Tables } from '../types/supabase';
import { className } from '../lib/className';
import { createClient } from '../lib/supabase/client';

type Tool = Tables<'tools'>;

interface SelectToolProps {
  tools: Array<Tool>;
}

export function SelectTool({ tools }: SelectToolProps) {
  const router = useRouter();

  const [isNavigating, setIsNavigating] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | undefined>(tools[0]);
  const [captchaToken, setCaptchaToken] = useState('');

  const matches = useMemo(() => {
    return matchSorter(tools, searchValue, {
      keys: ['name'],
      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
  }, [searchValue, tools]);

  async function handleClick() {
    if (!selectedTool || !captchaToken) return;

    setIsNavigating(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInAnonymously({
      options: {
        captchaToken,
      },
    });

    if (error) {
      // TODO: Show toast with error

      return;
    }

    router.push(`/tools/${selectedTool.id}`);
  }

  useEffect(() => {
    if (selectedTool?.id) {
      router.prefetch(`/tools/${selectedTool.id}`);
    }
  }, [router, selectedTool]);

  const isDisabled = !selectedTool || !captchaToken;

  return (
    <div className="wrapper">
      <Ariakit.ComboboxProvider
        resetValueOnHide
        setValue={(value) => {
          startTransition(() => {
            setSearchValue(value);
          });
        }}
      >
        <Ariakit.SelectProvider
          setValue={(value: string) => {
            startTransition(() => {
              const tool = tools.find((tool) => tool.name === value);
              setSelectedTool(tool);
            });
          }}
        >
          <Ariakit.SelectLabel
            className="label mb-2 text-center text-lg text-gray-800  md:text-xl dark:text-gray-100"
            render={<h2 />}
          >
            Choose a tool to measure:
          </Ariakit.SelectLabel>
          <Ariakit.Select autoFocus className="button" />
          <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
            <div className="combobox-wrapper">
              <Ariakit.Combobox
                autoSelect
                placeholder="Search..."
                className="combobox"
              />
            </div>
            <Ariakit.ComboboxList>
              {matches.map(({ id, name }) => (
                <Ariakit.SelectItem
                  key={id}
                  value={name}
                  className="select-item"
                  render={<Ariakit.ComboboxItem />}
                />
              ))}
            </Ariakit.ComboboxList>
          </Ariakit.SelectPopover>
        </Ariakit.SelectProvider>
      </Ariakit.ComboboxProvider>

      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!}
        onVerify={(token) => {
          setCaptchaToken(token);
        }}
      />

      <Ariakit.Button
        disabled={!selectedTool || !captchaToken}
        onClick={handleClick}
        className={className(
          'focus-visible:ariakit-outline mt-2 flex h-12 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg',
          {
            'cursor-not-allowed opacity-50': isDisabled,
          },
        )}
      >
        {isNavigating ? (
          <SpinnerIcon />
        ) : (
          <>
            {' '}
            <span>Get started</span>
            <PaperPlanIcon />
          </>
        )}
      </Ariakit.Button>
    </div>
  );
}
