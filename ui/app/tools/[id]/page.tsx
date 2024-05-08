import { RateToolForm } from '@/app/components/RateToolForm';
import { PrimaryHeader } from '@/app/components/layout/PrimaryHeader';
import { getToolById, listRateAreas } from '@/app/lib/supabase/queries';
import { createClient } from '@/app/lib/supabase/server';
import { Heading, HeadingLevel } from '@ariakit/react';
import { notFound } from 'next/navigation';

interface ToolPageProps {
  params: {
    id: string;
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!user) {
    // TODO - Handle case where user is unauthenticated
    return notFound();
  }

  const tool = await getToolById(params.id);
  const rateAreas = await listRateAreas();

  if (!tool || !rateAreas?.length) {
    return notFound();
  }

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <header className="flex flex-col text-center">
        <div
          className="flex animate-fade-up flex-col items-center gap-2 opacity-0"
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
          <PrimaryHeader />
          <HeadingLevel>
            <Heading
              className="mb-2 animate-fade-up text-lg text-gray-800 opacity-0 md:text-xl dark:text-gray-100"
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
        <RateToolForm rateAreas={rateAreas} />
      </section>
    </main>
  );
}
