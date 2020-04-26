import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCZDA0RxW9fkcFWR32gx5aHF5su_trzs_Q",
  authDomain: "blog-project-db.firebaseapp.com",
  databaseURL: "https://blog-project-db.firebaseio.com",
  projectId: "blog-project-db",
  storageBucket: "blog-project-db.appspot.com",
  messagingSenderId: "46561703521",
  appId: "1:46561703521:web:c92b465f82a1c3ade75c20",
  measurementId: "G-MQ15VLNV8P",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.analytics();

export default firebase;
