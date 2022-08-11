import { initializeApp } from "firebase/app";
import { collection, getFirestore, doc, getDoc, setDoc, onSnapshot, writeBatch } from 'firebase/firestore'
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBCBdvvND_0LsHJh9SR6z2OLlueWAOgR3o',
  authDomain: 'crown-db-2ec85.firebaseapp.com',
  projectId: 'crown-db-2ec85',
  storageBucket: 'crown-db-2ec85.appspot.com',
  messagingSenderId: '299955068565',
  appId: '1:299955068565:web:ff863d254e42908ff2c59c',
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

// when google account changed, it will trigger
export const onGoogleAuthStateChanged = (auth, fn) => onAuthStateChanged(auth, fn)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const signOutWithGoogle = () => signOut(auth, provider)

const db = getFirestore(app)

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return
  const userRef = doc(db, 'users', userAuth.uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth
    const creatAt = new Date()
    try {
      await setDoc(userRef, {
        displayName,
        email,
        creatAt,
        ...addtionalData,
      })
    } catch (error) {
      console.log('error creat user', error.message)
    }
  }
  return userRef
}
export const addCollectioAndDocumets = async (collectionKey, objectsToAdd) => {
  const collectionRef = doc(collection(db, collectionKey))
  // const batch = writeBatch(db)

  objectsToAdd.forEach(async (obj) => {
    const newDocRef = await setDoc(collectionRef, obj)
    // batch.set(newDocRef, obj)
  })
  // return await batch.commit()
} 
export const userRefOnSnapshot = async (userAuth, addtionalData, fn) =>{
  const doc =  await createUserProfileDocument(userAuth, addtionalData)
  return onSnapshot(doc, fn)
}
export const createUserWithEmailAndPwd = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}
export const signInWithEmailAndpwd = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
