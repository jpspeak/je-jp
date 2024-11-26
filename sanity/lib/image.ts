import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  if (!source || !source.asset || !source.asset._ref) return "";
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
