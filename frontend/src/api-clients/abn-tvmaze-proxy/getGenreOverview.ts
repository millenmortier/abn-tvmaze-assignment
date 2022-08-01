import client from './_client';
import { GenreOverview } from './types';

export default async function getGenreOverview(): Promise<GenreOverview> {
  const { data } = await client.get('/genre_tv_shows');
  return data;
}
