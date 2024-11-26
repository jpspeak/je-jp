"use client";

import ReviewCard from "@/app/(shared)/components/ReviewCard";
import Image from "next/image";
import { Review } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { BreakableText } from "./BreakableText";

function FeaturedStories({
  featuredStories,
  dict,
}: {
  featuredStories: (Review & {
    reviewPlatformLogo: any;
    reviewPlatformName: string;
  })[];
  dict: any;
}) {
  return (
    <section className="relative py-[53px] lg:pt-[80px] lg:pb-[80px] bg-[#f9f8f3] static-background-hard">
      <div className="w-full h-[690px] bg-[linear-gradient(transparent,#f7f5ef)] absolute z-[-1] bottom-0" />
      <div className="container px-4 mx-auto overflow-hidden lg:overflow-visible">
        <div className="relative h-[138px] lg:h-[250px] w-full">
          {/* <Image
            src="/assets/images/excellence.png"
            alt="Excellence"
            fill
            className="object-contain sm:transform-none scale-[1.6] -translate-y-[4px]"
          /> */}
          <div className="absolute w-full h-full flex flex-col gap-[8px] lg:gap-0 justify-center items-center">
            {/* <div className="relative w-[138px] h-[30px] lg:w-[239px] lg:h-[52px] mx-auto">
              <Image
                src="/assets/images/experience-the-same@3x.webp"
                alt="Experience the same"
                fill
                className="object-contain"
              />
            </div> */}
            <p className="text-[24px] lg:text-[28px] -rotate-[3deg] text-[#164ccb] group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:text-[24px] lg:group-[.lang-en-family]:text-[32px] group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular">
              {dict.homePage.featuredStories.subtitle}
            </p>
            <h1 className="text-[50px] lg:text-[90px] text-center group-[.lang-ja-family]:font-greycliffjpcd group-[.lang-en-family]:font-portlin group-[.lang-en-weight]:font-regular group-[.lang-ja-weight]:font-extrabold uppercase tracking-[0.5px] leading-[.9] text-balance mt-[10px] lg:mt-[30px]">
              {dict.homePage.featuredStories.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-4 lg:gap-[30px] mt-6 lg:mt-0 lg:[&>*:nth-child(2)]:mt-[40px] lg:[&>*:nth-child(3)]:mt-[80px]">
          {featuredStories?.map((review) => (
            <div
              key={review._id}
              className="relative z-[1] hover:rotate-[-3deg] transition-all duration-300"
            >
              <ReviewCard
                avatar={urlForImage(review.avatar as any)}
                reviewerName={review.reviewerName || ""}
                reviewerInfo={review.reviewerInfo || ""}
                rating={review.rating || 5}
                text={review.reviewText}
                platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
                platformName={review.reviewPlatformName}
                images={review.images}
              />
            </div>
          ))}
        </div>
        {/* <Swiper
          loop
          spaceBetween={16}
          slidesPerView={1.2}
          className="lg:rounded-[15px] lg:!hidden !overflow-visible mt-[10px]"
        >
          {featuredStories.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewCard
                key={review._id}
                avatar={urlForImage(review.avatar as any)}
                reviewerName={review.reviewerName || ""}
                reviewerInfo={review.reviewerInfo || ""}
                rating={review.rating || 5}
                text={review.reviewText}
                platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
                platformName={review.reviewPlatformName}
                images={review.images}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}

        <p className="relative z-[1] text-xs leading-normal lg:text-lg mt-[30px] lg:mt-[40px] text-center text-[#53545c]">
          {/* At Jeremy Ellsworth Designs LLC, we are committed to your success.
          <br className="hidden lg:block" />
          We believe that our success lies in your success, and we are dedicated
          to helping you achieve it. */}
          {/* {dict.homePage.featuredStories.infoLineOne}
          <br className="hidden lg:block" />
          {dict.homePage.featuredStories.infoLineTwo} */}
          <BreakableText text={dict.homePage.featuredStories.description} />
        </p>
      </div>
      <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[1] static-background-hard before:z-[1] before:h-[86%]">
        <Image
          src="/assets/images/shape-7-copy-14.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default FeaturedStories;
