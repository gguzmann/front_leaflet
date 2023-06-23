import React, { useState } from 'react'
import { GeneralSettings } from '../editar/settings/GeneralSettings'
import { LayerSettings } from '../editar/settings/LayerSettings'
import { useSetting } from '../../store/storeSettings'
import { newMap } from '../../db/config'
import { useLocation } from 'wouter'

export const CreateMap = () => {
  const [count, setCount] = useState(0)
  const [, setLocation] = useLocation()

  const { color, title, layer } = useSetting()

  const handleClick = async () => {
    console.log(color, title, layer)
    if (count === 2) {
      await newMap(title, {
        color, title, layer
      })
      setLocation('/' + title + '/dev')
    }
    setCount(count + 1)
  }

  return (
    <>
      <div id='defaultModal' tabIndex='-1' aria-hidden='true' className='p-28 fixed flex justify-center items-start right-0 top-0 z-[1050] h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden md:inset-0 '>
        <div className='relative w-full max-w-lg max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            <div className='flex items-center justify-between p-5 border-b rounded-t'>
              <h3 className='text-xl font-medium text-gray-900'> Create Map </h3>

            </div>
            <div className='p-5'>

              {count === 0 && <GeneralSettings />}
              {count === 1 && <LayerSettings />}
              <button onClick={handleClick} className={`flex gap-3 items-center justify-center ${color || 'bg-sky-700'} hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full`}>
                <div>
                  {count === 2 ? 'Create Map' : 'Continue'}
                </div>
                <div />
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
