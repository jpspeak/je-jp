"use server";

import { HomePage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getHomePageSetting(): Promise<HomePage> {
  let query = `*[_type == "homePage"][0]{
    _id,
    heroProject->{
      slug
    },
    featuredStories[]->{
      ...,
      "reviewPlatformLogo": reviewPlatform->logo,
      "reviewPlatformName": reviewPlatform->name
    },
    ourSolutions[]{
      name,
      description,
      images,
      content,
      button
    },
    projects[]->{
      title,
      slug,
      mainImage
    },
    sketchConcept{
      sketchBefore,
      sketchAfter
    },
    footerProject->{
      slug
    }
  }`;
  return client.fetch(query);
}
