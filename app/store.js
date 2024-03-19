import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
