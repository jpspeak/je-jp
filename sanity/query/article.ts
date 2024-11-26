"use server";

import { Article, ArticleCategory } from "@/sanity.types";
import { client } from "../lib/client";

export async function getArticles({
  categorySlug = "",
  lastCreatedAt = "",
  limit = 9,
} = {}): Promise<Article[]> {
  let query = `*[_type == "article" ${lastCreatedAt ? "&& _createdAt <= $lastCreatedAt" : ""}] | order(_createdAt desc) [0...$limit]{
     ...,
      category->
  }`;
  if (categorySlug && categorySlug !== "all") {
    query = `*[_type == "article" && category->slug.current == $categorySlug ${lastCreatedAt ? "&& _createdAt <= $lastCreatedAt" : ""}] | order(_createdAt desc) [0...$limit]{
      ...,
      category->
      }`;
  }
  return client.fetch(query, { categorySlug, lastCreatedAt, limit });
}

export async function getArticle({ slug }: { slug: string }): Promise<Article> {
  let query = `*[_type == "article" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}

export async function getArticlesCategories(): Promise<ArticleCategory[]> {
  let query = `*[_type == "articleCategory"]`;

  return client.fetch(query);
}
