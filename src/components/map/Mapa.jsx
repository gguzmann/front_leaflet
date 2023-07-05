import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import { useStore } from '../../store/store'
import { EventsActions } from '../editar/EventsActions'
import { CustomMarker } from './CustomMarker'
import { useSetting } from '../../store/storeSettings'
import { UserContainer } from '../user/UserContainer'

export const Mapa = () => {
  const locations = useStore(state => state.locations)
  const { setMapa, dev } = useStore()
  const { layer, setting, center, zoomControl, draggin } = useSetting()

  return (
    <div>
      <MapContainer className='map' center={[center[0], center[1]]} dragging={dev || draggin} scrollWheelZoom={dev || zoomControl} zoomControl={false} zoom={center[2]} whenReady={instance => setMapa(instance)}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={layer}
        />
        {zoomControl && <ZoomControl position='bottomright' />}

        <div className={`${setting === 'centerPosition' ? 'flex' : 'hidden'} `}>
          <div className='test2' />
          <div className='test' />
        </div>
        <UserContainer />
        {
          locations?.length > 0 &&
          locations.filter(x => x.title !== '').map((loc, i) => <CustomMarker key={i} marker={loc} />)
        }
        <EventsActions />
      </MapContainer>
    </div>

  )
}
