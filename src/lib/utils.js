import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import { FieldValue, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebase = initializeApp(config)
const auth = getAuth(firebase);
const db = getFirestore(firebase);


// do not uncomment these. It'll add duplicate data

// seedUsers(db, 'users');
// seedManifestations(db, 'manifestos');

export { firebase, FieldValue, db, auth };

