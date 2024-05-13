'use client';

import * as Ariakit from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import { startTransition, useMemo, useState } from 'react';

import { PaperPlanIcon } from './icons/PaperPlanIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { Tables } from '../types/supabase';
import { createClient } from '../lib/supabase/client';
import { getBaseUrl } from '../lib/baseUrl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Tool = Tables<'tools'>;

interface SelectToolProps {
  tools: Array<Tool>;
}

export function SelectTool({ tools }: SelectToolProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState<string>(tools[0].name);

  const matches = useMemo(() => {
    return matchSorter(tools, searchValue, {
      keys: ['name'],
      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
  }, [searchValue, tools]);

  async function handleClick() {
    setIsNavigating(true);

    const tool = tools.find((tool) => tool.name === selectedValue);

    if (!tool) {
      return notFound();
    }

    const next = `/tools/${tool.id}`;
    const redirectTo = `${getBaseUrl()}/auth/callback?next=${next}`;

    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo,
      },
    });
  }

  return (
    <div className="wrapper">
      <Ariakit.ComboboxProvider<string>
        setSelectedValue={(value) => setSelectedValue(value)}
        setValue={(value) => {
          startTransition(() => setSearchValue(value));
        }}
        defaultSelectedValue={tools[0].name}
        defaultValue={tools[0].name}
      >
        <Ariakit.ComboboxLabel
          className="label text-center text-lg text-gray-800 md:text-xl dark:text-gray-100"
          render={<h2 />}
        >
          Choose a tool to measure:
        </Ariakit.ComboboxLabel>
        <Ariakit.Combobox className="combobox" autoFocus />
        <Ariakit.ComboboxPopover gutter={4} sameWidth className="popover">
          {matches.length ? (
            matches.map((tool) => (
              <Ariakit.ComboboxItem
                key={tool.id}
                className="combobox-item"
                value={String(tool.name)}
              >
                <Image
                  src={tool.logo_url}
                  width={5}
                  height={5}
                  alt={tool.name}
                  quality={100}
                  className="pointer-events-none h-5 w-5 rounded-md blur-0"
                />

                {tool.name}
              </Ariakit.ComboboxItem>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>

      <Ariakit.Button
        onClick={handleClick}
        className={
          'focus-visible:ariakit-outline mt-2 flex h-12 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg'
        }
      >
        {isNavigating ? (
          <SpinnerIcon />
        ) : (
          <>
            {' '}
            <span>Measure</span>
            <PaperPlanIcon />
          </>
        )}
      </Ariakit.Button>
    </div>
  );
}
