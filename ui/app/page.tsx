import { HeadingLevel, Heading, Button } from '@ariakit/react';
import Link from 'next/link';
import { Leaderboard } from './components/Leaderboard';

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-5">
      <section className="flex flex-col text-center">
        <HeadingLevel>
          <Heading className="mb-4 text-6xl font-bold">Measure DX</Heading>
          <HeadingLevel>
            <Heading className="mb-2 text-xl text-gray-900">
              Measure the developer experience offered by different tools.
            </Heading>

            <HeadingLevel>
              <Heading className="text-md text-gray-600">
                Inspired by the{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dx.addy.ie/"
                >
                  Developer Experience book
                </Link>{' '}
                by Addy Osmani
              </Heading>
            </HeadingLevel>
          </HeadingLevel>
        </HeadingLevel>
      </section>

      <div>
        <Button className="focus-visible:ariakit-outline flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-green-500 px-4 font-medium text-white shadow-xl hover:bg-green-600 sm:px-8 sm:text-lg">
          Get started
        </Button>
      </div>

      <section>
        <Leaderboard />
      </section>
    </main>
  );
}
