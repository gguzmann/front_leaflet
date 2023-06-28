import { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'

export const Test = () => {
  const map = useMap()
  const [center, setCenter] = useState(null)
  useEffect(() => {
    setCenter(map.getCenter())
  }, [map])
  return (
    <>
      {
center != null &&
  <Marker position={center} />
    }
    </>

  )
}
