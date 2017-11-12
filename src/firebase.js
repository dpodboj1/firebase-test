import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCIm7_J3tdiIKjOB4JOsBSZZL_zpZRi7CI',
  authDomain: 'fir-and-react-test-31b9d.firebaseapp.com',
  databaseURL: 'https://fir-and-react-test-31b9d.firebaseio.com',
  projectId: 'fir-and-react-test-31b9d',
  storageBucket: 'fir-and-react-test-31b9d.appspot.com',
  messagingSenderId: '351251472781',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
