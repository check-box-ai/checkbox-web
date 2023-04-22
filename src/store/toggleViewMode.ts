import { create } from "zustand";

interface ToggleViewMode {
  toggleViewMode: boolean;
  update: (mode: boolean) => void;
}

export const useToggleViewMode = create<ToggleViewMode>((set) => ({
  toggleViewMode: false,
  update: (mode: boolean) => set({ toggleViewMode: mode }),
}));
