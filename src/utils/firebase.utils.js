// Firebase utils no jsx

import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBontIWg4YkOjiKmzBCi1yEBoATmN4KY4M",
  authDomain: "py-clothing-db.firebaseapp.com",
  projectId: "py-clothing-db",
  storageBucket: "py-clothing-db.appspot.com",
  messagingSenderId: "926246692353",
  appId: "1:926246692353:web:c5f82e43fa6a1d43e04200",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

// Users of authentication service are users limited to authentication only
// To make our users to persist in a db with custom columns we will use firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  // Check if user exists, returns a doc reference a special object
  // Reference is also created even if collection doesn't exist, check firebase docs
  const userDocRef = doc(db, "users", userAuth.uid) //doc(db_singleton,collection_name,identifier_in or uid)
  console.log(userDocRef)

  //getDoc returns special object with methods like exists which
  // help us to work easily with documents of firestore
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  //if user data exists, do nothing
  //if it doesn't exist, create/set document with user auth data
  //i.e create

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log(`Errors occured while creating user: ${error.message}`)
    }
  }

  return userDocRef
}
