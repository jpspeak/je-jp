import React from "react";
import SectionOne from "./home/components/SectionOne";
import SectionTwo from "./home/components/SectionTwo";
import SectionThree from "./home/components/SectionThree";
import SectionFour from "./home/components/SectionFour";
import OurSolutions from "./home/components/OurSolutions";
import SectionSix from "./home/components/SectionSix";
import Link from "next/link";
import { getHomePageSetting } from "@/sanity/query/homePage";
import FeaturedStories from "./(shared)/components/FeaturedStories";
import "./home/style.css";
import Header from "./(shared)/components/Header";
import Footer from "./(shared)/components/Footer";
import FakePurchase from "./(shared)/components/fake-purchase/FakePurchase";
import { Metadata } from "next";
import { Organization, WithContext } from "schema-dts";
import Script from "next/script";
import { getDictionary } from "./[lang]/dictionaries";
import Projects from "./projects/components/Projects";
import { getProjects } from "@/sanity/query/project";
import IndustrySelector from "./projects/components/IndustrySelector";
import { BreakableText } from "./(shared)/components/BreakableText";
import Reviews from "./home/components/Reviews";
import { getReviews } from "@/sanity/query/review";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Branding Without Boundaries & Forward-thinking Vehicle Wrap Designs",
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
};

const structuredData: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jeremy Ellsworth Designs",
  url: "https://www.jedesigns.com",
  logo: "https://jedesigns.com/assets/images/je-logo.png",
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 Cherry Street",
    addressLocality: "Belmont",
    addressRegion: "NH",
    postalCode: "03220",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/jnellsworth",
    "https://www.x.com/jnellsworth_",
    "https://www.instagram.com/jnellsworth",
  ],
};

async function HomePage({
  searchParams,
}: {
  searchParams: { project_industry: string };
}) {
  const dict = await getDictionary("ja");
  const homePageSetting = await getHomePageSetting();
  const industrySlug = searchParams.project_industry;
  const projects = await getProjects({
    limit: 9,
    industrySlug,
  });
  const reviews = await getReviews({ limit: 9 });
  return (
    <>
      <Script
        id="home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header dict={dict} />
      <main>
        <SectionOne
          dict={dict}
          projectLink={homePageSetting?.projectLinkHeader ?? ""}
        />
        <div className="relative static-background-hard bg-[#f9f8f3]">
          <SectionTwo dict={dict} />
          <FeaturedStories
            featuredStories={homePageSetting?.featuredStories as any[]}
            dict={dict}
          />
        </div>
        <SectionThree dict={dict} />
        {/* <OurSolutions ourSolutions={homePageSetting?.ourSolutions as any[]} /> */}
        <Projects
          initialProjects={projects}
          industrySelector={<IndustrySelector />}
          dict={dict}
        />
        {/* <SectionFour projects={homePageSetting?.projects as any[]} /> */}
        <SectionSix
          sketchConcept={homePageSetting?.sketchConcept}
          dict={dict}
        />
        {/* <Reviews
          dict={dict}
          subheader={
            <Reviews.Subheader>
              <BreakableText text={dict.homePage.reviews.description} />
            </Reviews.Subheader>
          }
          footerText={
            <Reviews.FooterText>
              <p>
    
                <BreakableText text={dict.homePage.reviews.info} />
              </p>
            </Reviews.FooterText>
          }
          footerButton={
            <Link href="/reviews" className="inline-block">
              <Reviews.FooterButton>
                {dict.homePage.reviews.cta}
              </Reviews.FooterButton>
            </Link>
          }
        /> */}
        <Reviews dict={dict} initialReviews={reviews} />
      </main>

      <Footer
        dict={dict}
        projectLink={homePageSetting?.projectLinkFooter ?? ""}
      />
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}

export default HomePage;
