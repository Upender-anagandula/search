import  firebase from 'firebase/app';
import 'firebase/database';
//import 'firebase/ref'

  
//Initialize Firebase
var firebaseDb=firebase.initializeApp({
    apiKey: "AIzaSyCRQM8ZZA_arUBKXGIfB0VHyEobiBhtaWY",
    authDomain: "personal-details-553fd.firebaseapp.com",
    databaseURL: "https://personal-details-553fd.firebaseio.com",
    projectId: "personal-details-553fd",
    storageBucket: "personal-details-553fd.appspot.com",
    messagingSenderId: "119137915680",
    appId: "1:119137915680:web:2b3dfb7045c6266609fd45"
});
  
export  default firebaseDb.database().ref();

// var firebaseConfig = {
//     apiKey: "AIzaSyClnGU4GHFA69cmpfU5HtkCPmwEtCGUu80",
//     authDomain: "data-115b6.firebaseapp.com",
//     databaseURL: "https://data-115b6-default-rtdb.firebaseio.com",
//     projectId: "data-115b6",
//     storageBucket: "data-115b6.appspot.com",
//     messagingSenderId: "736088408043",
//     appId: "1:736088408043:web:07080f9960ac634d10e3ae"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   export default firebase;