import React from "react";
import SectionOne from "../home/components/SectionOne";
import SectionTwo from "../home/components/SectionTwo";
import SectionThree from "../home/components/SectionThree";
import SectionSix from "../home/components/SectionSix";
import { getHomePageSetting } from "@/sanity/query/homePage";
import FeaturedStories from "../(shared)/components/FeaturedStories";
import "../home/style.css";
import Header from "../(shared)/components/Header";
import Footer from "../(shared)/components/Footer";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";
import { Metadata } from "next";
import { Organization, WithContext } from "schema-dts";
import Script from "next/script";
import { getDictionary, Locale } from "./dictionaries";
import Projects from "../projects/components/Projects";
import IndustrySelector from "../projects/components/IndustrySelector";
import { getProjects } from "@/sanity/query/project";
import { getReviews } from "@/sanity/query/review";
import Reviews from "../home/components/Reviews";

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
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams: { industry: string };
}) {
  const dict = await getDictionary(params.lang);
  const homePageSetting = await getHomePageSetting();
  const industrySlug = searchParams.industry;
  const projects = await getProjects({
    limit: 18,
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
        <SectionSix
          sketchConcept={homePageSetting?.sketchConcept}
          dict={dict}
        />
        {/* <Reviews
          dict={dict}
          subheader={
            <Reviews.Subheader>
              At Jeremy Ellsworth Designs LLC, we are committed to your success.
              <br className="hidden lg:block" />
              We believe that our success lies in your success, and we are
              dedicated to helping you achieve it.
            </Reviews.Subheader>
          }
          footerText={
            <Reviews.FooterText>
              <p className="max-w-[344px]">
                With over{" "}
                <strong className="text-foreground">
                  1,800+ 5/5 star reviews
                </strong>{" "}
                across Facebook, Google Business page
              </p>
            </Reviews.FooterText>
          }
          footerButton={
            <Link href="/reviews" className="inline-block">
              <Reviews.FooterButton>ALL STORIES</Reviews.FooterButton>
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
