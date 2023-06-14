import { useEffect } from 'react'
import { ListaContainer } from './components/list/ListaContainer'
import { Mapa } from './components/map/Mapa'
import { useStore } from './store/store'
import { cargaFS } from './utils'

function App () {
  const { setLocations, locations } = useStore()

  useEffect(() => {
    cargaFS().then(locs => setLocations(locs))
  }, [])

  return (
    <>
      {
        locations.length > 0 &&
          <div className='flex flex-row max-h-screen overflow-hidden'>
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
