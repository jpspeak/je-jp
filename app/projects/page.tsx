// import Reviews from "../(shared)/components/Reviews";
// import Header from "./components/Header";
// import Projects from "./components/Projects";
// import Footer from "../(shared)/components/Footer";
// import MainHeader from "../(shared)/components/Header";
// import Link from "next/link";
// import Script from "next/script";
// import IndustrySelector from "./components/IndustrySelector";
// import { getProjects } from "@/sanity/query/project";
// import { getProjectsPageSetting } from "@/sanity/query/projectsPage";
// import { urlForImage } from "@/sanity/lib/image";
// import { CollectionPage, WithContext } from "schema-dts";
// import { blockContentToPlainText } from "react-portable-text";

// export const revalidate = 60;

// async function ProjectsPage({
//   searchParams,
// }: {
//   searchParams: { industry: string; sortBy: string };
// }) {
//   const industrySlug = searchParams.industry;
//   const sortBy = searchParams.sortBy;

//   const projects = await getProjects({
//     limit: 18,
//     industrySlug,
//     sortBy,
//   });

//   const projectsPageSetting = await getProjectsPageSetting();

//   const structuredData: WithContext<CollectionPage> = {
//     "@context": "https://schema.org",
//     "@type": "CollectionPage",
//     name: "Jeremy Ellsworth Designs - Projects",
//     description:
//       "Explore a collection of creative works, including logo designs and vehicle wraps.",
//     url: "https://www.jedesigns.com/projects",
//     hasPart: projects?.map((project) => ({
//       "@type": "VisualArtwork",
//       name: project.title,
//       creator: {
//         "@type": "Person",
//         name: "Jeremy Ellsworth",
//       },
//       image: urlForImage(project.mainImage as any),
//       artform: "Artwork",
//       artMedium: "Digital",
//       description:
//         project.body && project.body.length > 0
//           ? blockContentToPlainText(project.body as [any])
//           : "",
//     })),
//   };

//   return (
//     <>
//       <Script
//         id="projects"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <MainHeader />
//       <main>
//         <Header articleLink={projectsPageSetting?.articleLink || ""} />
//         <Projects
//           initialProjects={projects}
//           industrySelector={<IndustrySelector />}
//         />
//         <Reviews
//           subheader={
//             <Reviews.Subheader>
//               Don&apos;t take our word for it, we let our customers do the
//               talking for us as there is no better way to let you know how good
//               we really are then by you hearing it directly from them.
//             </Reviews.Subheader>
//           }
//           footerButton={
//             <Link href="/reviews" className="inline-block">
//               <Reviews.FooterButton>MORE STORIES</Reviews.FooterButton>
//             </Link>
//           }
//         />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default ProjectsPage;
