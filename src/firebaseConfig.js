import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCmeIKKeenGLp_zjyBYnBXBR5XUYctfWpc",
    authDomain: "reduxapp-512e4.firebaseapp.com",
    projectId: "reduxapp-512e4",
    storageBucket: "reduxapp-512e4.appspot.com",
    messagingSenderId: "706181168718",
    appId: "1:706181168718:web:55375cc1b1e02097dc8d1f"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;

