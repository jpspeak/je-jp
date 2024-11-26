"use server";

import { ProjectsPage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getProjectsPageSetting(): Promise<ProjectsPage> {
  let query = `*[_type == "projectsPage"][0]{
    _id,
    articleLink
  }`;
  return client.fetch(query);
}
