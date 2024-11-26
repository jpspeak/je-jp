// import Image from "next/image";
// import Aside from "./components/Aside";
// import Header from "./components/Header";
// import Articles from "./components/Articles";
// import Footer from "../(shared)/components/Footer";
// import MainHeader from "../(shared)/components/Header";
// import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";
// import { getArticles } from "@/sanity/query/article";
// import CategorySelector from "./components/CategorySelector";
// import { CollectionPage, WithContext } from "schema-dts";
// import { blockContentToPlainText } from "react-portable-text";
// import Script from "next/script";

// export const revalidate = 60;

// async function ArticlesPage({
//   searchParams,
// }: {
//   searchParams: { category: string };
// }) {
//   const categorySlug = searchParams.category;
//   const articles = await getArticles({
//     categorySlug,
//     limit: 10,
//   });

//   const structuredData: WithContext<CollectionPage> = {
//     "@context": "https://schema.org",
//     "@type": "CollectionPage",
//     name: "Jeremy Ellsworth Designs - Articles",
//     url: "https://www.jedesigns.com/articles",
//     description:
//       "Read our latest articles on branding, graphic design, vehicle wraps, and more.",
//     hasPart: articles?.map((article) => ({
//       "@type": "Article",
//       name: article.title,
//       headline: article.title,
//       author: {
//         "@type": "Person",
//         name: "Jeremy Ellsworth",
//       },
//       datePublished: article._createdAt,
//       url: `https://www.jedesigns.com/articles/${article.slug?.current}`,
//       description:
//         article.body && article.body.length > 0
//           ? blockContentToPlainText(article.body as [any])
//           : "",
//     })),
//   };
//   return (
//     <>
//       <Script
//         id="articles"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <MainHeader />
//       <main>
//         <Header />
//         <div className="relative pt-[30px] lg:pt-[106px] pb-[124px]">
//           <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
//             <Image
//               src="/assets/images/shape-7-copy-7.svg"
//               fill
//               alt="Transition"
//               className="object-cover"
//             />
//           </div>
//           <div className="container px-4 mx-auto flex flex-col lg:flex-row justify-between gap-[40px]">
//             <Articles
//               initialArticles={articles}
//               categorySelector={<CategorySelector />}
//             />
//             <Aside />
//           </div>
//         </div>
//       </main>
//       <Footer />
//       <div className="hidden lg:block">
//         <FakePurchase />
//       </div>
//     </>
//   );
// }

// export default ArticlesPage;
