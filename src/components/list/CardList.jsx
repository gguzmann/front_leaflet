import React from 'react'
import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'

export const CardList = ({ loc }) => {
  const { mapa, dev, locations, setLocations } = useStore()
  const { ModalOpen, setCurrentLoc, currentLoc } = useStoreEdited()

  const handleClick = () => {
    mapa.target.flyTo(loc.position, mapa.target.getZoom())
    setCurrentLoc(loc)
  }

  const handleEdit = () => {
    setCurrentLoc(loc)
    ModalOpen(loc)
  }

  const handleDelete = () => {
    const newLocation = locations.filter(location => location.id !== loc.id)
    setLocations(newLocation)
  }

  return (
    <div onClick={handleClick} className={`hover:border-l-4 hover:bg-black hover:bg-opacity-10 hover:shadow ${currentLoc.id === loc.id && 'bg-sky-500 bg-opacity-10 hover:bg-sky-500 hover:bg-opacity-10'}`}>
      <div className='flex'>
        <div className='px-5 pt-5 pb-2 basis-3/4'>
          <p className='text-lg font-bold'>{loc.title} {loc.id}</p>
          <p className=''>{loc.description}</p>
          {
          currentLoc.id === loc.id && dev &&
            <div className='flex just mt-2'>
              <button onClick={handleEdit} className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-blue-400'>edit</button>
              <button onClick={handleDelete} className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border hover:border-red-400'>delete</button>
            </div>
          }
        </div>
        <div className='p-5 basis-1/4 flex items-center justify-center'>
          <img src={loc.icons} alt='' className='hidden lg:flex' />
        </div>

      </div>

      <hr />
    </div>
  )
}
