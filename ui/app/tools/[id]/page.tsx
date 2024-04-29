import { RateToolForm } from '@/app/components/RateToolForm';
import { getTool } from '@/app/lib/api';
import { Heading, HeadingLevel } from '@ariakit/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ToolPageProps {
  params: {
    id: string;
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const tool = await getTool(params.id);

  if (!tool) {
    return notFound();
  }

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <header className="flex flex-col text-center">
        <div
          className="animate-fade-up flex flex-col items-center gap-2 opacity-0"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          <span className="text-md text-gray-500 dark:text-gray-100">
            Measuring{' '}
            <span className="animate-pulse font-medium opacity-95 hover:decoration-4">
              {tool.name}
            </span>
          </span>

          <div className="mx-auto mb-1 w-max rounded border px-1.5 py-px font-medium text-gray-500 dark:text-gray-100">
            <span className="text-sm">Step 2 of 2</span>
          </div>
        </div>
        <HeadingLevel>
          <div className="mb-4 flex items-center justify-center gap-1 md:gap-4">
            <div
              className="animate-fade-up opacity-0"
              style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
            >
              <div className="relative flex h-10 w-10 animate-pulse items-center justify-center rounded-lg border-2 border-gray-100 bg-gradient-to-r from-emerald-500 to-emerald-400 md:h-20 md:w-20">
                <span className="text-2xl md:text-6xl">📏</span>
              </div>
            </div>

            <Heading
              className="animate-fade-up font-display bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] dark:from-gray-300 dark:to-gray-50"
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              Measure DX
            </Heading>
          </div>
          <HeadingLevel>
            <Heading
              className="animate-fade-up mb-2 text-lg text-gray-800 opacity-0 md:text-xl dark:text-gray-100"
              style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
            >
              Rate the following areas:
            </Heading>
          </HeadingLevel>
        </HeadingLevel>
      </header>

      <section
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <RateToolForm />
      </section>
    </main>
  );
}
