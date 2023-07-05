import { create } from 'zustand'

export const useAuth = create((set) => ({
  user: false,
  email: '',
  setLogin: (value, user) => set((state) => ({ user: value, email: user.email }))
}))
