import { useEffect, useState } from 'react'
import { ListaContainer } from './components/list/ListaContainer'
import { Mapa } from './components/map/Mapa'
import { useStore } from './store/store'
import { ButtonsFloat } from './components/editar/ButtonsFloat'
import { useLocation } from 'wouter'
import { useSetting } from './store/storeSettings'
import { auth, cargaFS, loadMaps } from './db/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuth } from './store/auth'
import { ListHome } from './components/home/ListHome'
import { UserModalContainer } from './components/user/UserModalContainer'

function App () {
  const { setLocations, setDev, dev } = useStore()
  const [params, setLocation] = useLocation()
  const { setSettings, setName, name } = useSetting()
  const { setLogin, user, email } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(':::::')
    loadMaps()
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
    // user ? setDev(true) : setDev(false)

    cargaFS(name).then(locs => {
      console.log({ locs })

      if (locs[1]) {
        setLocations(locs[0])
        setSettings(locs[1])
        console.log('config', locs[1])
        email === locs[1].email ? setDev(true) : setDev(false)
        console.log('CENTER', locs[1].center)
        setIsLoading(true)
      } else {
        setSettings({
          title: '',
          color: 'bg-sky-700',
          layer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          center: [-33.461806983280546, -70.66894818450416, 12],
          draggin: true,
          zoomControl: true
        })
        setLocations([])
        setLocation('/  ')
      }
    }).catch(e => console.log('error'))
  }, [user, params, setLocation])

  return (
    <>
      <UserModalContainer />
      <div className='flex flex-row max-h-screen overflow-hidden bg-white'>
        <div className='basis-1/4 shadow-4xl p-1'>
          {
            name === 'home'
              ? <ListHome />
              : <ListaContainer />
          }
        </div>
        <div className='basis-3/4'>
          {isLoading && <Mapa />}
          {dev && name !== 'home' && <ButtonsFloat />}

        </div>
      </div>

    </>
  )
}

export default App
