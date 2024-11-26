import StarRating from "@/app/(shared)/components/StarRating";
import Image from "next/image";
import { Progress } from "@/app/(shared)/components/ui/progress";
import { getReviewsCountByRating } from "@/sanity/query/review";

type RatingValue = "1" | "2" | "3" | "4" | "5";

const percentage = (count: number, totalCount: number) =>
  (count * 100) / totalCount;

export const revalidate = 60;

async function ReviewsData() {
  const reviewRatingCount = await getReviewsCountByRating();

  const total = Object.values(reviewRatingCount).reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  function calculateAverageRating(ratings: { [key: string]: number }): number {
    let totalRatings = 0;
    let totalUsers = 0;

    // Loop through each rating and its count
    for (const rating in ratings) {
      const count = ratings[rating];
      const numericRating = Number(rating);

      // Sum up total rating values
      totalRatings += numericRating * count;

      // Sum up total users who submitted ratings
      totalUsers += count;
    }

    // Avoid division by zero
    const average = totalUsers === 0 ? 0 : totalRatings / totalUsers;

    // Round off the average rating to the nearest whole number
    return Math.round(average);
  }

  const averageRating = calculateAverageRating(reviewRatingCount);

  const renderBars = () => {
    return Object.keys(reviewRatingCount)
      .sort((a, b) => Number(b) - Number(a))
      .map((key, i) => (
        <Bar
          key={key}
          rating={Number(key)}
          count={reviewRatingCount[key as RatingValue]}
          percentage={percentage(reviewRatingCount[key as RatingValue], total)}
        />
      ));
  };
  return (
    <div>
      <div className="flex gap-4 lg:gap-[22px] items-end">
        <p className="text-[60px] lg:text-[80px] font-portlin uppercase tracking-[0.5px] leading-none">
          {total}
        </p>
        <div>
          <StarRating
            value={averageRating}
            text={<StarRating.Text>{averageRating}/5</StarRating.Text>}
          />
          <p className="leading-none lg:leading-none pb-1 mt-[8px] lg:mt-[12px] text-xs lg:text-sm font-medium text-muted-foreground">
            Customer Satisfaction
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-[24px] mt-[40px]">
        {renderBars()}
      </div>
      <div className="flex items-center gap-[28px] mt-[40px]">
        <div className="relative h-[20px] w-[40px] lg:h-[25px] lg:w-[50px]">
          <Image
            src="/assets/images/bbb.webp"
            fill
            alt="BBB logo"
            className="object-contain"
            quality="100"
          />
        </div>
        <div className="relative h-[14px] w-[60px] lg:h-[17px] lg:w-[86px]">
          <Image
            src="/assets/images/facebook.webp"
            fill
            alt="Facebook logo"
            className="object-contain"
            quality="100"
          />
        </div>
        <div className="relative h-[21px] w-[48px] lg:h-[21px] lg:w-[63px] self-end">
          <Image
            src="/assets/images/google.webp"
            fill
            alt="Google logo"
            className="object-contain"
            quality="100"
          />
        </div>
      </div>
    </div>
  );
}

function Bar({
  rating,
  count,
  percentage,
}: {
  rating: number;
  count: number;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-[18px]">
      <span className="text-sm lg:text-base font-bold whitespace-nowrap leading-none lg:leading-none">
        {rating} Star
      </span>
      <Progress
        value={percentage}
        className="w-full lg:w-[306px] h-[11px] rounded-[2px] bg-[#e8e7e6]"
      />
      <span className="text-sm leading-none lg:leading-none lg:text-base font-medium">
        ({count})
      </span>
    </div>
  );
}

export default ReviewsData;
