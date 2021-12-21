// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBWvW5pe0-q1NfkJa3aNmVJXIF7Y2xn4rM',
  authDomain: 'house-marketplace-app-d9594.firebaseapp.com',
  projectId: 'house-marketplace-app-d9594',
  storageBucket: 'house-marketplace-app-d9594.appspot.com',
  messagingSenderId: '1001690634663',
  appId: '1:1001690634663:web:fdca1d35587f598093fe82',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
