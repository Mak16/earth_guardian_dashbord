import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBoLkyKbQ9Ko2csB5k1kbMc2UbyEt1BFsI",
  authDomain: "earthguardian-5ace2.firebaseapp.com",
  projectId: "earthguardian-5ace2",
  storageBucket: "earthguardian-5ace2.appspot.com",
  messagingSenderId: "994627960142",
  appId: "1:994627960142:web:73727a4436c409fab5b21f",
  measurementId: "G-1SB8YF3MWJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };