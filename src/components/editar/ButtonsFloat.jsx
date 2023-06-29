import { useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { ButtonLink } from './actions/share/ButtonLink'
import { ButtonLocation } from './actions/locations/ButtonLocation'
import { ButtonSetting } from './actions/setting/ButtonSetting'
import { ButtonLayer } from './actions/layers/ButtonLayer'
import { ButtonCenterPosition } from './actions/centerPosition/ButtonCenterPosition'
import { actionType } from '../../utils'

export const ButtonsFloat = () => {
  const [open, setOpen] = useState(true)
  const { color } = useSetting()

  const hanleHover = () => {
    setOpen(!open)
  }

  return (
    <>

      <div data-dial-init className='fixed  z-[1050] ps-3 top-20'>
        <button onClick={hanleHover} type='button' data-dial-toggle='speed-dial-menu-square' aria-controls='speed-dial-menu-square' aria-expanded='false' className={`hidden flex items-center justify-center text-white ${color || 'bg-blue-700'} rounded-lg w-14 h-14 hover:bg-opacity-80`}>
          <svg aria-hidden='true' className='w-8 h-8 transition-transform ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' /></svg>

          <span className='sr-only'>Open actions menu</span>
        </button>
        <div id='speed-dial-menu-square' className={`flex flex-col items-center my-2 space-y-2 ${!open ? 'hidden' : 'flex'}`}>
          <ButtonLocation action={actionType.locations} />
          <ButtonLink action={actionType.link} />
          <ButtonSetting action={actionType.config} />
          <ButtonLayer action={actionType.layer} />
          <ButtonCenterPosition action={actionType.centerPosition} />
        </div>
      </div>

    </>
  )
}
