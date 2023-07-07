import React from 'react'
import { useSetting } from '../../store/storeSettings'
import { CardContainer } from './CardContainer'
import { SettingLink } from '../editar/actions/share/SettingLink'
import { SettingConfig } from '../editar/actions/setting/SettingConfig'
import { SettingLayer } from '../editar/actions/layers/SettingLayer'
import { SettingCenterPosition } from '../editar/actions/centerPosition/SettingCenterPosition'
import { SettingNewLocation } from '../editar/actions/newLocation/SettingNewLocation'
import { actionType } from '../../utils'
import { EditLocation } from '../editar/actions/newLocation/EditLocation'

export const ListaContainer = () => {
  const { color, title, setting } = useSetting()
  return (
    <div>
      <div className='bg-white shadow-md'>
        <div className={`${color || 'bg-sky-500'} p-5 text-3xl font-bold text-slate-200`}>
          {title}
        </div>
        <div className='overflow-y-scroll max-h-screen'>

          {setting === actionType.locations && <CardContainer />}
          {setting === actionType.config && <SettingConfig />}
          {setting === actionType.layer && <SettingLayer />}
          {setting === actionType.centerPosition && <SettingCenterPosition />}
          {setting === actionType.newLocation && <SettingNewLocation />}
          {setting === actionType.editLocation && <EditLocation />}
          {setting === actionType.link && <SettingLink />}

        </div>
      </div>
    </div>
  )
}
