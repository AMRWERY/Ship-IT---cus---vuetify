import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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

export const auth = getAuth();
