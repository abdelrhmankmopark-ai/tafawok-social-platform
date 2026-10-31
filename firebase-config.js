import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvC3dWS5YGFb80pfXfZZx8WKh1MEfasNU",
  authDomain: "tafawok-social-platform.firebaseapp.com",
  projectId: "tafawok-social-platform",
  storageBucket: "tafawok-social-platform.firebasestorage.app",
  messagingSenderId: "646131283166",
  appId: "1:646131283166:web:30647d70989c1940a5fe4f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
