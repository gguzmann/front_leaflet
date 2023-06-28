import { useEffect } from 'react'
import { ListaContainer } from './components/list/ListaContainer'
import { Mapa } from './components/map/Mapa'
import { useStore } from './store/store'
import { cargaFS } from './utils'
import { ButtonsFloat } from './components/editar/ButtonsFloat'
import { useLocation } from 'wouter'
import { Settings } from './components/editar/Settings'
import { useSetting } from './store/storeSettings'

function App () {
  const { setLocations, setDev, dev, locations } = useStore()
  const [params, setLocation] = useLocation()
  const { setSettings, setName } = useSetting()

  useEffect(() => {
    const name = params.split('/')[1]
    setName(name)
    params.split('/')[2] === 'dev' ? setDev(true) : setDev(false)

    cargaFS(name).then(locs => {
      console.log({ locs })
      if (locs) {
        setLocations(locs[0])
        setSettings(locs[1])
        console.log(locs[1])
      } else {
        setLocation('/')
      }
    }).catch(e => console.log('error'))
  }, [])

  return (
    <>
      <div className='flex flex-row max-h-screen overflow-hidden bg-white'>
        <div className='basis-1/4 shadow-4xl p-1'>
          <ListaContainer />
        </div>
        <div className='basis-3/4'>
          {locations.length > 0 && <Mapa />}
          {dev && <ButtonsFloat />}
        </div>
      </div>
      <Settings />
    </>
  )
}

export default App
