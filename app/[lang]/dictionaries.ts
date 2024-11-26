import "server-only";

// Define the type for the locale keys
export type Locale = "en" | "ja";

// Define the type for dictionary structure
export type Dictionary = {
  navigation: {
    home: string;
    blog: string;
    cta: string;
  };
  homePage: {
    sectionTwo: {
      description: string;
    };
    reviews: {
      title: string;
      description: string;
      info: string;
      cta: string;
    };
  };
  reviews: {
    customerSatisfaction: string;
  };
};

// Define the type for the dictionaries
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
};

// Function to get the dictionary for a given locale
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.ja();
};
