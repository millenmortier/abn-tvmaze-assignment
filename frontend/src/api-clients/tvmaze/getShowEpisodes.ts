import client from './_client';

export default async function getShowEpisodes(showId: number) {
  const { data } = await client.get(`/shows/${showId}/episodes`);
  return data;
}
