import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { layersTile } from '../../../utils'
import { useSetting } from '../../../store/storeSettings'

export const LayerSettings = () => {
  const { layer, setLayer } = useSetting()

  return (
    <div className=''>
      <h3 className='text-xl font-medium text-gray-900 mb-6'>
        Layer Settings
      </h3>
      <div className='flex flex-wrap gap-5 justify-center pb-5'>
        {
          layersTile.map((x, i) => (
            <div key={i} className={`w-1/4 border cursor-pointer hover:outline hover:outline-yellow-500 p-1 ${layer === x.url && 'outline outline-yellow-500'}`} onClick={() => setLayer(x.url)}>
              <MapContainer style={{ height: '100px', width: '100px' }} center={[-45.5712, -72.0685]} zoom={10} scrollWheelZoom={false} zoomControl={false} dragging={false}>
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
