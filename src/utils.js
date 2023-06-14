import { collection, getDocs } from 'firebase/firestore'
import { db } from './db/config'

export const cargaFS = async (path) => {
  const collectionTest = collection(db, path)
  const arr = []
  const queryTest = await getDocs(collectionTest)
  queryTest.forEach(element => {
    const data = element.data()
    arr.push(data)
  })
  if (arr.length > 0) { return arr }

  return new Error()
}
