import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuhZ9Z3Ks0wjfBIP-CCHOXSdmsxmJ_7tQ",
  authDomain: "test-e1a5c.firebaseapp.com",
  projectId: "test-e1a5c",
  storageBucket: "test-e1a5c.appspot.com",
  messagingSenderId: "809022388111",
  appId: "1:809022388111:web:017e9a77aefddf60cebdfa",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
