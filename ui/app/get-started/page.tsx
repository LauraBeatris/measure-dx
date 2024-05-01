import { Heading, HeadingLevel } from '@ariakit/react';
import { SelectTool } from '../components/SelectTool';
import { listTools } from '../lib/api';
import { PrimaryHeader } from '../components/layout/PrimaryHeader';

export default async function GetStartedPage() {
  const tools = await listTools();

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <header className="flex flex-col text-center">
        <div
          className="animate-fade-up text-3xs mx-auto mb-1 w-max rounded border px-1.5 py-px font-medium text-gray-500 opacity-0"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-100">
            Step 1 of 2
          </span>
        </div>
        <HeadingLevel>
          <PrimaryHeader />
        </HeadingLevel>
      </header>

      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <SelectTool tools={tools} />
      </div>
    </main>
  );
}
