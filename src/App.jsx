import { useEffect } from 'react'
import { ListaContainer } from './components/list/ListaContainer'
import { Mapa } from './components/map/Mapa'
import { useStore } from './store/store'
import { cargaFS } from './utils'
import { ButtonsFloat } from './components/editar/ButtonsFloat'

function App () {
  const { setLocations, setDev, dev } = useStore()

  useEffect(() => {
    const params = window.location.pathname
    const name = params.split('/')[1]
    params.split('/')[2] === 'dev' ? setDev(true) : setDev(false)

    cargaFS(name).then(locs => setLocations(locs)).catch(e => console.log('error'))
  }, [])

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
