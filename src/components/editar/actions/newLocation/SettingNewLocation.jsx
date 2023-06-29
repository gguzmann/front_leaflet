import { locationSVG } from '../../../../svg'

export const SettingNewLocation = () => {
  return (
    <div className='animate__animated animate__fadeInUp p-10 min-h-screen text-slate-400 text-center'>
      <p className='italic '>Select a new position in map</p>
      {locationSVG}
    </div>
  )
}
