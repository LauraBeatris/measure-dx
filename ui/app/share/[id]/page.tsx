import { PaperPlanIcon } from '@/app/components/icons/PaperPlanIcon';
import { PrimaryHeader } from '@/app/components/layout/PrimaryHeader';
import { createClient } from '@/app/lib/supabase/server';
import { HeadingLevel } from '@ariakit/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface SharePageProps {
  params: {
    id: string;
  };
}

export default async function SharePage({ params }: SharePageProps) {
  const client = await createClient<any>();

  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!user) {
    return redirect('/');
  }

  const measurement = (
    await client
      .from('measurements')
      .select('*')
      .eq('id', params.id)
      .limit(1)
      .single()
  ).data;

  const tool = (
    await client
      .from('tools')
      .select('*')
      .eq('id', measurement.tool_id)
      .limit(1)
      .single()
  ).data;

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <header className="flex flex-col text-center">
        <div
          className="text-3xs mx-auto mb-1 w-max animate-fade-up rounded border px-1.5 py-px font-medium text-gray-500 opacity-0"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          <span className="text-md flex items-center gap-1 p-1 text-gray-500 dark:text-gray-100">
            You've measured{' '}
            <strong className="font-medium text-gray-700">{tool.name}</strong>
            <Image
              src={tool.logo_url}
              alt={`${tool.name}'s logo`}
              width={16}
              height={16}
              className="rounded-md"
            />
          </span>
        </div>
        <HeadingLevel>
          <PrimaryHeader />
        </HeadingLevel>
      </header>
      <div
        className="flex animate-fade-up items-center justify-center gap-1 opacity-0"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <h2 className="w-9/12 text-center text-xl text-gray-900">
          Your feedback helps the overall community in the effort of seeking the
          best experience for our favorite tools
        </h2>
      </div>
      <Link
        href="/get-started"
        className="focus-visible:ariakit-outline mt-4 flex h-12 w-max items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg"
      >
        Continue with other tools <PaperPlanIcon />
      </Link>
    </main>
  );
}
