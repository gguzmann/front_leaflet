import { useState } from 'react'
import { singup } from '../../db/config'
import { useSetting } from '../../store/storeSettings'

export const UserModalRegister = ({ setShowSignUp }) => {
  const [error, setError] = useState(false)
  const { closeSetting } = useSetting()

  const handleRegister = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const pw = e.target[1].value

    if (name === '' || pw === '') setError(true)

    try {
      await singup(name, pw)
      console.log('Register')
      setShowSignUp(false)
      e.target.reset()
      closeSetting()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        REGISTER
      </div>
      <form className='my-5' onSubmit={handleRegister}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline ${error && 'border-red-500'}`} min={0} max={8} id='username' type='email' required placeholder='Username' />
          {
            error &&
              <p className='text-red-500 text-xs italic'>Please choose a user.</p>
          }
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline ${error && 'border-red-500'}`} min={0} max={8} id='password' type='password' required placeholder='******************' />
          {
            error &&
              <p className='text-red-500 text-xs italic'>Please choose a password.</p>
          }
        </div>
        <div className='mb-3'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' type='submit'>
            Sign Up
          </button>
        </div>

        <div className='mt-3 flex justify-center'>
          <span onClick={() => setShowSignUp(false)} className='inline-block align-baseline text-sm text-slate-500 hover:text-slate-800'>
            You have an account? Sign in
          </span>
        </div>

      </form>
    </>

  )
}
