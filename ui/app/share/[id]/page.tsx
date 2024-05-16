import { PrimaryHeader } from '@/app/components/layout/PrimaryHeader';
import { createClient } from '@/app/lib/supabase/server';
import { Button, HeadingLevel } from '@ariakit/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

interface SharePageProps {
  params: {
    id: string;
  };
}

// TODO - Add sharing + button to go back and measure more tools
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

  console.log({ tool });

  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <HeadingLevel>
        <PrimaryHeader />
      </HeadingLevel>

      <div
        className="flex animate-fade-up items-center gap-1 opacity-0"
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <h2 className="text-xl">Thanks for measuring {tool.name}</h2>

        <Image
          src={tool.logo_url}
          alt={`${tool.name}'s logo`}
          width={24}
          height={12}
          className="rounded-md"
        />
      </div>
    </main>
  );
}
