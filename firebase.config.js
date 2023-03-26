import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCJYlq_Hhtp0Bg82Kfo35UuqGalmNt92yk',
  authDomain: 'wegrixportfolio.firebaseapp.com',
  databaseURL: 'https://wegrixportfolio.firebaseio.com',
  projectId: 'wegrixportfolio',
  storageBucket: 'wegrixportfolio.appspot.com',
  messagingSenderId: '1054422122927',
  appId: '1:1054422122927:web:da08a00caff3fdb630ef5a',
  measurementId: 'G-D3PL1RXBZV',
};

// Get a Firestore instance
export const firebaseApp = initializeApp(config);
export const db = getFirestore();
