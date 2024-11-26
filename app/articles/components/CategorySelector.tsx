import CategorySelectorClient from "./CetegorySelectorClient";
import { getArticlesCategories } from "@/sanity/query/article";

export const revalidate = 60;

async function CategorySelector() {
  const articleCategories = await getArticlesCategories();

  return <CategorySelectorClient options={articleCategories} />;
}

export default CategorySelector;
