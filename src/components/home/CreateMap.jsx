import React, { useEffect, useState } from 'react'
import { GeneralSettings } from '../editar/settings/GeneralSettings'
import { LayerSettings } from '../editar/settings/LayerSettings'
import { useSetting } from '../../store/storeSettings'
import { newMap } from '../../db/config'
import { useLocation } from 'wouter'
import logo from '../../assets/logo.png'
export const CreateMap = () => {
  const [count, setCount] = useState(0)
  const [, setLocation] = useLocation()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const { color, title, layer, setLayer } = useSetting()

  useEffect(() => {
    console.log('etasda asdas'.split(' ').join('_'))
    setLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
  }, [setLayer])

  const handleClick = async () => {
    if (title === '') {
      setError(true)
      return false
    }
    setError(false)
    console.log(color, title, layer)
    if (count === 2) {
      setLoading(true)
      await newMap(title.split(' ').join('_').toLowerCase(), {
        color, title, layer
      })
      setLocation('/' + title.split(' ').join('_').toLowerCase() + '/dev')
      setLoading(false)
    }
    setCount(count + 1)
  }

  return (
    <>
      <div id='defaultModal' tabIndex='-1' aria-hidden='true' className='py-20 px-4 fixed flex justify-center items-start right-0 top-0 z-[1050] h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden md:inset-0 '>
        <div className='relative w-full max-w-lg max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            <div className='flex items-center justify-center p-5'>
              {/* <h3 className='text-xl font-medium text-gray-900'> My Map </h3> */}
              <img src={logo} alt='' />

            </div>
            <div className='px-5 pb-5 '>
              <hr />
              {count === 0 && <GeneralSettings />}
              {count === 1 && <LayerSettings />}

              {error && title === '' && <p className='bg-red-500 text-white text-center my-3 p-2'>Debe completar nombre de mapa</p>}
              <button onClick={handleClick} className={`flex gap-3 items-center justify-center ${color || 'bg-sky-700'} hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full`}>
                <div className='flex'>
                  {count === 2 ? 'Create Map' : 'Continue'}
                  {
                  loading &&
                    <svg aria-hidden='true' className='h-5 w-5 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                      <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                    </svg>
                }
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
