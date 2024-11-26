"use server";

import { client } from "../lib/client";

export async function getTopHashtags(top = 4): Promise<any[]> {
  let query = `*[_type == "article" && defined(hashtags)]
  [].hashtags[defined(@)] -> {
    _id,
    hashtag
  }`;

  const articleHashtags = await client.fetch(query, { top });
  const counts = articleHashtags.reduce((acc: any, { _id, hashtag }: any) => {
    if (!_id) return acc;
    if (!acc[_id]) {
      acc[_id] = { id: _id, hashtag, count: 0 };
    }
    acc[_id].count += 1;
    return acc;
  }, {});

  const result = Object.values(counts)
    .sort((a: any, b: any) => b.count - a.count)
    .slice(0, 4);
  return result;
}
