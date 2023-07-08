import { MapContainer, TileLayer } from 'react-leaflet'
import { layersTile } from '../../../../utils'
import { useSetting } from '../../../../store/storeSettings'

export const SettingLayer = () => {
  const { layer, setLayer } = useSetting()

  return (
    <div className='my-3'>
      <label htmlFor='default-input' className=' w-full block mb-2 text-sm font-medium text-gray-900'>Select Layer:</label>

      <div className='flex flex-wrap gap-5 justify-center pb-5 w-full h-[400px] overflow-y-scroll p-3'>
        {
            layersTile.map((x, i) => (
              <div key={i} className={`  cursor-pointer hover:outline hover:outline-yellow-500 hover:outline-2 p-1 ${layer === x.url && 'outline outline-yellow-500'}`} onClick={() => setLayer(x.url)}>
                <MapContainer style={{ height: '75px', width: '75px' }} center={[-45.5712, -72.0685]} zoom={10} scrollWheelZoom={false} zoomControl={false} dragging={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={x.url}
                    onClick={() => console.log('map')}
                  />
                </MapContainer>

              </div>
            ))
            }

      </div>

    </div>
  )
}
