"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";

function ProjectItem({ project }: { project: Project }) {
  const src = urlForImage(project.mainImage as any);
  return (
    <Link
      href={`/projects/${project.slug?.current}`}
      key={project._id}
      className="relative w-full pb-[85.5%] bg-muted inline-block"
    >
      <Image
        src={src}
        fill
        alt={project.title || ""}
        className="object-cover"
        quality={100}
      />
    </Link>
  );
}

export default ProjectItem;
