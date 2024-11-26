"use server";

import { ArticlesPage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getArticlesPageSetting(): Promise<ArticlesPage> {
  let query = `*[_type == "articlesPage"][0]{
    _id,
    articleLink,
  }`;
  return client.fetch(query);
}
