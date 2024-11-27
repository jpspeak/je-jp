"use client";

import { Button } from "@/app/(shared)/components/ui/button";
import { Project } from "@/sanity.types";
import { getProjects } from "@/sanity/query/project";
import { Loader } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWRInfinite from "swr/infinite";
import SortingSelector from "./SortingSelector";

function Projects({
  initialProjects,
  industrySelector,
  dict,
}: {
  initialProjects: Project[];
  industrySelector: ReactNode;
  dict: any;
}) {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const industrySlug = searchParams.get("project_industry") || undefined;
  const sortBy = searchParams.get("sortBy") || undefined;

  const getKey = (pageIndex: number, previousPageData: any) => {
    // reached the end
    if (previousPageData && previousPageData.length === 0) return null;

    // first page, we don't have `previousPageData`
    if (pageIndex === 0)
      return [
        `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
      ];

    // add the cursor to the API endpoint
    const lastCreatedAt =
      previousPageData.length >= 1
        ? previousPageData[previousPageData.length - 1]._createdAt
        : "";

    const lastOrderRank =
      previousPageData.length >= 1
        ? previousPageData[previousPageData.length - 1].orderRank
        : "";

    return [
      `${pathname}?lastOrderRank=${lastOrderRank}&lastCreatedAt=${lastCreatedAt}&${searchParams.toString() ? `${searchParams.toString()}` : ""}`,
      lastCreatedAt,
      lastOrderRank,
    ];
  };

  const PROJECTS_LIMIT = 9;

  const { data, isLoading, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    ([url, lastCreatedAt, lastOrderRank]) => {
      return getProjects({
        industrySlug,
        sortBy,
        lastCreatedAt,
        lastOrderRank,
        limit: PROJECTS_LIMIT,
      });
    },
    {
      fallbackData: [initialProjects],
    }
  );

  const hasMore = data && data[data.length - 1]?.length >= PROJECTS_LIMIT;

  const loadMore = async () => {
    setSize(size + 1);
  };

  const render = () => {
    // if (isLoading)
    //   return (
    //     <div className="flex justify-center lg:justify-start mt-[60px] lg:mt-[100px]">
    //       <Loader className="size-4 lg:size-8 animate-spin text-muted-foreground" />
    //     </div>
    //   );
    if (data?.[0]?.length === 0)
      return (
        <p className="text-sm lg:text-lg text-center lg:text-left text-muted-foreground mt-[60px] lg:mt-[100px]">
          {dict.general.noResultsFound}
        </p>
      );

    return (
      <div className="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[30px] mt-[30px]">
        {data?.map((projects: any[], i: number) =>
          projects.map((project) => {
            const src = urlForImage(project.mainImage as any);
            return (
              <Link
                href={`/${params.lang === "en" ? "en/" : ""}projects/${project.slug?.current}`}
                key={project._id}
                className="relative w-full pb-[85.5%] bg-black rounded-[6px] lg:rounded-[8px] overflow-hidden"
              >
                <Image
                  loader={() => src}
                  src={src}
                  fill
                  alt={project.title || ""}
                  className="object-cover"
                  quality={100}
                />
              </Link>
            );
          })
        )}
      </div>
    );
  };
  return (
    <section
      id="projects"
      className="relative pt-[26px] pb-[30px] lg:py-[72px]"
    >
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4">
        <h1 className="uppercase leading-none tracking-[0.5px] text-3xl lg:text-[80px] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-ja-weight]:font-extrabold group-[.lang-en-weight]:font-regular">
          {dict.homePage.projects.title}
        </h1>
        <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-start mt-[38px]">
          <p className="text-muted-foreground text-sm lg:text-lg max-w-[434px]">
            {dict.homePage.projects.subtitle}
          </p>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[30px]">
            {industrySelector}
          </div>
        </div>
      </div>
      <div className="container px-0 lg:px-4">
        {render()}

        {hasMore && (
          <div className="flex justify-center mt-[40px] lg:mt-[60px]">
            {isValidating ? (
              <Loader className="size-4 animate-spin text-muted-foreground" />
            ) : (
              <Button variant="outline" className="mx-auto" onClick={loadMore}>
                {dict.general.viewMore}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
