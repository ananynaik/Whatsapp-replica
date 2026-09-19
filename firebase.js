import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC03vZbq9vCxqJVeGbgxV8FcT3N65zcl2I",
  authDomain: "whatsapp-replica-934e9.firebaseapp.com",
  projectId: "whatsapp-replica-934e9",
  storageBucket: "whatsapp-replica-934e9.firebasestorage.app",
  messagingSenderId: "107103078909",
  appId: "1:107103078909:web:3369373a2b23ff26083194",
  measurementId: "G-YX7GTHQMMP"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);\nexport { RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged };
export const db = getFirestore(firebaseApp);
export const analyticsPromise = isSupported().then(ok => ok ? getAnalytics(firebaseApp) : null);
