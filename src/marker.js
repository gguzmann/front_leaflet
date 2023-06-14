import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from './db/config'

export const marker = [
  {
    id: 0,
    title: 'La Florida',
    icons: 'https://img.icons8.com/?size=512&id=u-vWAXRsbycy&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.43788776270175, -70.6388528585645]
  },
  {
    id: 1,
    title: 'Santiago Centro',
    icons: 'https://img.icons8.com/?size=512&id=8287&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.454503010813966, -70.59334916282904]
  },
  {
    id: 2,
    title: 'Pudahuel',
    icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.49674296343327, -70.63146924001123]
  },
  {
    id: 3,
    title: 'Macul',
    icons: 'https://img.icons8.com/?size=512&id=8287&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.4907303969559, -70.7082245305537]
  },
  {
    id: 4,
    title: 'San Bernardo',
    icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.40450441694289, -70.70741198989964]
  },
  {
    id: 5,
    title: 'San Bernardo',
    icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.40450441694289, -70.70741198989964]
  },
  {
    id: 6,
    title: 'San Bernardo',
    icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.40450441694289, -70.70741198989964]
  },
  {
    id: 7,
    title: 'San Bernardo',
    icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.40450441694289, -70.70741198989964]
  },
  {
    id: 8,
    title: 'San Bernardo',
    icons: 'https://img.icons8.com/?size=512&id=7880&format=png',
    description: 'Lorem ipsum dolor sit',
    position: [-33.40450441694289, -70.70741198989964]
  }
]

export const handleClick = async () => {
  marker.forEach(mark => {
    save(mark)
  })
}

const save = async (obj) => {
  const collectionTest = collection(db, 'test')
  const docRef = doc(collectionTest, obj.title)
  await setDoc(docRef, obj)
}
