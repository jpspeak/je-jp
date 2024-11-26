import { create } from "zustand";
type Calculation = {
  roi: number;
  newAnnualRevenue: number;
  addedRevenue: number;
  percentageIncrease: number;
  goalAnnualRevenue: number;
  brandingStatus: string;
};
type CalculationStore = {
  calculation: Calculation | null;
  isCalculating: boolean;
  setCalculation: (calculation: Calculation) => void;
  setIsCalculating: (isCalculating: boolean) => void;
};

const initialState = {
  calculation: null,
  isCalculating: false,
};

export const useCalculationStore = create<CalculationStore>()((set) => ({
  ...initialState,
  setCalculation: (calculation) => set({ calculation }),
  setIsCalculating: (isCalculating) => set({ isCalculating }),
}));
