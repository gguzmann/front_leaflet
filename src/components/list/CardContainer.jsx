import { useStore } from '../../store/store'
import { CardList } from './CardList'

export const CardContainer = () => {
  const locations = useStore(state => state.locations)

  return (
    <>
      {
            locations.length > 0 &&
            locations?.map((card, i) => <CardList key={i} loc={card} />)
          }
    </>
  )
}
