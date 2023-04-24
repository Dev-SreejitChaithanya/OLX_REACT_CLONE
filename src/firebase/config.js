import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase-storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGFuJB8AdcNKU3nnq78IHbgfFW6dtWJ3c",
  authDomain: "fir-351e1.firebaseapp.com",
  projectId: "fir-351e1",
  storageBucket: "fir-351e1.appspot.com",
  messagingSenderId: "138605248540",
  appId: "1:138605248540:web:e7f27dbd7c1bb2a6f85fd9",
  measurementId: "G-HE9MKF6T1P"
};

export default  firebase.initializeApp(firebaseConfig);
