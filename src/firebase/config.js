import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBckiCpbLKgPcXQZXy3LANjUuwHeH51mkU",
  authDomain: "actividad-10-b5049.firebaseapp.com",
  databaseURL: "https://actividad-10-b5049-default-rtdb.firebaseio.com",
  projectId: "actividad-10-b5049",
  storageBucket: "actividad-10-b5049.appspot.com",
  messagingSenderId: "45137169149",
  appId: "1:45137169149:web:28fec928349d102f9f0c94"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
