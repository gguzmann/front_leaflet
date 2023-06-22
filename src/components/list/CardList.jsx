import React from 'react'
import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'

export const CardList = ({ loc }) => {
  const { mapa } = useStore()
  const { setCurrentLoc, currentLoc } = useStoreEdited()

  const handleClick = () => {
    mapa.target.flyTo(loc.position, mapa.target.getZoom())
    setCurrentLoc(loc)
  }

  return (
    <div onClick={handleClick} className={`hover:border-l-4 hover:bg-black hover:bg-opacity-10 hover:shadow ${currentLoc.id === loc.id && 'bg-sky-500 bg-opacity-10 hover:bg-sky-500 hover:bg-opacity-10'}`}>
      <div className='flex'>
        <div className='px-5 pt-5 pb-2 basis-3/4'>
          <p className='text-lg font-bold'>{loc.title} {loc.id}</p>
          <p className=''>{loc.description}</p>
        </div>
        <div className='p-5 basis-1/4 flex items-center justify-center'>
          <img src={loc.icons} alt='' className='hidden lg:flex' />
        </div>

      </div>

      <hr />
    </div>
  )
}
