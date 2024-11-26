"use server";

import { FaqPage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getFaqPageSetting(): Promise<FaqPage> {
  let query = `*[_type == "faqPage"][0]{
    _id,
    articleLink,
    faqCategories[]->
  }`;
  return client.fetch(query);
}
