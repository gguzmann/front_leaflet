import React from 'react'
import { useSetting } from '../../store/storeSettings'
import { colors } from '../../utils'
import { saveSettings } from '../../db/config'

export const Settings = () => {
  const { modalSetting, closeSetting, setColor, color, setTitle, title } = useSetting()

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleSaveSetting = async () => {
    console.log(title, color)
    await saveSettings({
      title,
      color
    })
    closeSetting()
  }

  return (
    <div id='defaultModal' tabIndex='-1' aria-hidden='true' className={`fixed flex justify-center items-start right-0 top-0 z-[1050] h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-24 md:inset-0 ${!modalSetting && 'hidden'}`}>
      <div className='relative w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow'>

          <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200'>
            <li className='mr-2'>
              <a href='#' aria-current='page' className='inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active'>Profile</a>
            </li>
            <li className='mr-2'>
              <a href='#' className='inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50'>Dashboard</a>
            </li>
            <li className='mr-2'>
              <a href='#' className='inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50'>Settings</a>
            </li>

            <button onClick={closeSetting} type='button' className='px-5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900' data-modal-hide='defaultModal'>
              <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
              <span className='sr-only'>Close modal</span>
            </button>

          </ul>

          <div className='p-5'>
            <h3 className='text-xl font-medium text-gray-900 mb-6'>
              General Settings
            </h3>

            <div className='mb-6 flex items-center'>
              <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Title map:</label>
              <input onChange={handleChangeTitle} placeholder={title} type='text' id='default-input' className='w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' />
            </div>

            <div className='mb-6 flex items-center'>
              <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Color:</label>
              <div className='w-3/4 flex gap-3'>
                {
                  colors.map((cl, index) => <div key={index} onClick={() => setColor(cl.color)} className={`w-6 ${cl.color} cursor-pointer hover:outline hover:outline-yellow-500 rounded ${color === cl.color && 'outline outline-yellow-500'}`}>&nbsp;</div>)
                }
              </div>
            </div>

            <button onClick={handleSaveSetting} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
              Save Settings
            </button>
          </div>

        </div>
      </div>
    </div>

  )
}
