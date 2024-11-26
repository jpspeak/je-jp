// import SectionOne from "./components/SectionOne";
// import SectionTwo from "./components/SectionTwo";
// import ArticleSection from "./components/ArticleSection";
// import SectionFour from "./components/SectionFour";
// import Header from "@/app/(shared)/components/Header";
// import FakePurchase from "@/app/(shared)/components/fake-purchase/FakePurchase";
// import ShareModalContainer from "./components/ShareModalContainer";
// import { getArticle } from "@/sanity/query/article";
// import SectionOneMedia from "./components/SectionOneMedia";

// export const revalidate = 60;

// async function ArticlePage({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   const article = await getArticle({ slug });

//   return (
//     <>
//       <Header />
//       <div className="border-[1px] border-muted shadow-sm" />
//       <main className="container px-4 lg:max-w-[1154px] pb-[100px] lg:pb-[152px] pt-[40px] lg:pt-[80px]">
//         <SectionOne article={article} />
//         <div className="lg:flex lg:gap-[35px] lg:pl-[117px] mt-6 lg:mt-[58px]">
//           <div className="w-full">
//             <SectionOneMedia article={article} />

//             {(article.block?.title || article.block?.body) && (
//               <SectionTwo article={article} />
//             )}

//             {article.sections?.map((articleSection: any, i: number) => (
//               <ArticleSection key={i} articleSection={articleSection} />
//             ))}

//             <SectionFour />
//           </div>
//           <ShareModalContainer pathname={`articles/${article.slug?.current}`} />
//         </div>
//       </main>
//       <div className="hidden lg:block">
//         <FakePurchase />
//       </div>
//     </>
//   );
// }

// export default ArticlePage;

import React from "react";
import ArticleModal from "./components/ArticleModal";
import { getArticle, getArticles } from "@/sanity/query/article";
import { blockContentToPlainText } from "react-portable-text";
import { urlForImage } from "@/sanity/lib/image";
import { Article as ArticleType } from "@/sanity.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Article, WithContext } from "schema-dts";

export const revalidate = 60;

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = await getArticles({
    limit: 100,
  });
  return articles.map((p) => p.slug?.current);
}

// Function to generate metadata dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const article: ArticleType = await getArticle({ slug: params.slug });

  if (!article) return;

  return {
    title: article.title,
    description:
      article.subtitle && article.subtitle.length > 0
        ? blockContentToPlainText(article.subtitle as [any])
        : "",
    openGraph: {
      title: article.title,
      description:
        article.subtitle && article.subtitle.length > 0
          ? blockContentToPlainText(article.subtitle as [any])
          : "",
      images: [
        {
          url: urlForImage(article.mainImage as any),
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      url: `https://jedesigns.com/articles/${article.slug?.current}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description:
        article.subtitle && article.subtitle.length > 0
          ? blockContentToPlainText(article.subtitle as [any])
          : "",
      images: [urlForImage(article.mainImage as any)],
    },
  };
}

async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const article = await getArticle({ slug });

  if (!article) return notFound();
  const structuredData: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.jedesigns.com/articles/${article.slug?.current}`,
    },
    name: article.title,
    headline: article.title,
    url: `https://www.jedesigns.com/articles/${article.slug?.current}`,
    description:
      article.subtitle && article.subtitle.length > 0
        ? blockContentToPlainText(article.subtitle as [any])
        : "",
    image: urlForImage(article.mainImage as any),
    author: {
      "@type": "Person",
      name: "Jeremy Ellsworth",
    },
    publisher: {
      "@type": "Organization",
      name: "Jeremy Ellsworth Designs",
    },
  };

  return (
    <>
      <Script
        id="project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ArticleModal article={article} />;
    </>
  );
}

export default ArticlePage;
