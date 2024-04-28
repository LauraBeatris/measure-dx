import { HeadingLevel, Heading, Button, VisuallyHidden } from '@ariakit/react';
import Link from 'next/link';
import { Leaderboard } from './components/Leaderboard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-5">
      <section className="flex flex-col text-center">
        <HeadingLevel>
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="relative h-10 w-10 md:h-20 md:w-20">
              <Image src="/logo.png" alt="Logo" quality={100} priority fill />
            </div>

            <Heading className="text-3xl font-bold text-gray-900 md:text-7xl dark:text-white">
              Measure DX
            </Heading>
          </div>
          <HeadingLevel>
            <Heading className="mb-2 text-lg text-gray-800 md:text-xl dark:text-gray-100">
              Measure the developer experience offered by different tools.
            </Heading>

            <HeadingLevel>
              <Heading className="text-md text-gray-600 dark:text-gray-200">
                Inspired by the{' '}
                <Link
                  className="underline decoration-emerald-500/30 decoration-2 underline-offset-4 hover:decoration-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dx.addy.ie/"
                >
                  Developer Experience
                </Link>{' '}
                book
              </Heading>
            </HeadingLevel>
          </HeadingLevel>
        </HeadingLevel>
      </section>

      <div>
        <Button className="focus-visible:ariakit-outline flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg">
          Get started
        </Button>
      </div>

      <section>
        <Leaderboard />
      </section>
    </main>
  );
}
