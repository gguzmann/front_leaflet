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

export const addLocation = async (newLocation, id) => {
  const collect = collection(db, 'test')
  const docRef = doc(collect, id)
  await setDoc(docRef, newLocation)
}

export const deleteLocation = async (id) => {
  await deleteDoc(doc(db, 'test', id))
}

export const saveSettings = async (settings) => {
  const collectionSetting = collection(db, 'test')
  const docRef = doc(collectionSetting, 'config')
  await setDoc(docRef, settings)
}
