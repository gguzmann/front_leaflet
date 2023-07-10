import React, { useEffect, useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { actionType, uidMap } from '../../utils'
import { EditLocation } from '../editar/actions/newLocation/EditLocation'
import { useAuth } from '../../store/auth'
import { getAllMaps, newMap2, saveListNewMap } from '../../db/config'
import { useLocation } from 'wouter'
export const ListHome = () => {
  const [, setLocation] = useLocation()

  const { setting, color, layer } = useSetting()
  const { email, user } = useAuth()

  const [maps, setMaps] = useState([])

  const handleNewMap = async () => {
    try {
      const id = uidMap()
      await newMap2(id, email)
      await saveListNewMap(id, email)
      setLocation('/' + id)
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    getAllMaps().then(maps => setMaps(maps))
  }, [])

  const handleGotoMap = (nameMap) => {
    setLocation('/' + nameMap)
  }

  return (
    <div>
      <div className='bg-white shadow-md'>
        <div className={`${color || 'bg-sky-500'} p-5 text-3xl font-bold text-slate-200`}>
          Explore
        </div>

        <div className='overflow-y-scroll max-h-screen'>
          {
            user &&
              <div onClick={handleNewMap} className='p-2 text-slate-500 hover:text-black cursor-pointer  hover:shadow '>
                <div className='flex justify-center gap-5 items-center'>
                  <p className='font-bold '>New Map</p>
                  <i className='far fa-plus-square text-3xl' />
                </div>
              </div>
          }

          {
            maps.length > 0 &&
            maps.map(x =>
              <div key={x.id} onClick={() => handleGotoMap(x.id)} className='min-h-[100px] shadow flex items-center justify-center cursor-pointer hover:border-l-4 hover:border-slate-500 hover:shadow  bg-opacity-10 hover: hover:bg-opacity-10'>
                {x.title}
              </div>
            )
          }
          {setting === actionType.editLocation && <EditLocation />}

        </div>
      </div>
    </div>
  )
}
