import { useSetting } from '../../store/storeSettings'

export const HeaderModal = ({ title, closeModal }) => {
  const { color } = useSetting()

  return (
    <div className={`${color} text-white p-5 rounded-t-lg flex justify-between items-center`}>
      <h3 className='font-bold text-xl'>{title}</h3>
      <button onClick={closeModal} type='button' className=' p-2 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900' data-modal-hide='defaultModal'>
        <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
        <span className='sr-only'>Close modal</span>
      </button>
    </div>
  )
}
