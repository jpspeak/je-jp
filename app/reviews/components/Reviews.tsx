"use client";

import { ReactNode } from "react";
import { Button } from "@/app/(shared)/components/ui/button";
import { Review } from "@/sanity.types";
import { getReviews } from "@/sanity/query/review";
import { Loader } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import ReviewsMasonry from "@/app/(shared)/components/ReviewsMasonry";
import SortingSelector from "./SortingSelector";
import useSWRInfinite from "swr/infinite";

function Reviews({
  initialReviews,
  platformSelector,
}: {
  initialReviews: (Review & {
    reviewPlatformLogo: string;
    reviewPlatformName: string;
  })[];
  platformSelector: ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const platformId = searchParams.get("platformId") || undefined;
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

    return [
      `${pathname}?lastCreatedAt=${lastCreatedAt}&${searchParams.toString() ? `${searchParams.toString()}` : ""}`,
      lastCreatedAt,
    ];
  };

  const REVIEWS_LIMIT = 9;

  const { data, isLoading, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    ([url, lastCreatedAt]) => {
      return getReviews({
        platformId,
        sortBy,
        lastCreatedAt,
        limit: REVIEWS_LIMIT,
      });
    },
    {
      fallbackData: [initialReviews],
    }
  );

  const hasMore = data && data[data.length - 1]?.length >= REVIEWS_LIMIT;

  const loadMore = async () => {
    setSize(size + 1);
  };

  const render = () => {
    if (isLoading)
      return (
        <div className="flex justify-center lg:justify-start mt-[60px] lg:mt-[100px]">
          <Loader className="size-4 lg:size-8 animate-spin text-muted-foreground" />
        </div>
      );
    if (data?.[0]?.length === 0)
      return (
        <p className="text-sm lg:text-lg text-center lg:text-left text-muted-foreground mt-[60px] lg:mt-[100px]">
          NO RESULTS FOUND
        </p>
      );

    return <ReviewsMasonry infiniteReviews={data || []} />;
  };

  return (
    <>
      <div className="px-4 lg:px-0 flex justify-between flex-col lg:flex-row gap-4 mt-[30px] lg:mt-[80px] pt-[30px] lg:pt-[48px] border-t border-[#e8e7e6]">
        <h1 className="text-[40px] lg:text-[60px] leading-none font-portlin uppercase tracking-[0.5px]">
          SUCCESS STORIES
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-[30px]">
          {platformSelector}
          <SortingSelector />
        </div>
      </div>
      <div className="px-4 lg:px-0 mt-[30px] lg:mt-[46px]">
        {render()}
        {hasMore && !isLoading && (
          <div className="flex justify-center mt-[40px] lg:mt-[60px]">
            {isValidating ? (
              <Loader className="size-4 animate-spin text-muted-foreground" />
            ) : (
              <Button variant="outline" className="mx-auto" onClick={loadMore}>
                SHOW MORE
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Reviews;
