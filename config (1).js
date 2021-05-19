import firebase from 'firebase'
requiered("@firebase/firestore")
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBAm2OzIymtLuezxIIyd-SGnuLHtRuHAeM",
    authDomain: "newsletter-30ec3.firebaseapp.com",
    databaseURL: "https://newsletter-30ec3-default-rtdb.firebaseio.com",
    projectId: "newsletter-30ec3",
    storageBucket: "newsletter-30ec3.appspot.com",
    messagingSenderId: "503315051694",
    appId: "1:503315051694:web:446b764e67812715bc693f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()