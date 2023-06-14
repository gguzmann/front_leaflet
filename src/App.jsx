import { useEffect, useState } from 'react'
import { ListaContainer } from './components/list/ListaContainer'
import { Mapa } from './components/map/Mapa'
import { useStore } from './store/store'
import { cargaFS } from './utils'

function App () {
  const { setLocations, locations } = useStore()
  const [isDev, setIsDev] = useState(false)

  useEffect(() => {
    const params = window.location.pathname
    const name = params.split('/')[1]

    params.split('/')[3] === 'dev' ? setIsDev(true) : setIsDev(false)

    cargaFS(name).then(locs => setLocations(locs)).catch(e => console.log('error'))
  }, [])

  return (
    <>
      {
        !isDev
          ? locations.length > 0 &&
            <div className='flex flex-row max-h-screen overflow-hidden bg-white'>
              <div className='basis-1/4 shadow-4xl p-1'>
                <ListaContainer />
              </div>
              <div className='basis-3/4'>
                <Mapa />
              </div>
            </div>
          : <div className='flex flex-row max-h-screen overflow-hidden bg-white'>
            <div className='basis-1/4 shadow-4xl p-1'>
              <ListaContainer />
            </div>
            <div className='basis-3/4'>
              <Mapa />
            </div>
          </div>
      }
    </>
  )
}

export default App
