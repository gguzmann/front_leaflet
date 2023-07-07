import { initializeApp } from 'firebase/app'
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {

  apiKey: 'AIzaSyDQ1WC4eS5HKy7mUzJDosrygh9O31Q3e3k',

  authDomain: 'mapas-7f8ea.firebaseapp.com',

  projectId: 'mapas-7f8ea',

  storageBucket: 'mapas-7f8ea.appspot.com',

  messagingSenderId: '404330607550',

  appId: '1:404330607550:web:51a34635823e3a56717fef',

  measurementId: 'G-HWZFQP4WPN'

}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()

export const loginGoogle2 = async () => {
  const googleProvider = await new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

export const logout = async () => await signOut(auth)

export const addLocation = async (newLocation, id, nameMap) => {
  const collect = collection(db, nameMap)
  const docRef = doc(collect, id)
  await setDoc(docRef, newLocation)
}

export const deleteLocation = async (id, name) => {
  console.log('name', name)
  await deleteDoc(doc(db, name, id))
}

export const saveSettings = async (settings, nameMap) => {
  const collectionSetting = collection(db, nameMap)
  const docRef = doc(collectionSetting, 'config')
  await setDoc(docRef, settings, { merge: true })
}

export const newMap = async (name, config) => {
  await setDoc(doc(db, name, 'config'), config)
}

export const newMap2 = async (id, obj) => {
  await setDoc(doc(db, id, 'config'), obj)
}

export const saveListMap = async (id, user) => {
  await setDoc(doc(db, 'mapas', id), { user })
}

export const getAllMaps = async () => {
  const collectionMaps = collection(db, 'mapas')
  const ref = await getDocs(collectionMaps)
  const arr = []
  ref.forEach(map => {
    console.log(map.data())
    arr.push(map.id)
  })

  return arr
}

export const loadMaps = async () => {
  const collectionMaps = collection(db, 'EVENTS_COLLECTION')
  const ref = await getDocs(collectionMaps)
  ref.forEach(element => {
    console.log(element.data())
  })
}

export const cargaFS = async (path) => {
  const collectionTest = collection(db, path)
  const arr = []
  let config = {}
  const queryTest = await getDocs(collectionTest)
  queryTest.forEach(element => {
    const data = element.data()
    console.log(data)
    console.log(element.id)
    if (element.id === 'config') {
      config = element.data()
    } else {
      arr.push({ ...data, id: element.id })
    }
  })
  // return [arr, config]
  if (Object.keys(config).length > 0) { return [arr, config] }
  return false
}
