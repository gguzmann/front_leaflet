import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import { useStore } from '../../store/store'
import L from 'leaflet'

export const Mapa = () => {
  const [localtions, setLocaltions] = useState(useStore(state => state.locations))
  const { setMapa } = useStore()
  return (
    <div>
      <MapContainer className='map' center={[-33.461806983280546, -70.66894818450416]} zoom={12} whenReady={instance => setMapa(instance)}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {
          localtions &&
          localtions.map((loc, i) => <CustomMarker key={i} marker={loc} />)
        }
        <ClickTest />
      </MapContainer>
    </div>

  )
}

const CustomMarker = ({ marker }) => {
  const customIcon = new L.Icon({
    iconUrl: marker.icons,
    iconSize: [35, 35]
  })

  return (
    <Marker position={marker.position} icon={customIcon}>
      <Popup>
        {marker.title} <br /> {marker.description}.
      </Popup>
    </Marker>
  )
}

const ClickTest = () => {
  useMapEvents({
    click (e) {
      console.log([e.latlng.lat, e.latlng.lng])
    }
  })
}
