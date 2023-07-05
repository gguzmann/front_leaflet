import { useState } from 'react'
import { UserModalRegister } from './UserModalRegister'
import { UserModalLogin } from './UserModalLogin'
import { loginGoogle2 } from '../../db/config'
import { useAuth } from '../../store/auth'

export const UserModalContainer = ({ open, setOpen }) => {
  const [showSignUp, setShowSignUp] = useState(false)

  const { setLogin } = useAuth()

  const handleLoginGoogle = async () => {
    try {
      const { user } = await loginGoogle2()
      console.log(user.email)
      console.log('Login exitoso')
      setOpen(false)
      setLogin(true, user)
    } catch (error) {
      console.log('login Erro')
    }
  }
  return (
    <div className={`w-full z-[1100] absolute justify-center items-center min-h-screen ${open ? 'flex' : 'hidden'}`}>
      <div className='absolute z-[1050] w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='flex justify-end'>
          <button type='button' onClick={() => setOpen(false)} className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900' data-modal-hide='defaultModal'>
            <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
            <span className='sr-only'>Close modal</span>
          </button>
        </div>
        {
        showSignUp ? <UserModalRegister setShowSignUp={setShowSignUp} /> : <UserModalLogin setShowSignUp={setShowSignUp} />

      }
        <hr />
        <div className='mt-3 w-full'>
          <button onClick={handleLoginGoogle} className='w-full font-bold p-2 rounded shadow bg-red-500 text-white hover:bg-red-700'>
            Login with Google
          </button>
        </div>
      </div>

    </div>
  )
}
