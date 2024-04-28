'use client';

import * as Ariakit from '@ariakit/react';
import { useRouter } from 'next/navigation';
import { matchSorter } from 'match-sorter';
import { startTransition, useMemo, useState } from 'react';
import { Tool } from '../lib/api';
import { PaperPlanIcon } from './icons/PaperPlanIcon';

interface SelectToolProps {
  tools: Array<Tool>;
}

export function SelectTool({ tools }: SelectToolProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedToolName, setSelectedToolName] = useState('');
  const router = useRouter();

  const matches = useMemo(() => {
    return matchSorter(tools, searchValue, {
      keys: ['name'],
      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
  }, [searchValue, tools]);

  function navigateToMeasure() {
    const tool = tools.find((tool) => tool.name === selectedToolName);

    router.push(`/tools/${tool?.id}`);
  }

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
              setSelectedToolName(value);
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
        disabled={!matches.length}
        onClick={navigateToMeasure}
        className="focus-visible:ariakit-outline mt-2 flex h-12 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg"
      >
        <span>Next step</span>
        <PaperPlanIcon />
      </Ariakit.Button>
    </div>
  );
}
