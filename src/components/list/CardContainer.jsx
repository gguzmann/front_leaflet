import { useStore } from '../../store/store'
import { useStoreEdited } from '../../store/storeEdit'
import { useSetting } from '../../store/storeSettings'
import { actionType } from '../../utils'
import { CardList } from './CardList'

export const CardContainer = () => {
  const { locations, dev } = useStore()
  const { setSetting } = useSetting()
  const { setCurrentLoc } = useStoreEdited()

  const handleNewPosition = () => {
    setSetting(actionType.newLocation)
    setCurrentLoc({})
  }

  return (
    <>
      {
      dev &&
        <>
          <div onClick={handleNewPosition} className='p-2 text-slate-500 hover:text-black cursor-pointer  hover:shadow '>
            <div className='flex justify-center gap-5 items-center'>
              <p className='font-bold '>New Position</p>
              <i className='far fa-plus-square text-3xl' />
            </div>
          </div>
          <hr />
        </>
      }
      {
            locations.length > 0 &&
            locations?.filter(x => x.title !== '').map((card, i) => <CardList key={i} loc={card} />)
          }
    </>
  )
}
