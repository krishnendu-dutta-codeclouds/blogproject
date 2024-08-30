import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWS1pRGhUM_l_BueRWse1sgsRgywuIM-E",
  authDomain: "blog-3ffe1.firebaseapp.com",
  projectId: "blog-3ffe1",
  storageBucket: "blog-3ffe1.appspot.com",
  messagingSenderId: "379213627537",
  appId: "1:379213627537:web:ec4f5ad5c21d9ccdfe3f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };