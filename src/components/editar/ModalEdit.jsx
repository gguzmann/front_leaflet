import { useState } from 'react'
import { useStoreEdited } from '../../store/storeEdit'
import { useStore } from '../../store/store'

const initForm = {
  name: '',
  description: ''
}

export const ModalEdit = () => {
  const { modal, current } = useStoreEdited(state => ({ modal: state.modal, current: state.currentLoc }))
  const { ModalClose } = useStoreEdited()
  const locations = useStore(state => state.locations)
  const { setLocations } = useStore()

  const [formObject, setFormObject] = useState(initForm)

  const handleChangeInput = (e) => {
    const obj = {
      ...formObject,
      [e.target.name]: e.target.value
    }
    setFormObject(obj)
    console.log(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocations(locations.map(x => {
      if (x.id === current.id) {
        return {
          ...current,
          title: formObject.name !== '' ? formObject.name : current.title,
          description: formObject.description
        }
      }
      return x
    }))
    setFormObject(initForm)
    ModalClose()
  }
  return (
    <>
      <div id='defaultModal' tabIndex='-1' aria-hidden='true' className={`fixed flex justify-center items-center right-0 top-0 z-[1050] h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 ${!modal && 'hidden'}`}>
        <div className='relative w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            <div className='flex items-center justify-between p-5 border-b rounded-t'>
              <h3 className='text-xl font-medium text-gray-900'>
                Location Editer {current.id}
              </h3>
              <button type='button' onClick={ModalClose} className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900' data-modal-hide='defaultModal'>
                <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>

              <div className='space-y-6 p-6'>

                <div className='mb-4'>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Name:</label>
                  <input type='text' name='name' onChange={handleChangeInput} value={formObject.name} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='' />
                </div>
                <div className='mb-4'>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>Decription:</label>
                  <input type='text' name='description' onChange={handleChangeInput} value={formObject.description} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='' />
                </div>

              </div>
              <div className='flex items-center space-x-2 rounded-b border-t border-gray-200 p-6'>
                <button data-modal-hide='defaultModal' type='submit' className='rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>I accept</button>
                <button data-modal-hide='defaultModal' onClick={ModalClose} type='button' className='rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300'>Decline</button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}
