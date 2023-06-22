import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapWithMarkers = () => {
  const markers = [
    { id: 1, position: [51.505, -0.09], content: 'Marker 1' },
    { id: 2, position: [51.51, -0.1], content: 'Marker 2' }
    // Agrega más marcadores si es necesario
  ]

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

      {markers.map(marker => (
        <Marker key={marker.id} position={marker.position}>
          <Popup autoClose={false} permanent>
            <div>{marker.content}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapWithMarkers
