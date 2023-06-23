import { useSetting } from '../../../store/storeSettings'
import { colors } from '../../../utils'

export const GeneralSettings = () => {
  const { setColor, color, setTitle, title } = useSetting()

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className=''>
      <h3 className='text-xl font-medium text-gray-900 mb-6'>
        General Settings
      </h3>

      <div className='mb-6 flex items-center'>
        <label htmlFor='default-input' className=' w-1/4 block mb-2 text-sm font-medium text-gray-900'>Name:</label>
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

    </div>
  )
}
