import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDcnSJ70fgMAglqgw0myMmjhTnRbXlyrlY",
  authDomain: "wilyapp-90634.firebaseapp.com",
  projectId: "wilyapp-90634",
  storageBucket: "wilyapp-90634.appspot.com",
  messagingSenderId: "782856211299",
  appId: "1:782856211299:web:aa755cc758bc798bc96156"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();