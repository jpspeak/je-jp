// import Header from "./components/Header";
// import SectionFour from "./components/SectionFour";
// import SectionOne from "./components/SectionOne";
// import SectionThree from "./components/SectionThree";
// import SectionTwo from "./components/SectionTwo";
// import FeaturedStories from "../(shared)/components/FeaturedStories";
// import SectionFive from "./components/SectionFive";
// import { getPricingPageSetting } from "@/sanity/query/pricingPage";
// import Script from "next/script";
// import { Service, WithContext } from "schema-dts";

// export const revalidate = 60;

// const structuredData: WithContext<Service> = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   name: "Jeremy Ellsworth Designs - Services",
//   url: "https://www.jedesigns.com/pricing",
//   logo: "https://jedesigns.com/assets/images/je-logo.png",
//   description:
//     "Explore our comprehensive design services, including logo design, vehicle wraps, and branding packages.",
//   serviceType: "Graphic Design Services",
//   provider: {
//     "@type": "Organization",
//     name: "Jeremy Ellsworth Designs",
//     url: "https://www.jedesigns.com",
//   },
//   offers: [
//     {
//       "@type": "Offer",
//       name: "Standard Package",
//       priceCurrency: "USD",
//       price: "2999",
//       priceSpecification: {
//         "@type": "UnitPriceSpecification",
//         priceCurrency: "USD",
//         price: "2999",
//         billingDuration: "P1M",
//       },
//       description:
//         "Standard Package includes: One request at a time, infinite revisions, one brand, infinite design requests, and infinite stock photos. Pause or cancel anytime.",
//       url: "https://www.jedesigns.com/pricing#package",
//       availability: "https://schema.org/InStock",
//       eligibleQuantity: {
//         "@type": "QuantitativeValue",
//         value: 1,
//         unitText: "request at a time",
//       },
//     },
//     {
//       "@type": "Offer",
//       name: "Shock Package",
//       priceCurrency: "USD",
//       price: "4999",
//       priceSpecification: {
//         "@type": "UnitPriceSpecification",
//         priceCurrency: "USD",
//         price: "4999",
//         billingDuration: "P1M",
//       },
//       description:
//         "Shock Package includes: Two requests at a time, infinite revisions, infinite brands, infinite design requests, and infinite stock photos. Pause or cancel anytime.",
//       url: "https://www.jedesigns.com/pricing#package",
//       availability: "https://schema.org/InStock",
//       eligibleQuantity: {
//         "@type": "QuantitativeValue",
//         value: 2,
//         unitText: "requests at a time",
//       },
//     },
//   ],
// };
// async function PricingPage() {
//   const pricingPageSetting = await getPricingPageSetting();

//   return (
//     <>
//       <Script
//         id="pricing"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <main>
//         <Header articleLink={pricingPageSetting?.articleLink || ""} />
//         <SectionOne />
//         <SectionTwo sketchConcept={pricingPageSetting?.sketchConcept} />
//         <SectionThree projects={pricingPageSetting?.projects as any[]} />
//         <FeaturedStories
//           featuredStories={pricingPageSetting?.featuredStories as any[]}
//         />
//         <SectionFour />
//         <SectionFive />
//         {/* <Reviews
//         subheader={
//           <Reviews.Subheader>
//             Don&apos;t take our word for it, we let our customers do the talking
//             for us as there is no better way to let you know how good we really
//             are then by you hearing it directly from them.
//           </Reviews.Subheader>
//         }
//         footerButton={<Reviews.FooterButton>MORE STORIES</Reviews.FooterButton>}
//       /> */}
//       </main>
//     </>
//   );
// }

// export default PricingPage;
