import useSWR from "swr";
import StarRating from "./StarRating";
import numeral from "numeral";
import { getReviewsCountByRating } from "@/sanity/query/review";
import { Dictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";
import { isEnglishText } from "../lib/utils";

function HeaderRating({ dict }: { dict: Dictionary }) {
  const { data: reviewRatingCount } = useSWR("getReviewsCountByRating", () =>
    getReviewsCountByRating()
  );

  const total = Object.values(reviewRatingCount || {}).reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  const formattedNumber = numeral(total).format("0.[0]a");
  const link = isEnglishText(dict.navigation.home)
    ? "/en#reviews"
    : "/#reviews";
  return (
    <Link href={link}>
      <StarRating
        value={5}
        text={
          <StarRating.Text className="text-xs">
            {formattedNumber}
          </StarRating.Text>
        }
        ratingClass="max-w-[70px]"
      />
      <p className="text-[9.3px] lg:text-sm mt-[3px] leading-tight font-semibold text-[#0d0c22]">
        {dict.reviews.customerSatisfaction}
      </p>
    </Link>
  );
}
export default HeaderRating;
