import { create } from "zustand";

type CalComStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useCalComStore = create<CalComStore>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCalComStore;
