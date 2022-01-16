import firebase from "firebase/app";
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDWG7SWPz1rxmgY78blX-IflYTHC4Ldfcs",
    authDomain: "otp-demo-3a4e4.firebaseapp.com",
    projectId: "otp-demo-3a4e4",
    storageBucket: "otp-demo-3a4e4.appspot.com",
    messagingSenderId: "764670579283",
    appId: "1:764670579283:web:b508ed0d6dd800d9b66ca6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;