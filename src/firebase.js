import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBIUn3T4Ema4ZcnwmUL9dARZw3NhQiKZuA',
  authDomain: 'mont-up.firebaseapp.com',
  databaseURL: 'https://mont-up.firebaseio.com',
  projectId: 'mont-up',
  storageBucket: 'mont-up.appspot.com',
  messagingSenderId: '183393787791',
  appId: '1:183393787791:web:7a424630a34ff426e5f5fa',
  measurementId: 'G-TD4E228JZC'
};

firebase.initializeApp(config);

export const app = firebase.app();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const pathReference = storage;
