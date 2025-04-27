import { create } from "zustand";
import { LocationData } from "../types";
interface LocationStore {
  locations: Omit<LocationData, "show">[];
  setLocations: (locations: Omit<LocationData, "show">[]) => void;
}
export const useLocationStore = create<LocationStore>((set) => ({
  locations: [],
  setLocations: (locations) => set({ locations }),
}));
