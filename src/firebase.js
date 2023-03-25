import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCByHJ0Vs2S08w1JZBp2743LFnIYTxTGVo",
  authDomain: "blogapp-vaibhav-ved.firebaseapp.com",
  projectId: "blogapp-vaibhav-ved",
  storageBucket: "blogapp-vaibhav-ved.appspot.com",
  messagingSenderId: "791744985030",
  appId: "1:791744985030:web:bc8b8572a5d965b57fe4c7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, auth, storage, db };
