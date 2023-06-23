import { create } from 'zustand'

export const useSetting = create((set) => ({
  name: '',
  setName: (value) => set(state => ({ name: value })),
  modalSetting: false,
  openSetting: () => set(state => ({ modalSetting: true })),
  closeSetting: () => set(state => ({ modalSetting: false })),
  title: '',
  setTitle: (value) => set(state => ({ title: value })),
  color: null,
  setColor: (value) => set(state => ({ color: value })),
  draggable: true,
  minZoom: 0,
  maxZoom: 13,
  setSettings: (value) => set(state => ({
    title: value.title,
    color: value.color
  }))
}))
