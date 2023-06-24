import { MapContainer, TileLayer } from 'react-leaflet'
import { useStore } from '../../store/store'
import { EventsActions } from '../editar/EventsActions'
import { CustomMarker } from './CustomMarker'
import { useSetting } from '../../store/storeSettings'

export const Mapa = () => {
  const locations = useStore(state => state.locations)
  const { setMapa } = useStore()
  const { layer } = useSetting()
  return (
    <div>
      <MapContainer className='map' center={[-33.461806983280546, -70.66894818450416]} zoomControl={false} zoom={12} whenReady={instance => setMapa(instance)}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={layer}
        />
        {
          locations.length > 0 &&
          locations.map((loc, i) => <CustomMarker key={i} marker={loc} />)
        }
        <EventsActions />
      </MapContainer>
    </div>

  )
}
