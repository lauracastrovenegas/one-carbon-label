import firebase from 'firebase/app';
import 'firebase/firestore';
 
const config = {
  apiKey: "AIzaSyCrcZwWh8zFK_zNNjsH_6OXpgLoEK9PQ0E",
  authDomain: "onecarbonlabel.firebaseapp.com",
  databaseURL: "https://onecarbonlabel.firebaseio.com",
  projectId: "onecarbonlabel",
  storageBucket: "onecarbonlabel.appspot.com",
  messagingSenderId: "696822502",
  appId: "1:696822502:web:2f285699604f1b20b16927",
  measurementId: "G-V9Q7VEX496"
};
 
firebase.initializeApp(config);
 
export default firebase;

