import { useState } from 'react'
import { useStoreEdited } from '../../../../store/storeEdit'
import { useSetting } from '../../../../store/storeSettings'
import { addLocation } from '../../../../db/config'
import { useStore } from '../../../../store/store'
import { actionType } from '../../../../utils'
import { icons } from '../../../../icons'

const initForm = {
  title: '',
  description: '',
  icons: ''
}

export const EditLocation = () => {
  const { currentLoc } = useStoreEdited()
  const { locations, setLocations } = useStore()
  const { color, name, setSetting } = useSetting()

  const [loading, setLoading] = useState(false)
  const [formObject, setFormObject] = useState(initForm)
  const [buttonIcon, setButtonIcon] = useState(false)
  const [error, setError] = useState(false)

  const handleChangeInput = (e) => {
    const obj = {
      ...formObject,
      [e.target.name]: e.target.value
    }
    setFormObject(obj)
    console.log(obj)
  }
  console.log(currentLoc)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formObject.title === '' && currentLoc.title === '') {
      setError(true)
      return false
    }
    setLoading(true)
    const obj = {
      ...currentLoc,
      title: formObject.title !== '' ? formObject.title : currentLoc.title,
      description: formObject.description !== '' ? formObject.description : currentLoc.description,
      icons: formObject.icons !== '' ? formObject.icons : 'https://img.icons8.com/?size=512&id=7880&format=png'
    }
    setLocations(locations.map(x => {
      if (x.id === currentLoc.id) {
        return obj
      }
      return x
    }))
    addLocation(obj, obj.id, name)
    setFormObject(initForm)
    setLoading(false)
    setSetting(actionType.locations)
  }

  const handleCancel = () => {
    setSetting(actionType.locations)

    if (currentLoc.title === '' && currentLoc.description === '') {
      const newLocation = locations.filter(location => location.id !== currentLoc.id)
      setLocations(newLocation)
    }
  }

  const handleSelectIcon = (icon) => {
    setButtonIcon(false)
    setFormObject({
      ...formObject,
      icons: icon
    })
  }

  return (
    <div className='animate__animated animate__fadeInDown p-3 min-h-screen'>
      <h3 className='text-xl font-medium text-gray-900 mb-6'>
        Edit Location {currentLoc.title}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Title
          </label>
          <input onChange={handleChangeInput} value={formObject.title} name='title' id='title' type='text' placeholder={currentLoc.title ? currentLoc.title : 'title'} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          {error && <p className='text-red-500 text-xs italic'>Please choose a title.</p>}

        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Description
          </label>
          <input onChange={handleChangeInput} value={formObject.description} name='description' id='description' type='text' placeholder={currentLoc.description ? currentLoc.description : 'description'} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>

        <div className='py-2 flex justify-center'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKeMxWylWa9X7J859YdKx5r6XE1q45o7-jmnZ9p5xhNMRwrk6qICM0FZO8u7JOnR-F3M&usqp=CAU' alt='' className='lg:flex' />
        </div>

        <div className='my-4 flex items-center'>
          <label className='block w-1/4 text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            Icon
          </label>
          <button
            onClick={() => setButtonIcon(!buttonIcon)}
            id='dropdownDefaultButton' className='  hover:bg-black  hover:bg-opacity-20 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm  text-center inline-flex items-center
      ' type='button'
          >
            <img src={formObject.icons === '' ? currentLoc.icons : formObject.icons} alt='' width={30} />
            <svg className='w-4 h-4 ml-2' aria-hidden='true' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' /></svg>
          </button>
        </div>

        <div id='dropdown' className={`z-10 ${!buttonIcon && 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-4/4 `}>
          <ul className='flex flex-wrap py-2 text-sm text-gray-700 d' aria-labelledby='dropdownDefaultButton'>
            {
            icons.map((icon, i) =>
              <li key={i}>
                <div onClick={() => handleSelectIcon(icon)} className='flex justify-center cursor-pointer items-center px-4 py-2 hover:bg-gray-100'>
                  <img src={icon} alt='' width={30} />
                </div>
              </li>)
          }

          </ul>
        </div>

        <button type='submit' className={`flex gap-3 items-center justify-center ${color || 'bg-sky-700'} hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full`}>
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
      </form>
      <button onClick={handleCancel} className={`my-2 flex gap-3 items-center justify-center ${color || 'bg-sky-700'} bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full`}>
        Cancel
      </button>
    </div>
  )
}
