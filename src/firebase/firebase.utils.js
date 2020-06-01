import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDUpdL2vycOcpHO3ZVCEIKFiaLCZ-VCAGw',
  authDomain: 'cargarweyne-db.firebaseapp.com',
  databaseURL: 'https://cargarweyne-db.firebaseio.com',
  projectId: 'cargarweyne-db',
  storageBucket: 'cargarweyne-db.appspot.com',
  messagingSenderId: '292683774732',
  appId: '1:292683774732:web:1f269f45e4cdcf7a27a729',
  measurementId: 'G-KRVM35EJV9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
