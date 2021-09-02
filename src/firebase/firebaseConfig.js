import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAGZuaD1TdwE4ClLyxQuQr8OkoU4vQ1Tc4",
    authDomain: "react-journal-app-21bb0.firebaseapp.com",
    projectId: "react-journal-app-21bb0",
    storageBucket: "react-journal-app-21bb0.appspot.com",
    messagingSenderId: "899767033568",
    appId: "1:899767033568:web:13602d4066ad78f6fa7a85"
  };


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  
  export {
      db,
      googleAuthProvider,
      firebase
  }