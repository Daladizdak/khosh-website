import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2xo7DePqRaKeQJ_NsfP92Vfax9HDuS9E",
  authDomain: "khosh-construction.firebaseapp.com",
  projectId: "khosh-construction",
  storageBucket: "khosh-construction.firebasestorage.app",
  messagingSenderId: "212974208900",
  appId: "1:212974208900:web:7fb97a002a8cf40848bfd1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);