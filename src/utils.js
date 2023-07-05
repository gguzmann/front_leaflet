import { collection, getDocs } from 'firebase/firestore'
import { db } from './db/config'
import { locationSVG } from './svg'

export const actionType = {
  none: 'none',
  locations: 'locations',
  config: 'config',
  layer: 'layer',
  centerPosition: 'centerPosition',
  newLocation: 'newLocation',
  editLocation: 'editLocation',
  link: 'link'
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
