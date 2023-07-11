import { useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { Home } from './Home'
import { MapsAll } from './MapsAll'

export const ListHome = () => {
  const [isHome, setIsHome] = useState(true)
  const { color } = useSetting()

  return (
    <div>
      <div className='bg-white'>
        <div className={`${color || 'bg-sky-500'} p-5 text-3xl font-bold text-slate-200`}>
          Explore
        </div>

        <div className='overflow-y-scroll max-h-screen'>
          {
          isHome
            ? <Home setIsHome={setIsHome} />
            : <MapsAll setIsHome={setIsHome} />
         }
        </div>
      </div>
    </div>
  )
}
