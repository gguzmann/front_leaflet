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
    console.log(data)
    console.log(element.id)
    if (element.id === 'config') {
      config = element.data()
    } else {
      arr.push({ ...data, id: element.id })
    }
  })
  console.log(arr)
  return [arr, config]
  // if (arr.length > 0) { return [arr, config] }
  // return false
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
    title: 'blue',
    color: 'bg-sky-700'
  }, {
    title: 'red',
    color: 'bg-red-700'
  }, {
    title: 'green',
    color: 'bg-green-700'
  }, {
    title: 'black',
    color: 'bg-black'
  }
]

export const layersTile = [
  {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }, {
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
  }, {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
  }, {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
  }, {
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  }, {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  }, {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png'
  }, {
    url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png'
  }, {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  }
]
