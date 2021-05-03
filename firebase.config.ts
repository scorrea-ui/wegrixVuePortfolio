import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCJYlq_Hhtp0Bg82Kfo35UuqGalmNt92yk",
  authDomain: "wegrixportfolio.firebaseapp.com",
  databaseURL: "https://wegrixportfolio.firebaseio.com",
  projectId: "wegrixportfolio",
  storageBucket: "wegrixportfolio.appspot.com",
  messagingSenderId: "1054422122927",
  appId: "1:1054422122927:web:da08a00caff3fdb630ef5a",
  measurementId: "G-D3PL1RXBZV",
};

// Get a Firestore instance
const db = firebase.initializeApp(config).firestore();

export default db;
