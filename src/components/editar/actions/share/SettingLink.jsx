import { useState } from 'react'

export const SettingLink = () => {
  const [copy, setCopy] = useState(false)
  const handleCopy = () => {
    const link = window.location.href
    navigator.clipboard.writeText(link.slice(0, link.length - 4))
    setCopy(true)
  }

  return (

    <div className='p-5'>

      <button onClick={handleCopy} className='flex gap-3 items-center justify-center border-2 border-black bg-white hover:border-slate-500 hover:text-slate-500 font-bold py-2 px-4 rounded w-full'>
        <div className='flex gap-5 items-center'>
          {window.location.href.slice(0, window.location.href.length - 4)}
          <div className='border-2 p-2 rounded'>
            {copy ? 'copied' : <i className='far fa-clone' />}
          </div>
        </div>
      </button>

    </div>
  )
}
