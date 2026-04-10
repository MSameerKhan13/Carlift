import { initializeApp } from 'firebase/app';
import { getAuth, browserSessionPersistence, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqUHzo4ceBolB0mK3A5nhbX8-7stSay5I",
  authDomain: "car-lift-98b84.firebaseapp.com",
  projectId: "car-lift-98b84",
  storageBucket: "car-lift-98b84.firebasestorage.app",
  messagingSenderId: "536354127386",
  appId: "1:536354127386:web:3efd32efb30f184a919ba3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const ADMIN_EMAILS: string[] = [
  '777carcare@gmail.com',
];

setPersistence(auth, browserSessionPersistence).catch(() => {});

export default app;
