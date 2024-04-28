import Link from 'next/link';
import { getLeaderboard } from '../lib/leaderboard';
import Image from 'next/image';
import { StarIcon } from './icons/StarIcon';

export async function Leaderboard() {
  const leaderboard = await getLeaderboard();

  return (
    <ul className="mx-auto grid gap-2">
      {leaderboard.map((tool) => (
        <li
          className="relative flex max-w-xl items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg sm:px-5"
          key={tool.id}
        >
          <div className="flex items-center space-x-3">
            <Image
              src={tool.logoUrl}
              width={20}
              height={20}
              alt={tool.name}
              className="pointer-events-none h-10 w-10 rounded-full blur-0"
            />

            <div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <strong className="font-semibold text-gray-900">
                  {tool.name}
                </strong>
              </div>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="line-clamp-1 w-72 text-sm text-gray-500 underline-offset-2 transition-all hover:text-gray-800 hover:underline"
                href={tool.websiteUrl}
              >
                {tool.websiteUrl}
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-1 rounded-md bg-gray-100 px-2 py-0.5 text-gray-700">
            <StarIcon />

            <p className="text-sm">{tool.averageRate}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
