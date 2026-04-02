import { create } from "zustand";

export const useAppStore = create((set) => ({
  count: 0,
  user: '',
  title: '',
  increment: () => set(state => ({ count: state.count + 1 })),
  login: () => set({ user: 'John' }),
  logout: () => set({ user: '' }),
  setTitle: (title) => set({ title }),
}));