import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDqZkeJXA4tt8Hg7miz3Be5B4VdABejJ9k",
  authDomain: "lunch-74219.firebaseapp.com",
  databaseURL: "https://lunch-74219.firebaseio.com",
  projectId: "lunch-74219",
  storageBucket: "lunch-74219.appspot.com",
  messagingSenderId: "756457148640"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
