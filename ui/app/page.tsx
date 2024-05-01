import { HeadingLevel, Heading, Button, VisuallyHidden } from '@ariakit/react';
import Link from 'next/link';
import { Leaderboard } from './components/Leaderboard';
import { GitHubIcon } from './components/icons/GitHubIcon';
import { links } from './constants';
import { PrimaryHeader } from './components/layout/PrimaryHeader';

// TODO - Make it responsive on mobile
export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-5 p-5 md:p-0">
      <header className="flex flex-col text-center">
        <HeadingLevel>
          <PrimaryHeader />
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
                  href={links.bookUrl}
                >
                  Developer Experience
                </Link>{' '}
                book
              </Heading>
            </HeadingLevel>
          </HeadingLevel>
        </HeadingLevel>
      </header>

      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Link
          href="/get-started"
          className="focus-visible:ariakit-outline flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-500 px-4 font-medium text-gray-50 shadow-xl hover:bg-emerald-600 sm:px-8 sm:text-lg"
        >
          Get started
        </Link>
      </div>

      <section
        className="animate-fade-up px-2 opacity-0"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Leaderboard />
      </section>

      <footer
        className="animate-fade-up container mx-auto flex flex-col items-center justify-center gap-4 opacity-0 md:flex-row"
        style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
      >
        <Link
          href={links.vercelUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-visible:ariakit-outline inline-flex items-center gap-1 text-sm text-black/80 hover:text-black hover:no-underline dark:text-white/70 dark:hover:text-white"
        >
          Powered by
          <svg viewBox="0 0 4438 1000" className="h-4 fill-current">
            <path d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z" />
          </svg>
        </Link>

        <div className="flex items-center gap-2 text-center text-sm dark:text-white/60">
          <p>© 2024 Laura Beatris</p>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={links.githubUrl}
          >
            <GitHubIcon />
          </Link>
        </div>
      </footer>
    </main>
  );
}
