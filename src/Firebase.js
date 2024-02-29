import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




const firebaseConfig = {
    apiKey: import.meta.env['VITE_API_KEY'].slice(0, -2),
    authDomain: import.meta.env['VITE_AUTH_DOMAIN'].slice(0, -2),
    projectId: import.meta.env['VITE_PROJECT_ID'].slice(0, -2),
    storageBucket: import.meta.env['VITE_STORAGE_BUCKET'].slice(0, -2),
    messagingSenderId: import.meta.env['VITE_MESSAGINGSENDER_ID'].slice(0, -2),
    appId: import.meta.env['VITE_APP_ID'].slice(0, -2),
    measurementId: import.meta.env['VITE_MEASUREMENT_ID']
};




const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;