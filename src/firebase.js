import firebase from 'firebase';
import { seedDatabase } from './seed';

const firebaseConfig = {
  apiKey: 'AIzaSyAuzQcw2YFm5AzVLEkFbue2wf0JGYJjEMY',
  authDomain: 'disneyplus-clone-28042021.firebaseapp.com',
  projectId: 'disneyplus-clone-28042021',
  storageBucket: 'disneyplus-clone-28042021.appspot.com',
  messagingSenderId: '768127765068',
  appId: '1:768127765068:web:6353973de9a6a4993282e9',
  measurementId: 'G-B9M72HFS7X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// run the seed file to add data to firebase(only ONCE!)
// seedDatabase(firebaseApp);

export { auth, provider, storage };
export default db;
