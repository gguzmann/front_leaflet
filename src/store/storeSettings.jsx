import { create } from 'zustand'

export const useSetting = create((set) => ({
  setting: 'locations',
  setSetting: (value) => set(state => ({ setting: value })),
  name: '',
  setName: (value) => set(state => ({ name: value })),
  modalSetting: false,
  openSetting: () => set(state => ({ modalSetting: true })),
  closeSetting: () => set(state => ({ modalSetting: false })),
  title: '',
  setTitle: (value) => set(state => ({ title: value })),
  color: 'bg-sky-700',
  setColor: (value) => set(state => ({ color: value })),
  center: [-33.461806983280546, -70.66894818450416, 12],
  setCenter: (value) => set(state => ({ center: value })),
  draggin: true,
  setDraggin: (value) => set(state => ({ draggin: value })),
  zoomControl: true,
  setZoomControl: (value) => set(state => ({ zoomControl: value })),
  minZoom: 0,
  maxZoom: 13,
  layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  setLayer: (value) => set(state => ({ layer: value })),
  setSettings: (value) => set(state => ({
    title: value.title,
    color: value.color || 'bg-sky-700',
    layer: value.layer || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    center: value.center,
    draggin: value.draggin,
    zoomControl: value.zoomControl
  }))
}))
