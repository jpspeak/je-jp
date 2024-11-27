import React from "react";
import ProjectModal from "../../[slug]/components/ProjectModal";
import { getProject } from "@/sanity/query/project";
import { getDictionary, Locale } from "@/app/[lang]/dictionaries";

export const revalidate = 60;

async function Project({ params }: { params: { slug: string; lang: Locale } }) {
  const { slug, lang } = params;

  const dict = await getDictionary(lang);
  const project = await getProject({ slug });

  return <ProjectModal project={project} dict={dict} />;
}

export default Project;
