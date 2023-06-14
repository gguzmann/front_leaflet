import React from 'react'
import { useStore } from '../../store/store'

export const CardList = ({ loc }) => {
  const { mapa } = useStore()

  const handleClick = () => {
    mapa.target.flyTo(loc.position, mapa.target.getZoom())
  }
  return (
    <div onClick={handleClick} className='cursor-pointer hover:border-l-4 hover:shadow'>
      <div className='flex'>
        <div className='p-5 basis-3/4'>
          <p className='text-lg font-bold'>{loc.title}</p>
          <p className=''>{loc.description}</p>
        </div>
        <div className='p-5 basis-1/4 flex items-center justify-center'>
          <img src={loc.icons} alt='' />
        </div>
      </div>
      <hr />
    </div>
  )
}
