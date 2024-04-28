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
            <div
              className="animate-fade-up opacity-0"
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
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
              Measure the developer experience offered by different tools.
            </Heading>

            <HeadingLevel>
              <Heading
                className="animate-fade-up text-md text-gray-600 opacity-0 dark:text-gray-200"
                style={{
                  animationDelay: '0.25s',
                  animationFillMode: 'forwards',
                }}
              >
                Inspired by the{' '}
                <Link
                  className="animate-pulse font-medium underline decoration-emerald-500/30 decoration-2 underline-offset-4 opacity-95 hover:decoration-4"
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

      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Button className="focus-visible:ariakit-outline flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg">
          Get started
        </Button>
      </div>

      <section
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Leaderboard />
      </section>
    </main>
  );
}
