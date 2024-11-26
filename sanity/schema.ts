import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/blockContent";
import project from "./schemaTypes/project";
import industry from "./schemaTypes/industry";
import review from "./schemaTypes/review";
import reviewPlatform from "./schemaTypes/reviewPlatform";
import article from "./schemaTypes/article";
import articleCategory from "./schemaTypes/articleCategory";
import { singletonTypes } from "@/sanity.config";
import homePage from "./schemaTypes/homePage";
import projectsPage from "./schemaTypes/projectsPage";
import articlesPage from "./schemaTypes/articlesPage";
import pricingPage from "./schemaTypes/pricingPage";
import reviewsPage from "./schemaTypes/reviewsPage";
import faqPage from "./schemaTypes/faqPage";
import faqCategory from "./schemaTypes/faqCategory";
import faq from "./schemaTypes/faq";
import articleHashtag from "./schemaTypes/articleHashtag";

export const schema: { types: SchemaTypeDefinition[]; templates: any } = {
  types: [
    project,
    industry,
    review,
    reviewPlatform,
    // article,
    // articleCategory,
    // articleHashtag,
    blockContent,
    homePage,
    // projectsPage,
    // articlesPage,
    // pricingPage,
    // reviewsPage,
    // faqPage,
    // faq,
    // faqCategory,
  ],
  // Filter out singleton types from the global “New document” menu options
  templates: (templates: any[]) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
