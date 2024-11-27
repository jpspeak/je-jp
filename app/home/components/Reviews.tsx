"use client";

import { Button } from "@/app/(shared)/components/ui/button";
import { Review } from "@/sanity.types";
import { getReviews } from "@/sanity/query/review";
import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { BreakableText } from "@/app/(shared)/components/BreakableText";
import ReviewsMasonry from "@/app/(shared)/components/ReviewsMasonry";
import useSWRInfinite from "swr/infinite";
import Image from "next/image";

function Reviews({
  initialReviews,
  dict,
}: {
  initialReviews: (Review & {
    reviewPlatformLogo: string;
    reviewPlatformName: string;
  })[];
  dict: any;
}) {
  const pathname = "/reviews";
  const searchParams = useSearchParams();

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
    if (isLoading && !data)
      return (
        <div className="flex justify-center lg:justify-start mt-[60px] lg:mt-[100px]">
          <Loader className="size-4 lg:size-8 animate-spin text-muted-foreground" />
        </div>
      );
    if (data?.[0]?.length === 0)
      return (
        <p className="text-sm lg:text-lg text-center lg:text-left text-muted-foreground mt-[60px] lg:mt-[100px]">
          {dict.general.noResultsFound}
        </p>
      );

    return <ReviewsMasonry infiniteReviews={data || []} />;
  };

  return (
    <>
      <section className="relative pt-[70px] lg:pt-[140px] pb-[60px] lg:pb-[124px] bg-[#f9f8f3] static-background-hard">
        <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px] static-background-hard before:z-[1] before:top-[12%] before:h-[86%]">
          <Image
            src="/assets/images/shape-7-copy-12.svg"
            fill
            alt="Transition"
            className="object-cover"
          />
        </div>
        <div className="container px-4 mx-auto relative z-[1]">
          <div className="mx-auto max-w-[800px] flex flex-col items-center">
            <p className="text-[24px] lg:text-[28px] -rotate-[3deg] text-[#ffcf25] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:text-[24px] lg:group-[.lang-en-family]:text-[32px] group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular">
              {dict.homePage.reviews.subtitle}
            </p>
            <h1 className="text-[50px] lg:text-[90px] text-center group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular group-[.lang-ja-weight]:font-extrabold uppercase tracking-[0.5px] leading-[.9] text-balance mt-[10px] lg:mt-[30px]">
              {dict.homePage.reviews.title}
            </h1>
            <p className="relative z-[1] text-sm leading-normal lg:text-lg mt-[24px] lg:mt-[40px] mb-[40px] lg:mb-[70px] text-center text-[#53545c]">
              <BreakableText text={dict.homePage.reviews.description} />
            </p>
          </div>
          <div>{render()}</div>
          <div className="mx-auto max-w-[791px] text-center">
            <p className="text-sm lg:text-lg mt-[30px] lg:mt-[60px] text-[#53545c] flex justify-center">
              <BreakableText text={dict.homePage.reviews.info} />
            </p>
            {hasMore && !isLoading && (
              <div className="flex justify-center mt-[40px] lg:mt-[60px]">
                {isValidating ? (
                  <Loader className="size-4 animate-spin text-muted-foreground" />
                ) : (
                  <Button
                    variant="outline"
                    className="mx-auto"
                    onClick={loadMore}
                  >
                    {dict.general.viewMore}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
