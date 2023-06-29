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
      {/* {
        zoomControl &&
          <div className='mb-6 flex items-center'>
            <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Range Zoom:</label>
            <div className='flex gap-2 mb-6 w-2/3'>
              <div className='flex'>
                <span className='basis-1/4 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md '>
                  min
                </span>
                <input type='text' id='website-admin' className='basis-2/4 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  ' placeholder='0' />
              </div>
              <div className='flex'>
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md '>
                  max
                </span>
                <input type='text' id='website-admin' className='rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  ' placeholder='18' />
              </div>
            </div>

          </div>
      } */}

    </div>
  )
}
