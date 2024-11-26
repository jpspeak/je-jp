"use client";

import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { Review } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { useParams } from "next/navigation";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ReviewsMasonry({
  reviews,
  infiniteReviews,
}: {
  reviews?: (Review & {
    reviewPlatformLogo: any;
    reviewPlatformName: string;
  })[];
  infiniteReviews?: (Review & {
    reviewPlatformLogo: any;
    reviewPlatformName: string;
  })[][];
}) {
  const { lang } = useParams();

  const render = () => {
    if (reviews)
      return reviews?.map((review) => (
        <ReviewCard
          key={review._id}
          avatar={urlForImage(review.avatar as any)}
          reviewerName={review.reviewerName || ""}
          reviewerInfo={review.reviewerInfo || ""}
          rating={review.rating || 5}
          text={lang === "en" ? review.reviewText : review.reviewTextJapanese}
          platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
          platformName={review.reviewPlatformName}
          images={review.images}
        />
      ));
    if (infiniteReviews)
      return infiniteReviews?.map((reviews: any[], i: number) =>
        reviews.map((review) => {
          return (
            <ReviewCard
              key={review._id}
              avatar={urlForImage(review.avatar as any)}
              reviewerName={review.reviewerName || ""}
              reviewerInfo={review.reviewerInfo || ""}
              rating={review.rating || 5}
              text={
                lang === "en" ? review.reviewText : review.reviewTextJapanese
              }
              platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
              platformName={review.reviewPlatformName}
              images={review.images}
            />
          );
        })
      );
    return null;
  };
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry className="masonry-container">{render()}</Masonry>
    </ResponsiveMasonry>
  );
}
export default ReviewsMasonry;
