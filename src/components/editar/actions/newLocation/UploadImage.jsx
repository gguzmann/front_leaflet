import { useEffect, useRef } from 'react'

export const UploadImage = ({ setUrl, setFormObject, formObject }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    console.log(cloudinaryRef.current)
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloud_name: 'dmkflpz8t',
      uploadPreset: 'srqbvyge'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('img subida correctamente')
        setUrl(result.info.secure_url)
        setFormObject({ ...formObject, img: result.secure_url })
      }
    })
  }, [])
  return (
    <>
      <button onClick={() => widgetRef.current.open()} type='button' className='p-2 border rounded'>Subir imagen</button>
    </>
  )
}
