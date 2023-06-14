import React from 'react'
import { useStore } from '../../store/store'
import { CardList } from './CardList'

export const ListaContainer = () => {
  const locations = useStore(state => state.locations)
  return (
    <div>
      <div className='bg-white shadow-md'>
        <div className='bg-sky-500 p-5 text-3xl font-bold text-slate-200'>
          Titulo del Mapa
        </div>
        <div className='overflow-y-scroll max-h-screen'>
          {
            locations?.map((card, i) => <CardList key={i} loc={card} />)
          }
        </div>
      </div>
    </div>
  )
}
