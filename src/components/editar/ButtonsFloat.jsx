import { ButtonLink } from './actions/share/ButtonLink'
import { ButtonLocation } from './actions/locations/ButtonLocation'
import { ButtonSetting } from './actions/setting/ButtonSetting'
import { ButtonCenterPosition } from './actions/centerPosition/ButtonCenterPosition'
import { actionType } from '../../utils'

export const ButtonsFloat = () => {
  return (
    <>

      <div className='fixed  z-[1050] ps-3 top-20'>

        <div id='speed-dial-menu-square' className='flex flex-col items-center my-2 space-y-2'>
          <ButtonLocation action={actionType.locations} />
          <ButtonLink action={actionType.link} />
          <ButtonSetting action={actionType.config} />
          {/* <ButtonLayer action={actionType.layer} /> */}
          <ButtonCenterPosition action={actionType.centerPosition} />
        </div>
      </div>

    </>
  )
}
