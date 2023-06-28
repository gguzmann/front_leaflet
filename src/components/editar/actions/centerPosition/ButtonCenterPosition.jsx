import { centerMapSVG } from '../../../../svg'
import { useSetting } from '../../../../store/storeSettings'
import { useStoreEdited } from '../../../../store/storeEdit'

export const ButtonCenterPosition = ({ action }) => {
  const { setSetting } = useSetting()
  const { setCurrentLoc } = useStoreEdited()

  const handleClick = () => {
    setSetting(action)
    setCurrentLoc({})
  }

  return (
    <>
      <div>
        <button onClick={handleClick} type='button' data-tooltip-target='tooltip-share' data-tooltip-placement='left' className='p-2 flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200hover:bg-gray-50'>
          {centerMapSVG}
          <span className='sr-only'>Save</span>
        </button>
        <div id='tooltip-share' role='tooltip' className='absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip'>
          Layer
          <div className='tooltip-arrow' data-popper-arrow />
        </div>
      </div>
    </>
  )
}
