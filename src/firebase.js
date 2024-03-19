import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKlnDhq2M0MzCW4eyZWqR8XQGti06hH2k",
    authDomain: "clone-5edbe.firebaseapp.com",
    projectId: "clone-5edbe",
    storageBucket: "clone-5edbe.appspot.com",
    messagingSenderId: "185993597034",
    appId: "1:185993597034:web:36ab7f1d3f779c66a93a13",
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db= getFirestore(app)

  export {auth,db}