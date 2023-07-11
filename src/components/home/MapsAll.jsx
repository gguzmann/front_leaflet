import React, { useEffect, useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { actionType } from '../../utils'
import { EditLocation } from '../editar/actions/newLocation/EditLocation'
import { useAuth } from '../../store/auth'
import { getAllMaps } from '../../db/config'
import { useLocation } from 'wouter'

export const MapsAll = ({ setIsHome }) => {
  const [, setLocation] = useLocation()

  const { setting } = useSetting()
  const { user } = useAuth()

  const [maps, setMaps] = useState([])

  useEffect(() => {
    getAllMaps().then(maps => setMaps(maps))
  }, [])

  const handleGotoMap = (nameMap) => {
    setLocation('/' + nameMap)
  }

  return (
    <>

      <div onClick={() => setIsHome(true)} className='p-2 text-slate-500 hover:text-black cursor-pointer  hover:shadow '>
        <div className='flex justify-center gap-2 items-center'>
          <i className='fa fa-arrow-left' />
          <p className='font-bold '>Back to home</p>
        </div>
      </div>

      {
            maps.length > 0 &&
            maps.map(x =>
              <div key={x.id} onClick={() => handleGotoMap(x.id)} className='min-h-[100px] shadow flex items-center justify-center cursor-pointer hover:border-l-4 hover:border-slate-500 hover:shadow  bg-opacity-10 hover: hover:bg-opacity-10'>
                {x.title}
              </div>
            )
          }
      {setting === actionType.editLocation && <EditLocation />}

    </>
  )
}
