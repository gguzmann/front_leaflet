import { collection, getDocs } from 'firebase/firestore'
import { db } from './db/config'
import { configSVG, layerSVG, locationSVG } from './svg'

export const cargaFS = async (path) => {
  const collectionTest = collection(db, path)
  const arr = []
  const queryTest = await getDocs(collectionTest)
  queryTest.forEach(element => {
    const data = element.data()
    arr.push(data)
  })
  if (arr.length > 0) { return arr }

  return new Error()
}
export const actionType = {
  NONE: 'none',
  LOCATION: 'location',
  CONFIG: 'config',
  LAYER: 'layer'
}

export const buttonsEvents = [
  {
    id: 0,
    name: 'New Location',
    action: actionType.LOCATION,
    img: locationSVG
  },
  {
    id: 1,
    name: 'Configuration',
    action: actionType.CONFIG,
    img: configSVG
  },
  {
    id: 2,
    name: 'Layer',
    action: actionType.LAYER,
    img: layerSVG
  }
]
