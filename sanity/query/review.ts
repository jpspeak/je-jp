"use server";

import { Review, ReviewPlatform } from "@/sanity.types";
import { client } from "../lib/client";

type ReviewRatingCount = {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
};

// export async function getReviews({
//   platformId = "",
//   lastId = "",
//   limit = 9,
//   sortBy = "Most Recent",
// } = {}): Promise<
//   (Review & {
//     reviewPlatformLogo: any;
//     reviewPlatformName: string;
//   })[]
// > {
//   let sortByValue = "desc";

//   switch (sortBy) {
//     case "Most Recent":
//       sortByValue = "desc";
//       break;
//     case "Oldest First":
//       sortByValue = "asc";
//       break;

//     default:
//       sortByValue = "desc";
//       break;
//   }

//   let query = `*[_type == "review" && _id > $lastId] | order(_createdAt ${sortByValue}) [0...$limit]{
//     ...,
//     "reviewPlatformLogo": reviewPlatform->logo,
//     "reviewPlatformName": reviewPlatform->name
//   }`;
//   if (platformId) {
//     query = `*[_type == "review" && reviewPlatform._ref == $platformId && _id > $lastId] | order(_createdAt ${sortByValue}) [0...$limit]{
//         ...,
//         "reviewPlatformLogo": reviewPlatform->logo,
//         "reviewPlatformName": reviewPlatform->name
//       }`;
//   }
//   return client.fetch(query, { lastId, limit, platformId });
// }

export async function getReviews({
  platformId = "",
  lastCreatedAt = "",
  limit = 9,
  sortBy = "Most Recent",
} = {}): Promise<
  (Review & {
    reviewPlatformLogo: any;
    reviewPlatformName: string;
  })[]
> {
  let sortByValue = "desc";
  let operator = "<";

  switch (sortBy) {
    case "Most Recent":
      sortByValue = "desc";
      operator = "<";
      break;
    case "Oldest First":
      sortByValue = "asc";
      operator = ">";
      break;
  }

  let query = `*[_type == "review" ${lastCreatedAt ? `&& _createdAt ${operator} $lastCreatedAt` : ""}] | order(_createdAt ${sortByValue}) [0...$limit]{
    ...,
    "reviewPlatformLogo": reviewPlatform->logo,
    "reviewPlatformName": reviewPlatform->name
  }`;
  if (platformId && platformId !== "all") {
    query = `*[_type == "review" && reviewPlatform._ref == $platformId ${lastCreatedAt ? `&& _createdAt ${operator} $lastCreatedAt` : ""}] | order(_createdAt ${sortByValue}) [0...$limit]{
        ...,
        "reviewPlatformLogo": reviewPlatform->logo,
        "reviewPlatformName": reviewPlatform->name
      }`;
  }
  return client.fetch(query, { lastCreatedAt, limit, platformId });
}

export async function getReviewsCountByRating(): Promise<ReviewRatingCount> {
  return client.fetch(
    `{
      "5": count(*[_type == "review" && rating == 5]),
      "4": count(*[_type == "review" && rating == 4]),
      "3": count(*[_type == "review" && rating == 3]),
      "2": count(*[_type == "review" && rating == 2]),
      "1": count(*[_type == "review" && rating == 1]),
    }`
  );
}
export async function getReviewsPlatforms(): Promise<
  (ReviewPlatform & { logoUrl: string })[]
> {
  let query = `*[_type == "reviewPlatform"]{
      ...,
      "logoUrl": logo.asset->url
    }`;

  return client.fetch(query);
}
