import React from "react";
import { getProject } from "@/sanity/query/project";
import ProjectModal from "@/app/projects/[slug]/components/ProjectModal";

async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = await getProject({ slug });

  return (
    <>
      <ProjectModal project={project} />
    </>
  );
}

export default Project;
