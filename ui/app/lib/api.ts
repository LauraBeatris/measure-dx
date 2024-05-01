import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL,
});

export interface Tool {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  averageRate: string;
}

export interface RateArea {
  id: string;
  title: string;
}

export async function getLeaderboard(): Promise<Tool[]> {
  const { data } = await client.get('/leaderboard');

  return data;
}

export async function listTools(): Promise<Tool[]> {
  const { data } = await client.get('/tools');

  return data;
}

export async function getTool(id: string): Promise<Tool> {
  const { data } = await client.get(`/tools/${id}`);

  return data;
}

export async function getRateAreas(): Promise<Array<RateArea>> {
  const { data } = await client.get(`/rates`);

  return data;
}
