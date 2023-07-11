import { useState } from 'react'
import { iconShapes, icons, iconsNumber } from '../../../../icons'

export const DropdownIcon = ({ handleSelectIcon }) => {
  const [category, setCategory] = useState(0)
  return (
    <>
      <ul
        className='flex list-none flex-row flex-wrap border-b-0 pl-0'

      >
        <li>
          <button
            onClick={() => setCategory(0)}
            className=' block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent'
            type='button'
          >Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setCategory(1)}
            className=' block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent'
            type='button'
          >Numbers
          </button>
        </li>

        <li>
          <button
            onClick={() => setCategory(2)}
            className=' block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent'
            type='button'
          >Shapes
          </button>
        </li>

      </ul>

      <div className='mb-6'>
        <div
          className='p-3 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
        >
          <ul className='flex flex-wrap py-2 text-sm text-gray-700 d' aria-labelledby='dropdownDefaultButton'>
            {
                category === 0 &&
                    icons.map((icon, i) =>
                      <li key={i}>
                        <div onClick={() => handleSelectIcon(icon)} className='flex justify-center cursor-pointer items-center px-4 py-2 hover:bg-gray-100'>
                          <img src={icon} alt='' width={30} />
                        </div>
                      </li>)
            }

            {
                category === 1 &&
                    iconsNumber.map((icon, i) =>
                      <li key={i}>
                        <div onClick={() => handleSelectIcon(icon)} className='flex justify-center cursor-pointer items-center px-4 py-2 hover:bg-gray-100'>
                          <img src={icon} alt='' width={30} />
                        </div>
                      </li>)
            }

            {
                category === 2 &&
                    iconShapes.map((icon, i) =>
                      <li key={i}>
                        <div onClick={() => handleSelectIcon(icon)} className='flex justify-center cursor-pointer items-center px-4 py-2 hover:bg-gray-100'>
                          <img src={icon} alt='' width={30} />
                        </div>
                      </li>)
            }

          </ul>
        </div>

      </div>
    </>
  )
}
