"use server";

import { ReviewsPage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getReviewsPageSetting(): Promise<ReviewsPage> {
  let query = `*[_type == "reviewsPage"][0]{
    _id,
    articleLink
  }`;
  return client.fetch(query);
}
