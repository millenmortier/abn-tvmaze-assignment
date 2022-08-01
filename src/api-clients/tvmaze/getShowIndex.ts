import client from './_client';

interface GetShowIndexParams {
  page: number;
}

export default async function getShowIndex(
  params: GetShowIndexParams = { page: 0 }
) {
  const { data } = await client.get(`/shows`, {
    params: { ...params },
  });
  return data;
}
