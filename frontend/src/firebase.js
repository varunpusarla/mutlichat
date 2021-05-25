// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD7yqIy_UvLAyihjOQU3H8RRIFvfzAlkWc",
    authDomain: "multichat-4827d.firebaseapp.com",
    projectId: "multichat-4827d",
    storageBucket: "multichat-4827d.appspot.com",
    messagingSenderId: "285440743047",
    appId: "1:285440743047:web:8e497f254da8df7d63ca22",
    measurementId: "G-QJ7NM4C6CW"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db= firebaseapp.firestore();
  const auth = firebaseapp.auth()
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;