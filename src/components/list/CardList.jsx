import React from 'react'
import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'
import { useSetting } from '../../store/storeSettings'
import { actionType } from '../../utils'
import { deleteLocation } from '../../db/config'

export const CardList = ({ loc }) => {
  const { mapa, dev, locations, setLocations } = useStore()
  const { setCurrentLoc, currentLoc } = useStoreEdited()
  const { color, setSetting, name } = useSetting()

  const handleClick = () => {
    mapa.target.flyTo(loc.position, mapa.target.getZoom())
    setCurrentLoc(loc)
  }

  const handleEdit = () => {
    setSetting(actionType.editLocation)
    setCurrentLoc(loc)
  }

  const handleDelete = () => {
    const newLocation = locations.filter(location => location.id !== loc.id)
    setLocations(newLocation)
    deleteLocation(loc.id, name)
  }

  return (
    <div onClick={handleClick} className={`hover:border-l-4 hover:border-slate-500 hover:shadow ${currentLoc.id === loc.id ? `${color} bg-opacity-10 hover:${color} hover:bg-opacity-10` : 'hover:bg-black hover:bg-opacity-10'}`}>
      <div className='flex'>
        <div className='px-5 pt-5 basis-3/4'>
          <p className='text-lg font-bold'>{loc.title}</p>
          <p className='text-xs '>{loc.description}</p>
          {
        currentLoc.id === loc.id && dev &&
          <div className='flex just mb-2'>
            <button onClick={handleEdit} className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-blue-400'>edit</button>
            <button onClick={handleDelete} className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-red-400'>delete</button>
          </div>
      }
        </div>
        <div className='p-2 basis-2/4 flex items-center'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKeMxWylWa9X7J859YdKx5r6XE1q45o7-jmnZ9p5xhNMRwrk6qICM0FZO8u7JOnR-F3M&usqp=CAU' alt='' className='hidden lg:flex' />
        </div>
      </div>

      <hr />
    </div>
  )
}
