import { useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { GeneralSettings } from './settings/GeneralSettings'
import { saveSettings } from '../../db/config'

export const Settings = () => {
  const [loading, setLoading] = useState(false)
  const { modalSetting, closeSetting, color, title, name } = useSetting()

  const handleSaveSetting = async () => {
    console.log(title, color)
    setLoading(true)
    await saveSettings({
      title,
      color
    }, name)
    setLoading(false)
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
            <GeneralSettings />

            <button onClick={handleSaveSetting} className={`flex gap-3 items-center justify-center ${color || 'bg-sky-700'} hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full`}>
              <div>
                Save Settings
              </div>
              <div>
                {
                  loading &&
                    <svg aria-hidden='true' className='h-5 w-5 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                      <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                    </svg>
                }
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}
