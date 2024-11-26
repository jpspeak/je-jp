// import Header from "./components/Header";
// import SectionOne from "./components/SectionOne";
// import Script from "next/script";
// import { getFaqs } from "@/sanity/query/faq";
// import { getFaqPageSetting } from "@/sanity/query/faqPage";
// import { FAQPage as FAQPageType, WithContext } from "schema-dts";
// import { blockContentToPlainText } from "react-portable-text";

// export const revalidate = 60;

// async function FAQPage() {
//   const faqPageSetting = await getFaqPageSetting();
//   const allFaqs = await getFaqs();
//   const structuredData: WithContext<FAQPageType> = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     name: "Jeremy Ellsworth Designs - Frequently Asked Questions",
//     description:
//       "Find answers to commonly asked questions about our graphic design services, including logo design, vehicle wraps, pricing, and more.",
//     url: "https://www.jedesigns.com/faq",
//     mainEntity: allFaqs?.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text:
//           faq.answer && faq.answer.length > 0
//             ? blockContentToPlainText(faq.answer as [any])
//             : "",
//       },
//     })),
//   };
//   return (
//     <>
//       <Script
//         id="projects"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <main>
//         <Header articleLink={faqPageSetting?.articleLink || ""} />
//         <SectionOne faqCategories={faqPageSetting?.faqCategories as any[]} />
//       </main>
//     </>
//   );
// }

// export default FAQPage;
