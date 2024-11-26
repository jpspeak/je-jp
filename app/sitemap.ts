import { getArticles } from "@/sanity/query/article";
import { getProjects } from "@/sanity/query/project";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = "https://jedesigns.com";

  const articles = await getArticles({ limit: 50 });
  const projects = await getProjects({ limit: 50 });

  const articleUrls = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug?.current}`,
    lastModified: new Date(article._createdAt),
  }));
  const projectsUrls = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug?.current}`,
    lastModified: new Date(project._createdAt),
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/reviews`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
    },
    ...articleUrls,
    ...projectsUrls,
  ];
}
