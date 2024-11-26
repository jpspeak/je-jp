"use client";

import { PropsWithChildren, ReactNode } from "react";
import { Button } from "@/app/(shared)/components/ui/button";
import { Article } from "@/sanity.types";
import { getArticles } from "@/sanity/query/article";
import { urlForImage } from "@/sanity/lib/image";
import { usePathname, useSearchParams } from "next/navigation";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useSWRInfinite from "swr/infinite";
import PortableText from "react-portable-text";

function Articles({
  initialArticles,
  categorySelector,
}: PropsWithChildren<{
  initialArticles: Article[];
  categorySelector: ReactNode;
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get("category") || undefined;

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

  const ARTICLES_LIMIT = 10;

  const { data, isLoading, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    ([url, lastCreatedAt]) => {
      return getArticles({
        categorySlug,
        lastCreatedAt,
        limit: ARTICLES_LIMIT,
      });
    },
    {
      fallbackData: [initialArticles],
    }
  );

  const hasMore = data && data[data.length - 1]?.length >= ARTICLES_LIMIT;

  const loadMore = async () => {
    setSize(size + 1);
  };

  return (
    <section className="lg:max-w-[790px]">
      <div className="lg:hidden">{categorySelector}</div>
      {!isLoading && data?.[0]?.length === 0 && (
        <p className="text-sm lg:text-lg text-center lg:px-4 text-muted-foreground mt-[60px] lg:mt-0">
          NO RESULTS FOUND
        </p>
      )}

      {data?.map((articles: any[], i: number) => {
        return articles?.map((article, ii) => {
          if (i === 0 && ii === 0)
            return (
              <article
                key={article._id}
                className="border-b border-muted pb-6 lg:pb-[45px] grid grid-cols-1"
              >
                <header className="row-start-2 lg:row-start-1 mt-4 lg:mt-0">
                  <Link
                    href={`/articles/${article.slug?.current}`}
                    className="lg:hover:underline"
                  >
                    <h1 className="text-[40px] lg:text-[60px] font-portlin uppercase tracking-[0.5px] leading-[.92]">
                      {article.title}
                    </h1>
                  </Link>
                </header>
                <Link
                  href={`/articles/${article.slug?.current}`}
                  className="hover:underline block"
                >
                  <div className="w-full pb-[75%] relative mt-8 lg:mt-[40px] rounded-[6px] lg:rounded-[8px] overflow-hidden">
                    <Image
                      src={urlForImage(article.mainImage as any)}
                      alt={article.title || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <PortableText
                  content={article.body as any}
                  className="text-[15px] leading-[26px] lg:text-lg lg:leading-[30px] mt-4 lg:mt-[40px] line-clamp-3"
                />
              </article>
            );
          return (
            <article
              key={article._id}
              className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] lg:items-center gap-4 lg:gap-[38px] mt-6 lg:mt-[40px] border-b border-muted pb-6 lg:pb-[40px]"
            >
              <Link
                href={`/articles/${article.slug?.current}`}
                className="block w-full"
              >
                <div className="w-full pb-[75%] relative rounded-[6px] lg:rounded-[8px] overflow-hidden">
                  <Image
                    src={urlForImage(article.mainImage as any)}
                    alt={article.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div>
                <header>
                  <Link
                    href={`/articles/${article.slug?.current}`}
                    className="lg:hover:underline"
                  >
                    <h2 className="text-[40px] font-portlin uppercase tracking-[0.5px] leading-[.92] lg:leading-[1.06] line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                </header>
                {article.subtitle && (
                  <PortableText
                    className="text-[15px] leading-[26px] lg:text-lg lg:leading-[30px] mt-4 lg:mt-[26px] line-clamp-3 lg:line-clamp-2"
                    content={article.subtitle as any}
                  />
                )}
              </div>
            </article>
          );
        });
      })}

      {isLoading && (
        <div className="flex justify-center mt-[40px] lg:mt-0 lg:px-4">
          <Loader className="size-4 lg:size-8 animate-spin text-muted-foreground" />
        </div>
      )}

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
    </section>
  );
}

export default Articles;
