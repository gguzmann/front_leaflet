import { useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { useAuth } from '../../store/auth'
import { logout } from '../../db/config'
import { actionType } from '../../utils'
import { useLocation } from 'wouter'

export const UserContainer = () => {
  const { user, setLogin } = useAuth()
  const { color, setSetting, openSetting } = useSetting()
  const [openDropdown, setOpenDropdown] = useState(false)
  const [, setLocation] = useLocation()

  const handleOpenLogin = () => openSetting()
  const handleOpenDropdown = () => setOpenDropdown(!openDropdown)

  const handleLogout = async () => {
    try {
      await logout()
      setLogin(false, { email: '' })
      console.log('user logout')
      setSetting(actionType.locations)
    } catch (error) {
      console.log('error logout')
    }
  }

  return (
    <div>
      <button onClick={() => setLocation('/')} className={`absolute ${user ? 'right-20' : 'right-28'} top-2 z-[1050]  ${color} h-[35px] rounded text-white font-bold px-4 hover:bg-opacity-70`}>
        <svg className='w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9' />
        </svg>
      </button>
      {
        !user
          ? <button onClick={handleOpenLogin} className={`absolute right-2 top-2 z-[1050] h-[35px] p-2 ${color} rounded text-white font-bold px-8 hover:bg-opacity-70`}>
            Login
            </button>
          : <>
            <button onClick={handleOpenDropdown} className={`absolute right-2 top-2 h-[35px] z-[1050] py-2 ${color} rounded text-white font-bold px-4 hover:bg-opacity-70`}>
              <div className='flex'>
                <svg className='w-4 h-4 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 14 18'>
                  <path d='M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
                </svg>
                <svg className='-mr-1 h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clipRule='evenodd' />
                </svg>
              </div>
            </button>
            <div className={`${openDropdown ? 'absolute' : 'hidden'} right-2 top-12 z-[1250] bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
              <ul className='text-sm text-gray-700 ' aria-labelledby='dropdownDefaultButton'>
                <li>
                  <button className=' px-4 py-2 rounded-lg hover:bg-gray-100 w-full '>My Maps</button>
                </li>
                <li>
                  <button className=' px-4 py-2 hover:bg-gray-100 w-full '>New Map</button>
                </li>
                {/* <li>
                  <button className=' px-4 py-2 hover:bg-gray-100 w-full '>Earnings</button>
                </li> */}
                <li>
                  <button onClick={handleLogout} className=' px-4 py-2 rounded-lg hover:bg-gray-100 w-full '>Sign out</button>
                </li>
              </ul>
            </div>
            </>
      }
    </div>
  )
}
