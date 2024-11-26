// "use client";

// import CalComModal from "@/app/(shared)/components/CalComModal";
// import { Button } from "@/app/(shared)/components/ui/button";
// import { Article } from "@/sanity.types";
// import Link from "next/link";
// import PortableText from "react-portable-text";

// function SectionTwo({ article }: { article: Article }) {
//   return (
//     <section className="lg:px-[58px] mt-[50px] lg:mt-[65px]">
//       {article.block?.title && (
//         <h2 className="font-portlin uppercase tracking-[0.5px] text-[30px] lg:text-[60px] leading-[.9]">
//           {article.block.title}
//         </h2>
//       )}
//       {article.block?.body && (
//         <PortableText
//           content={article.block.body}
//           className="mt-6 lg:mt-[40px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px]"
//         />
//       )}

//       {(article.block?.primaryButton?.text ||
//         article.block?.secondaryButton?.text) && (
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-max items-center gap-3 lg:gap-[27px] mt-6 lg:mt-[44px]">
//           {article.block?.primaryButton?.link ? (
//             <Link href={article.block.primaryButton.link}>
//               <Button className="w-full lg:w-max">
//                 {article.block.primaryButton.text || "CHOOSE A PACKAGE"}
//               </Button>
//             </Link>
//           ) : (
//             <CalComModal.Trigger>
//               <Button className="w-full lg:w-max">
//                 {article.block.primaryButton?.text || "REQUEST A QUOTE"}
//               </Button>
//             </CalComModal.Trigger>
//           )}
//           {article.block?.secondaryButton?.link ? (
//             <Link href={article.block.secondaryButton.link}>
//               <Button variant="outline" className="w-full lg:w-max">
//                 {article.block.secondaryButton.text || "CHOOSE A PACKAGE"}
//               </Button>
//             </Link>
//           ) : (
//             <CalComModal.Trigger>
//               <Button variant="outline" className="w-full lg:w-max">
//                 {article.block.secondaryButton?.text || "REQUEST A QUOTE"}
//               </Button>
//             </CalComModal.Trigger>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }
// export default SectionTwo;
