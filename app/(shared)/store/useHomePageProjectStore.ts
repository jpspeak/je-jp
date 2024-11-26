import { create } from "zustand";

type HomePageProjectStore = {
  industry: string;
  setIndustry: (industry: string) => void;
};

const useHomePageProjectStore = create<HomePageProjectStore>()((set) => ({
  industry: "",
  setIndustry: (industry) => set({ industry }),
}));

export default useHomePageProjectStore;
