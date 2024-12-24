import { create } from "zustand";
interface StateStore {
    isOpen: boolean;
    toggleSidebar: () => void;
  }


export const useStateStore = create<StateStore>((set) => ({
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));