import { HeadingLevel, Heading, Button } from "@ariakit/react";
import Link from "next/link";
import { Leaderboard } from "./components/Leaderboard";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <section>
        <HeadingLevel>
          <Heading className="heading">Measure DX</Heading>
          <HeadingLevel>
            <Heading className="heading">
              Inspired by{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://dx.addy.ie/"
              >
                Developer Experience book
              </Link>{" "}
              by Addy Osmani
            </Heading>
          </HeadingLevel>
        </HeadingLevel>
      </section>

      <div>
        <Button>Get started</Button>
      </div>

      <Leaderboard />
    </main>
  );
}
