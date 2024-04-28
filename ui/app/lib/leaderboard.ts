import client from './client';

interface Tool {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  averageRate: string;
}

export async function getLeaderboard(): Promise<Tool[]> {
  const { data } = await client.get('/leaderboard');

  return data;
}
