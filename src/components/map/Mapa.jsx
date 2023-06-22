import { MapContainer, TileLayer } from 'react-leaflet'
import { useStore } from '../../store/store'
import { EventsActions } from '../editar/EventsActions'
import { CustomMarker } from './CustomMarker'

export const Mapa = () => {
  const localtions = useStore(state => state.locations)
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
        <EventsActions />
      </MapContainer>
    </div>

  )
}
