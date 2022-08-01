import { SearchResult } from './types';
import client from './_client';

export default async function search(query: string): Promise<SearchResult[]> {
  const { data } = await client.get(`/search/shows`, {
    params: { q: query },
  });
  return data;
}
