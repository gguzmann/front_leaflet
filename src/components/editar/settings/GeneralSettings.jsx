import { useSetting } from '../../../store/storeSettings'
import { colors } from '../../../utils'

export const GeneralSettings = () => {
  const { setColor, color, setTitle, title, draggin, setDraggin, zoomControl, setZoomControl } = useSetting()

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className=''>
      <h3 className='text-xl font-medium text-gray-900 mb-6'>
        General Settings
      </h3>

      <div className='mb-6 flex items-center'>
        <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Name Map:</label>
        <input onChange={handleChangeTitle} placeholder={title} type='text' id='default-input' className='w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' />
      </div>

      <div className='mb-6 flex items-center'>
        <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Color:</label>
        <div className='w-3/4 flex gap-3'>
          {
            colors.map((cl, index) => <div key={index} onClick={() => setColor(cl.color)} className={`w-6 ${cl.color} cursor-pointer hover:outline hover:outline-yellow-500 rounded ${color === cl.color && 'outline outline-yellow-500'}`}>&nbsp;</div>)
          }
        </div>
      </div>

      <div className='mb-6 flex items-center'>
        <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Drag:</label>
        <label className='relative inline-flex items-center mb-2 cursor-pointer'>
          <input type='checkbox' onChange={() => setDraggin(!draggin)} checked={draggin} className='sr-only peer' />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600" />
        </label>
      </div>

      <div className='mb-6 flex items-center'>
        <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Zoom Control:</label>
        <label className='relative inline-flex items-center mb-2 cursor-pointer'>
          <input type='checkbox' onChange={() => setZoomControl(!zoomControl)} checked={zoomControl} className='sr-only peer' />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600" />
        </label>
      </div>

      {
        zoomControl &&
          <>
            <label htmlFor='email-address-icon' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Email</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' /><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' /></svg>
              </div>
              <input type='text' id='email-address-icon' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@flowbite.com' />
            </div>
          </>
      }

    </div>
  )
}
