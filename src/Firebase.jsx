import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUDAQNpm8FPpOGCn1ZlhZWUo6G9XJUFQ8",
authDomain: "crudreactfirebase-548e5.firebaseapp.com",
databaseURL: "https://crudreactfirebase-548e5.firebaseio.com",
projectId: "crudreactfirebase-548e5",
storageBucket: "crudreactfirebase-548e5.appspot.com",
messagingSenderId: "100451485440",
appId: "1:100451485440:web:fab2163a49fd8af65515e5",
measurementId: "G-919J2MSHT2"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
