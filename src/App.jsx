import { useEffect } from 'react'
import { ListaContainer } from './components/list/ListaContainer'
import { Mapa } from './components/map/Mapa'
import { useStore } from './store/store'
import { cargaFS } from './utils'
import { ButtonsFloat } from './components/editar/ButtonsFloat'
import { useLocation } from 'wouter'
import { useSetting } from './store/storeSettings'
import { auth } from './db/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuth } from './store/auth'

function App () {
  const { setLocations, setDev, dev } = useStore()
  const [params, setLocation] = useLocation()
  const { setSettings, setName, title } = useSetting()
  const { setLogin, user } = useAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (us) => {
      if (us) {
        console.log(us.email)
        console.log('uid user:', us.uid)
        setLogin(true, us)
      } else {
        console.log('no user connected')
      }
    })
    const name = params.split('/')[1] || 'home'
    setName(name)
    console.log('NAME:', name)
    user ? setDev(true) : setDev(false)

    cargaFS(name).then(locs => {
      console.log({ locs })

      if (locs[1]) {
        setLocations(locs[0])
        setSettings(locs[1])
        console.log('config', locs[1])
      }
    }).catch(e => console.log('error'))
  }, [user])

  return (
    <>
      <div className='flex flex-row max-h-screen overflow-hidden bg-white'>
        <div className='basis-1/4 shadow-4xl p-1'>
          <ListaContainer />
        </div>
        <div className='basis-3/4'>
          <Mapa />
          {dev && <ButtonsFloat />}

        </div>
      </div>
    </>
  )
}

export default App
