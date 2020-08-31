import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx25A2XxZvN3dfcBJBzkimKVCgK1aVp_Q",
    authDomain: "heidar-fotogalleri.firebaseapp.com",
    databaseURL: "https://heidar-fotogalleri.firebaseio.com",
    projectId: "heidar-fotogalleri",
    storageBucket: "heidar-fotogalleri.appspot.com",
    messagingSenderId: "503459001495",
    appId: "1:503459001495:web:f94d80d1370fa79212e5d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{ projectStorage , projectFirestore, timestamp };
  