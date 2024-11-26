"use client";

import { Dictionary } from "@/app/[lang]/dictionaries";
import { createContext, useContext, ReactNode, useState } from "react";

type DictionaryContextType = {
  dictionary: Dictionary;
  setDictionary: (dict: Dictionary) => void;
};

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined
);

type DictionaryProviderProps = {
  children: ReactNode;
  initialDictionary: Dictionary;
};

export function DictionaryProvider({
  children,
  initialDictionary,
}: DictionaryProviderProps) {
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary);

  return (
    <DictionaryContext.Provider value={{ dictionary, setDictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}
