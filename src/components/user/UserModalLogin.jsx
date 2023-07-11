import { useState } from 'react'
import { useSetting } from '../../store/storeSettings'
import { singin } from '../../db/config'

export const UserModalLogin = ({ setShowSignUp }) => {
  const [error, setError] = useState(false)
  const { closeSetting } = useSetting()

  const handleLogin = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const pw = e.target[1].value

    if (name === '' || pw === '') setError(true)

    try {
      await singin(name, pw)
      console.log('Login')
      e.target.reset()
      closeSetting()
    } catch (error) {
      console.log('error', error)
      setError(true)
    }
  }
  return (
    <>
      <div className='flex justify-between items-center'>
        LOGIN

      </div>
      <form className='my-5' onSubmit={handleLogin}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Username
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' min={0} max={8} id='username' type='email' required placeholder='Username' />

        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline ' min={0} max={8} id='password' type='password' required placeholder='******************' />
        </div>

        <div className='mb-3'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' type='submit'>
            Sign In
          </button>
          {
            error &&
              <p className='text-red-500 text-xs italic my-2'>email or password incorrect.</p>
          }
        </div>
        <div className='mt-3 flex justify-center'>
          <span onClick={() => setShowSignUp(true)} className='inline-block align-baseline text-sm text-slate-500 hover:text-slate-800'>
            Don't have an account? Sign up
          </span>
        </div>
      </form>

    </>
  )
}
