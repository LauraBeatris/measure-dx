import Link from "next/link";
import { getLeaderboard } from "../lib/leaderboard";

export async function Leaderboard() {
  const leaderboard = await getLeaderboard();

  return (
    <ul>
      {leaderboard.map((tool) => (
        <li key={tool.id}>
          <header>
            <strong>{tool.name}</strong>
            <span>{tool.averageRate}</span>
          </header>

          <footer>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={tool.websiteUrl}
            >
              {tool.websiteUrl}
            </Link>
          </footer>
        </li>
      ))}
    </ul>
  );
}
