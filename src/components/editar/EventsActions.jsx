import { useMap, useMapEvents } from 'react-leaflet'
import { useStoreEdited } from '../../store/storeEdit'
import { actionType, uid } from '../../utils'
import { useStore } from '../../store/store'
import { useSetting } from '../../store/storeSettings'

export const EventsActions = () => {
  const { setCurrentLoc, setCenterPosition } = useStoreEdited()
  const { locations, setLocations } = useStore()
  const { setting, setSetting } = useSetting()

  const map = useMap()
  useMapEvents({
    zoomend: (e) => {
      setting === 'centerPosition' && setCenterPosition([map.getCenter().lat, map.getCenter().lng, map.getZoom()])
    },
    dragend: (e) => {
      setting === 'centerPosition' && setCenterPosition([map.getCenter().lat, map.getCenter().lng, map.getZoom()])
    },
    click (e) {
      const position = [e.latlng.lat, e.latlng.lng]
      // const position = [map.getCenter().lat, map.getCenter().lng]
      const obj = {
        id: uid(),
        title: '',
        icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
        description: '',
        position
      }
      switch (setting) {
        case actionType.none:
          break
        case actionType.config:
          break
        case actionType.newLocation:
          setLocations([...locations, obj])
          setCurrentLoc(obj)
          setSetting(actionType.editLocation)
          break
        case actionType.LAYER:
          break

        default:
          break
      }
    }
  })
}
