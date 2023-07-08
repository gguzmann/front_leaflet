import { useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { useAuth } from '../../store/auth'
import { logout } from '../../db/config'
import { UserModalContainer } from './UserModalContainer'

export const UserContainer = () => {
  const { user, setLogin } = useAuth()

  const { color } = useSetting()
  const [openLogin, setOpenLogin] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenLogin = () => setOpenLogin(true)
  const handleOpenDropdown = () => setOpenDropdown(!openDropdown)

  const handleLogout = async () => {
    try {
      await logout()
      setLogin(false, { email: '' })
      console.log('user logout')
    } catch (error) {
      console.log('error logout')
    }
  }

  return (
    <div>
      {
        !user
          ? <button onClick={handleOpenLogin} className={`absolute right-2 top-2 z-[1050] p-2 ${color} rounded text-white font-bold px-8 hover:bg-opacity-70`}>
            Login
          </button>
          : <>
            <button onClick={handleOpenDropdown} className={`absolute right-2 top-2 z-[1050] p-2 ${color} rounded text-white font-bold px-4 hover:bg-green-800`}>
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
      <UserModalContainer open={openLogin} setOpen={setOpenLogin} />
    </div>
  )
}
