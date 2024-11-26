// import { getReviewsPageSetting } from "@/sanity/query/reviewsPage";
// import Header from "./components/Header";
// import SectionOne from "./components/SectionOne";
// import Script from "next/script";
// import { ItemList, WithContext } from "schema-dts";
// import { getReviews } from "@/sanity/query/review";

// export const revalidate = 60;

// async function ReviewsPage() {
//   const reviews = await getReviews({ limit: 50 });

//   const reviewsPageSetting = await getReviewsPageSetting();

//   const structuredData: WithContext<ItemList> = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     name: "Jeremy Ellsworth Designs - Customer Reviews",
//     url: "https://www.jedesigns.com/reviews",
//     description:
//       "Read what our customers have to say about our graphic design services, including logo design, vehicle wraps, and more.",
//     itemListElement: reviews?.map((review) => ({
//       "@type": "Review",
//       itemReviewed: {
//         "@type": "Organization",
//         name: "Jeremy Ellsworth Designs",
//       },
//       reviewRating: {
//         "@type": "Rating",
//         ratingValue: String(review.rating),
//         bestRating: "5",
//       },
//       author: {
//         "@type": "Person",
//         name: review.reviewerName,
//       },
//       reviewBody: review.reviewText,
//     })),
//   };
//   return (
//     <>
//       <Script
//         id="reviews"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <main>
//         <Header articleLink={reviewsPageSetting?.articleLink || ""} />
//         <SectionOne />
//       </main>
//     </>
//   );
// }

// export default ReviewsPage;
