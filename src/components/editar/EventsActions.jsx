import { useMap, useMapEvents } from 'react-leaflet'
import { useStoreEdited } from '../../store/storeEdit'
import { actionType, uid } from '../../utils'
import { useStore } from '../../store/store'
import { useSetting } from '../../store/storeSettings'

export const EventsActions = () => {
  const action = useStoreEdited(state => state.action)
  const { setAction, setCurrentLoc, setCenterPosition } = useStoreEdited()
  const { locations, setLocations } = useStore()
  const { setting } = useSetting()

  const map = useMap()
  useMapEvents({
    zoomend: (e) => {
      setting === 'centerPosition' && setCenterPosition([map.getCenter().lat, map.getCenter().lng, map.getZoom()])
    },
    drag: (e) => {
      setting === 'centerPosition' && setCenterPosition([map.getCenter().lat, map.getCenter().lng, map.getZoom()])
    },
    click (e) {
      const position = [e.latlng.lat, e.latlng.lng]
      // const position = [map.getCenter().lat, map.getCenter().lng]
      console.log(position)
      console.log(action)
      const obj = {
        id: uid(),
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
