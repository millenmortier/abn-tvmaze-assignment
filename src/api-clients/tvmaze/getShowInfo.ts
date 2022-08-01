import client from './_client';

export default async function getShowInfo(tvShowId: number) {
  const { data } = await client.get(`/shows/${tvShowId}`);
  return data;
}
