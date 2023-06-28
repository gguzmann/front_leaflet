import { Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'
import { useState } from 'react'
import { addLocation, deleteLocation } from '../../db/config'
import { useSetting } from '../../store/storeSettings'

const initForm = {
  title: '',
  description: ''
}

export const CustomMarker = ({ marker }) => {
  const { mapa, dev, locations, setLocations } = useStore()
  const { setCurrentLoc, currentLoc } = useStoreEdited()
  const [edited, setEdited] = useState(marker.title === '')
  const { name, setSetting } = useSetting()

  const customIcon = new L.Icon({
    iconUrl: marker.icons,
    iconSize: [35, 35]
  })

  const [formObject, setFormObject] = useState(initForm)

  const handleChangeInput = (e) => {
    const obj = {
      ...formObject,
      [e.target.name]: e.target.value
    }
    setFormObject(obj)
    console.log(obj)
  }

  const handleClick = () => {
    mapa.target.flyTo(marker.position, mapa.target.getZoom())
    setCurrentLoc(marker)
    setSetting('locations')
  }

  const handleDelete = () => {
    const newLocation = locations.filter(location => location.id !== marker.id)
    setLocations(newLocation)
    deleteLocation(marker.id)
  }

  const handleClose = () => {
    setCurrentLoc({})
    setEdited(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      ...marker,
      title: formObject.title !== '' ? formObject.title : marker.title,
      description: formObject.description !== '' ? formObject.description : marker.description
    }
    setLocations(locations.map(x => {
      if (x.id === marker.id) {
        return obj
      }
      return x
    }))
    addLocation(obj, obj.id, name)
    setFormObject(initForm)
    setEdited(false)
  }

  const test = (event) => {
    if (event.target === event.currentTarget) {
      console.log('test')
      console.log(currentLoc)
      setCurrentLoc({})
    }
  }

  return (
    <Marker position={marker.position} icon={customIcon} eventHandlers={{ click: (e) => handleClick() }}>
      {
            currentLoc.id === marker.id &&
              <Tooltip permanent direction='top' opacity={1} interactive>
                <div className='p-2 w-52' onClick={test}>
                  <div className='absolute p-3 -top-2 -right-2'>
                    <button type='button' onClick={handleClose} className='ml-auto inline-flex items-center  rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900' data-modal-hide='defaultModal'>
                      <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
                    </button>
                  </div>

                  <div className='pb-2 basis-3/4 '>
                    {
                        !edited
                          ? <div className=''>
                            <p className='text-lg font-bold '>{marker.title}</p>
                            <p className=''>{marker.description}</p>
                            </div>
                          : <div>
                            <form onSubmit={handleSubmit}>
                              <input autoFocus onChange={handleChangeInput} type='text' className='text-lg' name='title' id='title' placeholder={marker.title !== '' ? marker.title : 'title'} />
                              <br />
                              <input onChange={handleChangeInput} type='text' className='text-lg' name='description' id='description' placeholder={marker.description !== '' ? marker.description : 'description'} />
                              <input type='submit' className='hidden' id='' />
                            </form>
                            </div>
                    }

                    <div className='py-2'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKeMxWylWa9X7J859YdKx5r6XE1q45o7-jmnZ9p5xhNMRwrk6qICM0FZO8u7JOnR-F3M&usqp=CAU' alt='' className='lg:flex' />
                    </div>
                    {
                        currentLoc.id === marker.id && dev && !edited &&
                          <div className='flex just mt-2'>
                            <button onClick={() => setEdited(true)} className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-blue-400'>edit</button>
                            <button onClick={handleDelete} className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-red-400'>delete</button>
                          </div>
                    }
                    {
                        edited &&
                          <div className='flex just mt-2'>
                            <button onClick={handleSubmit} className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-green-400'>save</button>
                            <button onClick={() => setEdited(false)} className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-red-400'>cancel</button>
                          </div>
                    }
                  </div>
                </div>
              </Tooltip>
    }
    </Marker>
  )
}
