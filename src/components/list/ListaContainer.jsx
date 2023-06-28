import React from 'react'
import { useSetting } from '../../store/storeSettings'
import { CardContainer } from './CardContainer'
import { SettingLink } from '../editar/actions/share/SettingLink'
import { SettingConfig } from '../editar/actions/setting/SettingConfig'
import { SettingLayer } from '../editar/actions/layers/SettingLayer'
import { SettingCenterPosition } from '../editar/actions/centerPosition/SettingCenterPosition'

export const ListaContainer = () => {
  const { color, title, setting } = useSetting()
  return (
    <div>
      <div className='bg-white shadow-md'>
        <div className={`${color || 'bg-sky-500'} p-5 text-3xl font-bold text-slate-200`}>
          {title}

        </div>
        <div className='overflow-y-scroll max-h-screen'>

          {setting === 'locations' && <CardContainer />}
          {setting === 'config' && <SettingConfig />}
          {setting === 'layer' && <SettingLayer />}
          {setting === 'centerPosition' && <SettingCenterPosition />}
          {setting === 'link' && <div className='p-2 min-h-screen'><SettingLink /></div>}

        </div>
      </div>
    </div>
  )
}
