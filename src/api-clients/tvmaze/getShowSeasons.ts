import client from './_client';

export default async function getShowSeasons(showId: number) {
  const { data } = await client.get(`/shows/${showId}/seasons`);
  return data;
}
