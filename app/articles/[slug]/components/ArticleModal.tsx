// "use client";

// import { urlForImage } from "@/sanity/lib/image";
// import { Article } from "@/sanity.types";
// import { Dialog, DialogContent } from "@/app/(shared)/components/ui/dialog";
// import Image from "next/image";
// import PortableText from "react-portable-text";
// import ShareModal from "@/app/(shared)/components/ShareModal";
// import BlockA from "@/app/(shared)/components/BlockA";
// import ModalCloseButton from "@/app/projects/[slug]/components/ModalCloseButton";
// import ArticleBlock from "./ArticleBlock";

// function ArticleModal({ article }: { article: Article }) {
//   return (
//     <Dialog open={true}>
//       <DialogContent
//         hideCloseButton
//         className="max-w-full h-svh  max-h-full bg-transparent border-none p-0 !rounded-none"
//       >
//         <div className="h-dvh w-full overflow-hidden">
//           <div className="pt-[54px] pb-0 h-full relative w-full">
//             <ModalCloseButton />
//             {/* Separator */}
//             <div className="absolute w-full h-[18px] lg:h-[37px] top-[46px] z-[1]">
//               <Image
//                 src="/assets/images/shape-7-copy-7.svg"
//                 fill
//                 alt="Transition"
//                 className="object-cover"
//               />
//             </div>
//             {/*  */}

//             {/* Content */}
//             <div className="relative bg-white overflow-y-scroll h-full">
//               <div className="lg:max-w-[1122px] mx-auto relative">
//                 <div className="px-4 pt-[24px] lg:pt-[46px] lg:px-[calc(117px+58px)]">
//                   {/* <div className="text-xs px-[12px] py-[8px] rounded-[5px] border border-foreground w-max font-medium leading-[.8]">
//                     {project.industry.title}
//                   </div> */}

//                   <h1 className="text-[40px] lg:text-[80px] leading-[.9] font-portlin uppercase tracking-[0.5px] lg:mt-[24px]">
//                     {article.title}
//                   </h1>
//                   {article.subtitle && (
//                     <PortableText
//                       className="mt-[30px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px] [&_a]:underline [&_a]:text-blue-500"
//                       content={article.subtitle as any}
//                     />
//                   )}
//                 </div>
//                 <div className="lg:flex gap-[35px] lg:pl-[117px] mt-6 lg:mt-[54px] px-4 lg:px-0">
//                   <div>
//                     <div className="relative lg:rounded-[10px] overflow-hidden lg:px-0 w-[calc(100vw)] -left-4 lg:w-full lg:left-0">
//                       <Image
//                         src={urlForImage(article.mainImage as any)}
//                         width="900"
//                         height="900"
//                         alt={article.title || ""}
//                       />
//                     </div>
//                     {article.body && (
//                       <PortableText
//                         className="article-body mt-6 lg:mt-[44px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px] [&_a]:underline [&_a]:text-blue-500"
//                         content={article.body as any}
//                         serializers={{
//                           image: (image: any) => (
//                             <img
//                               src={urlForImage(image)}
//                               alt={image.alt || "Image"}
//                               style={{ maxWidth: "100%", height: "auto" }}
//                               className="rounded-[6px] lg:rounded-[10px]"
//                             />
//                           ),
//                         }}
//                       />
//                     )}
//                     {/* {(article.block?.title || article.block?.body) && (
//                       <SectionTwo article={article} />
//                     )} */}
//                     {article.blocks?.map((articleBlock: any, i: number) => (
//                       <ArticleBlock key={i} articleBlock={articleBlock} />
//                     ))}
//                     {/* <SectionFour /> */}
//                     {/* {project.secondaryBody?.length && (
//                       <div className="px-4 lg:px-[54px] mt-[40px] lg:mt-[72px]">
//                         <PortableText
//                           className="text-[15px] leading-[26px] lg:text-lg lg:leading-[30px] text-muted-foreground [&_a]:underline [&_a]:text-blue-500"
//                           content={project.secondaryBody as any}
//                         />
//                       </div>
//                     )}
//                     {project.sliderImages && (
//                       <div className="mt-[50px] lg:mt-[70px] relative z-[0]">
//                         <Carousel images={project.sliderImages as any} />
//                       </div>
//                     )}
//                     {project.secondaryImage && (
//                       <div className="px-4 lg:px-0">
//                         <Image
//                           src={urlForImage(project.secondaryImage as any)}
//                           width="900"
//                           height="900"
//                           alt={project.secondaryImage?.alt || ""}
//                           className="rounded-[8px] lg:rounded-[10px] mt-[50px] lg:mt-[60px]"
//                         />
//                       </div>
//                     )} */}
//                   </div>
//                   <div className="sticky self-start hidden lg:flex top-[10px] pt-[40px] z-[1] flex-col gap-[24px]">
//                     <div className="flex flex-col items-center">
//                       <ShareModal
//                         pathname={`/articles/${article.slug?.current}`}
//                       />
//                       <p className="mt-[10px] text-sm font-bold">Share</p>
//                     </div>

//                     {/* <div className="flex flex-col items-center">
//                       <CalComModal.Trigger>
//                         <div className="flex bg-primary items-center justify-center size-[70px] border-[1px] rounded-full border-muted">
//                           <Image
//                             src="/assets/images/telephone-stroke-rounded.svg"
//                             height="22"
//                             width="22"
//                             alt="telephone-stroke-rounded"
//                           />
//                         </div>
//                       </CalComModal.Trigger>
//                       <p className="mt-[10px] text-sm font-bold">Quote</p>
//                     </div> */}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-[65px] pb-[65px]">
//                 <BlockA title="NEW ARTICLES EVERY WEEK!" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default ArticleModal;
