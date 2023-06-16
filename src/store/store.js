import { create } from 'zustand'

export const useStore = create((set) => ({
  dev: false,
  setDev: (value) => set(state => ({ dev: value })),
  mapa: null,
  setMapa: (value) => set((state) => ({ mapa: value })),
  locations: [],
  setLocations: (value) => set(state => ({ locations: value }))
}))
