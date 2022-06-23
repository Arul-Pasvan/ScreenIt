// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiUSLWkVqgeHdlo3FzMODiX3lP6WBquR0",
  authDomain: "fir-c13ca.firebaseapp.com",
  projectId: "fir-c13ca",
  storageBucket: "fir-c13ca.appspot.com",
  messagingSenderId: "704744809112",
  appId: "1:704744809112:web:c92bfdf7b986e8464ee6ed",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// const auth = firebase.auth();

export { firebase, db };
