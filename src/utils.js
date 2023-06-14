import { collection, getDocs } from 'firebase/firestore'
import { db } from './db/config'

export const cargaFS = async () => {
  const collectionTest = collection(db, 'test')
  const arr = []
  const queryTest = await getDocs(collectionTest)
  queryTest.forEach(element => {
    const data = element.data()
    arr.push(data)
  })
  return arr
}
