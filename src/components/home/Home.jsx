import { useLocation } from 'wouter'
import { newMap2, saveListNewMap } from '../../db/config'
import { useAuth } from '../../store/auth'
import { mapsSVG } from '../../svg'
import { uidMap } from '../../utils'
import { useSetting } from '../../store/storeSettings'

export const Home = ({ setIsHome }) => {
  const { email, user } = useAuth()
  const { openSetting } = useSetting()
  const [, setLocation] = useLocation()

  const handleNewMap = async () => {
    if (!user) {
      openSetting()
    } else {
      try {
        const id = uidMap()
        await newMap2(id, email)
        await saveListNewMap(id, email)
        setLocation('/' + id)
      } catch (error) {
        console.log('error')
      }
    }
  }

  return (
    <>
      <div className='animate__animated animate__fadeInLeft p-10 text-center text-slate-500'>
        {mapsSVG}
      </div>
      <div className='m-3'>
        <button onClick={handleNewMap} className='flex mb-3 items-center justify-center bg-sky-700 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full'> Create Map </button>
        <button onClick={() => setIsHome(false)} className='flex items-center justify-center bg-sky-700 hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded w-full'> Explore Maps </button>
      </div>
    </>
  )
}
