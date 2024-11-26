import PlatformSelectorClient from "./PlatformSelectorClient";
import { getReviewsPlatforms } from "@/sanity/query/review";

export const revalidate = 60;

async function PlatformSelector() {
  const reviewsPlatforms = await getReviewsPlatforms();

  return <PlatformSelectorClient options={reviewsPlatforms} />;
}

export default PlatformSelector;
