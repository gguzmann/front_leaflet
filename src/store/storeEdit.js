import { create } from 'zustand'
import { actionType } from '../utils'

export const useStoreEdited = create((set) => ({
  currentPos: [],
  setCurrentPos: (value) => set(state => ({ currentPos: value })),
  currentLoc: {},
  setCurrentLoc: (value) => set(state => ({ currentLoc: value })),
  action: actionType.NONE,
  setAction: (value) => set(state => ({ ...state, action: value })),
  centerPosition: [],
  setCenterPosition: (value) => set(state => ({ centerPosition: value }))

}))
