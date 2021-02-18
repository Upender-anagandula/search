import * as firebasee from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyClnGU4GHFA69cmpfU5HtkCPmwEtCGUu80",
  authDomain: "data-115b6.firebaseapp.com",
  projectId: "data-115b6",
  storageBucket: "data-115b6.appspot.com",
  messagingSenderId: "736088408043",
  appId: "1:736088408043:web:07080f9960ac634d10e3ae"
};
// Initialize Firebase
const firebaseDb=firebasee.initializeApp(firebaseConfig);
  export default firebaseDb.database().ref();