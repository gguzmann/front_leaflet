import React from 'react'
import { useStore } from '../../store/store'
import { CardList } from './CardList'
import { useSetting } from '../../store/storeSettings'

export const ListaContainer = () => {
  const locations = useStore(state => state.locations)
  const { color, title } = useSetting()
  return (
    <div>
      <div className='bg-white shadow-md'>
        <div className={`${color || 'bg-sky-500'} p-5 text-3xl font-bold text-slate-200`}>
          {title}
        </div>
        <div className='overflow-y-scroll max-h-screen'>
          {
            locations.length > 0 &&
            locations?.map((card, i) => <CardList key={i} loc={card} />)
          }
        </div>
      </div>
    </div>
  )
}
