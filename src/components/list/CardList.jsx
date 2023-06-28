import React from 'react'
import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'
import { useSetting } from '../../store/storeSettings'

export const CardList = ({ loc }) => {
  const { mapa } = useStore()
  const { setCurrentLoc, currentLoc } = useStoreEdited()
  const { color } = useSetting()

  const handleClick = () => {
    mapa.target.flyTo(loc.position, mapa.target.getZoom())
    setCurrentLoc(loc)
  }

  return (
    <div onClick={handleClick} className={`hover:border-l-4  hover:shadow ${currentLoc.id === loc.id ? `${color} bg-opacity-10 hover:${color} hover:bg-opacity-10` : 'hover:bg-black hover:bg-opacity-10'}`}>
      <div className='flex'>
        <div className='px-5 pt-5 basis-3/4'>
          <p className='text-lg font-bold'>{loc.title}</p>
          <p className='text-xs '>{loc.description}</p>
        </div>
        <div className='p-2 basis-2/4 flex items-center'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKeMxWylWa9X7J859YdKx5r6XE1q45o7-jmnZ9p5xhNMRwrk6qICM0FZO8u7JOnR-F3M&usqp=CAU' alt='' className='hidden lg:flex' />
        </div>

      </div>

      <hr />
    </div>
  )
}
