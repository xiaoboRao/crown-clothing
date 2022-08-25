import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'
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

export const signInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, provider)
  return {id: user.uid, creatAt: user.metadata.creationTime, displayName: user.displayName, email:user.email}
}
export const signOutStart = () => signOut(auth, provider)

const db = getFirestore(app)

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return
  const userRef = doc(db, 'users', userAuth.id)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    try {
      await setDoc(userRef, {
        ...userAuth,
        ...addtionalData,
      })
      return userRef
    } catch (error) {
      console.log('error creat user', error.message)
    }
  }
}
export const addCollectioAndDocumets = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db)
  // batch add objectsToAdd into firestore
  objectsToAdd.forEach((obj) => {
    const docRef = doc(collection(db, collectionKey))
    batch.set(docRef, obj)
  })
  return await batch.commit()
}
export const getMapDataByName = async (collectionName) => {
  const docRef = query(collection(db, collectionName))
  try {
    const documentSnapshots = await getDocs(docRef)
    const mapData = documentSnapshots.docs.reduce((accumlator, collecton) => {
      accumlator[collecton.data().title.toLowerCase()] = collecton.data()
      return accumlator
    }, {})
    return mapData
  } catch (error) {
    console.log('error', error)
  }
}
export const userRefOnSnapshot = async (userAuth, addtionalData, fn) => {
  const doc = await createUserProfileDocument(userAuth, addtionalData)
  return onSnapshot(doc, fn)
}
export const createUserWithEmailAndPwd = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  return { id: user.uid, creatAt: user.metadata.creationTime, displayName: user.displayName, email: user.email }
}
export const signInWithEmailAndpwd = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return {id: user.uid, creatAt: user.metadata.creationTime, displayName: user.displayName, email:user.email}
}

export const getUser = () => {
  return new Promise((resolve, reject) => {
     onAuthStateChanged(auth, (user) => {
      if(user) {
        resolve({id: user.uid, creatAt: user.metadata.creationTime, displayName: user.displayName, email:user.email})
      }
      },  reject)
  })
}
