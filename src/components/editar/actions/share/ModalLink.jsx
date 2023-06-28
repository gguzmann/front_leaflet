import { useState } from 'react'
import { HeaderModal } from '../../../modal/HeaderModal'

export const ModalLink = ({ open, handleClosed }) => {
  const [copy, setCopy] = useState(false)
  const handleCopy = () => {
    const link = window.location.href
    navigator.clipboard.writeText(link.slice(0, link.length - 4))
    setCopy(true)
  }

  const handleClose = () => {
    handleClosed()
    setCopy(false)
  }
  return (
    <div id='defaultModal' tabIndex='-1' aria-hidden='true' className={`fixed flex justify-center items-start right-0 top-0 z-[1050] h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-24 md:inset-0 ${!open && 'hidden'}`}>
      <div className='relative w-full max-w-md max-h-full bg-white rounded-lg shadow'>

        <HeaderModal title='Shared Link' closeModal={handleClose} />

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
      </div>
    </div>

  )
}
