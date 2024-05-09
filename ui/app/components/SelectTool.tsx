'use client';

import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import { startTransition, useMemo, useState } from 'react';

import { PaperPlanIcon } from './icons/PaperPlanIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { Tables } from '../types/supabase';
import { className } from '../lib/className';
import { createClient } from '../lib/supabase/client';
import { getBaseUrl } from '../lib/baseUrl';

type Tool = Tables<'tools'>;

interface SelectToolProps {
  tools: Array<Tool>;
}

export function SelectTool({ tools }: SelectToolProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | undefined>(tools[0]);

  const matches = useMemo(() => {
    return matchSorter(tools, searchValue, {
      keys: ['name'],
      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
  }, [searchValue, tools]);

  async function handleClick() {
    if (!selectedTool) return;

    setIsNavigating(true);

    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        queryParams: {
          next: `${getBaseUrl()}/auth/callback?next=/tools/${selectedTool.id}`,
        },
      },
    });
  }

  const isDisabled = !selectedTool;

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

      <Ariakit.Button
        disabled={!selectedTool}
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
