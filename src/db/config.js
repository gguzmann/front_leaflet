import { initializeApp } from 'firebase/app'
import { collection, deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore'

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
