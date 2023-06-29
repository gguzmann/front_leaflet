import { useState } from 'react'
import { useSetting } from '../../../../store/storeSettings'

export const SettingLink = () => {
  const [copy, setCopy] = useState(false)
  const { color } = useSetting()

  const handleCopy = () => {
    const link = window.location.href
    navigator.clipboard.writeText(link.slice(0, link.length - 4))
    setCopy(true)
  }

  return (

    <div className='p-2 min-h-screen'>

      <h3 className='text-xl font-medium text-gray-900 mb-6'>
        Share Map
      </h3>

      <button onClick={handleCopy} className='flex flex-wrap gap-3 items-center justify-center border-2 border-black bg-white hover:border-slate-500 hover:text-slate-500 font-bold py-2 rounded w-full'>
        <div className='flex gap-5 items-center'>
          {window.location.href.slice(0, window.location.href.length - 4)}
        </div>
      </button>

      <div className='flex justify-center'>
        <button onClick={handleCopy} className={`my-2 ${color || 'bg-sky-700'} bg-opacity-80 text-white font-bold py-2 px-4 rounded w-1/2`}>
          {copy ? 'copied' : <i className='far fa-clone' />}
        </button>
      </div>

    </div>
  )
}
