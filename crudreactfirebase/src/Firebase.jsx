import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQeBK-9-Mn36Ho1k5wjwLIyTB89qtNMe8",
    authDomain: "dps-parcial3.firebaseapp.com",
    databaseURL: "https://dps-parcial3.firebaseio.com",
    projectId: "dps-parcial3",
    storageBucket: "dps-parcial3.appspot.com",
    messagingSenderId: "612932482603",
    appId: "1:612932482603:web:74c4d100831600677edc6e",
    measurementId: "G-00K06LSYZN"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
