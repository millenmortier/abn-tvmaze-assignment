import client from './_client';
import { TvShow } from '../tvmaze/types';

export default async function getShowsByRating(): Promise<TvShow[]> {
  const { data } = await client.get('/shows_by_rating');
  return data;
}
