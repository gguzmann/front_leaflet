import { useState } from 'react'
import { buttonsEvents } from '../../utils'
import { useStoreEdited } from '../../store/storeEdit'
import { configSVG } from '../../svg'
import { useSetting } from '../../store/storeSettings'

export const ButtonsFloat = () => {
  const [open, setOpen] = useState(false)
  const { setAction, action, setCurrentLoc } = useStoreEdited()
  const { openSetting, color } = useSetting()

  const hanleHover = () => {
    setOpen(!open)
    console.log(action)
  }

  const handleClick = (act) => {
    console.log('change:', act)
    setAction(act)
  }

  const handleSave = async () => {
    console.log(color)
    openSetting()
    setCurrentLoc({})
  }

  return (
    <>

      <div data-dial-init className='fixed right-6 bottom-6 group' style={{ zIndex: 999 }}>
        <div id='speed-dial-menu-square' className={`flex flex-col items-center mb-4 space-y-2 ${!open ? 'hidden' : 'flex'}`}>
          {
            buttonsEvents.map(button =>
              <div key={button.id}>
                <button onClick={() => handleClick(button.action)} type='button' data-tooltip-target='tooltip-share' data-tooltip-placement='left' className={`flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200hover:bg-gray-50 ${action === button.action && 'ring-4 ring-gray-400 outline-none '}  `}>
                  {
                    button.img
                  }
                  <span className='sr-only'>Share</span>
                </button>
                <div id='tooltip-share' role='tooltip' className='absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip'>
                  {button.name}
                  <div className='tooltip-arrow' data-popper-arrow />
                </div>
              </div>
            )
            }
          <div>
            <button onClick={handleSave} type='button' data-tooltip-target='tooltip-share' data-tooltip-placement='left' className='flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border border-gray-200hover:bg-gray-50'>
              {configSVG}
              <span className='sr-only'>Save</span>
            </button>
            <div id='tooltip-share' role='tooltip' className='absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip'>
              Save
              <div className='tooltip-arrow' data-popper-arrow />
            </div>
          </div>

        </div>
        <button onClick={hanleHover} type='button' data-dial-toggle='speed-dial-menu-square' aria-controls='speed-dial-menu-square' aria-expanded='false' className={`flex items-center justify-center text-white ${color || 'bg-blue-700'} rounded-lg w-14 h-14 hover:bg-opacity-80`}>
          <svg aria-hidden='true' className='w-8 h-8 transition-transform ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' /></svg>

          <span className='sr-only'>Open actions menu</span>
        </button>
      </div>

    </>
  )
}
