import { useSetting } from '../../../store/storeSettings'
import { colors } from '../../../utils'
import { SettingLayer } from '../actions/layers/SettingLayer'

export const GeneralSettings = () => {
  const { setColor, color, setTitle, title } = useSetting()

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className=''>

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

      <SettingLayer />
      {/* <div className='mb-6 flex items-center'>
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
       */}

    </div>
  )
}
