import { collection, getDocs } from 'firebase/firestore'
import { db } from './db/config'
import { locationSVG } from './svg'

export const cargaFS = async (path) => {
  const collectionTest = collection(db, path)
  const arr = []
  let config = {}
  const queryTest = await getDocs(collectionTest)
  queryTest.forEach(element => {
    const data = element.data()
    console.log(element.id)
    if (element.id === 'config') {
      config = element.data()
    } else {
      arr.push({ ...data, id: element.id })
    }
  })
  // console.log(arr)
  if (arr.length > 0) { return [arr, config] }
  console.log('asd')
  return false
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
  }
]

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36)
}

export const colors = [
  {
    title: 'red',
    color: 'bg-red-700'
  }, {
    title: 'blue',
    color: 'bg-blue-700'
  }, {
    title: 'green',
    color: 'bg-green-700'
  }, {
    title: 'black',
    color: 'bg-black'
  }
]
