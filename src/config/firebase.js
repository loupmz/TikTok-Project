
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCC0LE_Nb_iWi-7dMOLkRENWz9fszdifdI",
  authDomain: "tiktok---jornada-16e54.firebaseapp.com",
  projectId: "tiktok---jornada-16e54",
  storageBucket: "tiktok---jornada-16e54.appspot.com",
  messagingSenderId: "671063426941",
  appId: "1:671063426941:web:ce1f5ddad8ab5cdb9e6e14"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;