import { useMapEvents } from 'react-leaflet'
import { useStoreEdited } from '../../store/storeEdit'
import { actionType } from '../../utils'
import { useStore } from '../../store/store'

export const EventsActions = () => {
  const action = useStoreEdited(state => state.action)
  const { setAction, setCurrentLoc } = useStoreEdited()
  const { locations, setLocations } = useStore()

  useMapEvents({
    click (e) {
      const position = [e.latlng.lat, e.latlng.lng]
      console.log(position)
      console.log(action)
      const obj = {
        id: locations.length,
        title: '',
        icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
        description: '',
        position
      }
      switch (action) {
        case actionType.NONE:
          break
        case actionType.CONFIG:
          break
        case actionType.LOCATION:

          setLocations([...locations, obj])
          setAction(actionType.NONE)
          setCurrentLoc(obj)
          break
        case actionType.LAYER:
          break

        default:
          break
      }
    }
  })
}
