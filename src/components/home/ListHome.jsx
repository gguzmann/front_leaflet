import React from 'react'
import { useSetting } from '../../store/storeSettings'
import { actionType } from '../../utils'
import { EditLocation } from '../editar/actions/newLocation/EditLocation'
export const ListHome = () => {
  const { color, setting } = useSetting()
  return (
    <div>
      <div className='bg-white shadow-md'>
        <div className={`${color || 'bg-sky-500'} p-5 text-3xl font-bold text-slate-200`}>
          Explore
        </div>

        <div className='overflow-y-scroll max-h-screen'>

          {setting === actionType.editLocation && <EditLocation />}

        </div>
      </div>
    </div>
  )
}
