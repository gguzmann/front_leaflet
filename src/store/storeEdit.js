import { create } from 'zustand'
import { actionType } from '../utils'

export const useStoreEdited = create((set) => ({
  currentPos: [],
  setCurrentPos: (value) => set(state => ({ currentPos: value })),
  currentLoc: {},
  setCurrentLoc: (value) => set(state => ({ currentLoc: value })),
  action: actionType.NONE,
  setAction: (value) => set(state => ({ ...state, action: value })),
  modal: false,
  setModalOpen: (value) => set(state => ({ modal: value })),
  ModalOpen: () => set(state => ({ modal: true })),
  ModalClose: () => set(state => ({ modal: false }))
}))
