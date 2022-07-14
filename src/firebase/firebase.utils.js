import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBCBdvvND_0LsHJh9SR6z2OLlueWAOgR3o',
  authDomain: 'crown-db-2ec85.firebaseapp.com',
  projectId: 'crown-db-2ec85',
  storageBucket: 'crown-db-2ec85.appspot.com',
  messagingSenderId: '299955068565',
  appId: '1:299955068565:web:ff863d254e42908ff2c59c',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)
