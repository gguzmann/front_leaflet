import { userSVG } from '../../svg'

export const UserContainer = () => {
  return (
    <div>
      <button type='button' data-tooltip-target='tooltip-share' data-tooltip-placement='left' className='p-2 absolute right-2 top-2 z-[1050] w-[52px] h-[52px] text-gray-500 hover:text-gray-900 hover:border-2 hover:border-black bg-slate-400 rounded-full border border-gray-200hover:bg-gray-50'>
        <div className='flex items-center justify-center'>
          {userSVG}
        </div>
      </button>

    </div>
  )
}
