import { create } from 'zustand'

export const useStore = create((set) => ({
  mapa: null,
  setMapa: (value) => set((state) => ({ mapa: value })),
  locations: [],
  setLocations: (value) => set(state => ({ locations: value }))
}))
