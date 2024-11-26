import { Suspense } from "react";
import { getReviews } from "@/sanity/query/review";
import Image from "next/image";
import Reviews from "./Reviews";
import ReviewsData from "./ReviewsData";
import PlatformSelector from "./PlatformSelector";
import SectionOneVideo from "./SectionOneVideo";

export const revalidate = 60;

async function SectionOne() {
  const reviews = await getReviews({ limit: 9 });
  return (
    <section className="relative pt-[24px] lg:pt-[140px] pb-[70px] lg:pb-[124px] bg-[#f9f8f3]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-12.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="lg:container lg:px-4 mx-auto">
        <div className="container px-4 lg:px-0 flex justify-between flex-col lg:flex-row gap-[30px]">
          <ReviewsData />
          <div className="w-full lg:max-w-[486px]">
            <SectionOneVideo />
          </div>
        </div>
        <Suspense>
          <Reviews
            initialReviews={reviews}
            platformSelector={<PlatformSelector />}
          />
        </Suspense>
      </div>
    </section>
  );
}

export default SectionOne;
