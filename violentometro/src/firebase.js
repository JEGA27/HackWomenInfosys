// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOacXTLdmDAqXEMN3KdGGCSv7FptEPjIc",
  authDomain: "violentometro-e79a0.firebaseapp.com",
  projectId: "violentometro-e79a0",
  storageBucket: "violentometro-e79a0.appspot.com",
  messagingSenderId: "181609227579",
  appId: "1:181609227579:web:655e212e881d3e1239031e"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}