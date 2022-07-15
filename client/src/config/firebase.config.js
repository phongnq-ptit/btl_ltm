import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBbqT7t5vwq1B737JmYegiH58DyTqyr4bY",
  authDomain: "phone-auth-37b9b.firebaseapp.com",
  projectId: "phone-auth-37b9b",
  storageBucket: "phone-auth-37b9b.appspot.com",
  messagingSenderId: "403130050536",
  appId: "1:403130050536:web:c5fb1521f28f3f863aa65d",
  measurementId: "G-RZWD41BVS4"
}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
