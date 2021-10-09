import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBHomLWiTGJlMOjemP1sdhh8qtWrsab-pM',
  authDomain: 'sdfc-toolkit.firebaseapp.com',
  projectId: 'sdfc-toolkit',
  storageBucket: 'sdfc-toolkit.appspot.com',
  messagingSenderId: '878509979262',
  appId: '1:878509979262:web:064b3d028a4fdb97a60a2f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
