import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0wKKBWzUyNjFODwJgjV0_eAijqQ8je90",
  authDomain: "genaisummit-speakersponsor.firebaseapp.com",
  projectId: "genaisummit-speakersponsor",
  storageBucket: "genaisummit-speakersponsor.appspot.com",
  messagingSenderId: "370190358206",
  appId: "1:370190358206:web:47b78992a58828330130ef",
  measurementId: "G-WYV6EN6T47"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const db = getFirestore(app);