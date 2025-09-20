import { create } from "zustand";
import { mockLoggedInUser } from "../data/mockLoggedInUser";

type User = typeof mockLoggedInUser;

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
