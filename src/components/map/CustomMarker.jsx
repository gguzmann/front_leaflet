import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'
import { useSetting } from '../../store/storeSettings'
import { actionType } from '../../utils'

export const CustomMarker = ({ marker }) => {
  const { mapa, locations, setLocations } = useStore()
  const { setCurrentLoc, currentLoc } = useStoreEdited()
  const { setSetting } = useSetting()

  const customIcon = new L.Icon({
    iconUrl: marker.icons,
    iconSize: [35, 35]
  })

  const handleClick = () => {
    mapa.target.flyTo(marker.position, mapa.target.getZoom())
    setCurrentLoc(marker)
    setSetting(actionType.locations)
  }

  const handleClose = () => {
    setCurrentLoc({})
    setSetting(actionType.locations)

    if (marker.title === '' && marker.description === '') {
      const newLocation = locations.filter(location => location.id !== marker.id)
      setLocations(newLocation)
    }
  }
  return (
    <Marker position={marker.position} icon={customIcon} eventHandlers={{ click: (e) => handleClick() }}>
      {
            currentLoc.id === marker.id &&
              <Tooltip permanent direction='top' opacity={1} interactive>
                <div className='p-2 w-52'>
                  <div className='absolute p-3 -top-2 -right-2'>
                    <button type='button' onClick={handleClose} className='ml-auto inline-flex items-center  rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900' data-modal-hide='defaultModal'>
                      <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
                    </button>
                  </div>

                  <div className='pb-2 basis-3/4 '>
                    <div className=''>
                      <p className='text-lg font-bold '>{marker.title}</p>
                      <p className=''>{marker.description}</p>
                    </div>

                    <div className='py-2'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKeMxWylWa9X7J859YdKx5r6XE1q45o7-jmnZ9p5xhNMRwrk6qICM0FZO8u7JOnR-F3M&usqp=CAU' alt='' className='lg:flex' />
                    </div>

                  </div>
                </div>
              </Tooltip>
    }
    </Marker>
  )
}
