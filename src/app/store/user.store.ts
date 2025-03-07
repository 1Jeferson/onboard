import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string | null;
  name: string | null;
}

interface UserStore extends User {
  setUser: (user: User) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      id: null,
      name: null,
      setUser: (user) => set((state) => ({ ...state, ...user })),
      resetUser: () => set({ id: null, name: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
