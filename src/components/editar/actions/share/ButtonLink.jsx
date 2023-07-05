import { linkSVG } from '../../../../svg'
import { useSetting } from '../../../../store/storeSettings'
import { useStoreEdited } from '../../../../store/storeEdit'

export const ButtonLink = ({ action }) => {
  const { setSetting } = useSetting()
  const { setCurrentLoc } = useStoreEdited()

  const handleClick = () => {
    setSetting(action)
    setCurrentLoc({})
  }

  return (
    <>
      <div>
        <button onClick={handleClick} type='button' className='p-2 flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 hover:border-2 hover:border-black bg-white rounded-lg border border-gray-200hover:bg-gray-50'>
          {linkSVG}
          <span className='sr-only'>Save</span>
        </button>

      </div>
    </>
  )
}
