import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBsXUr8jxi3ZRKFpn8Siz9BtrJOEXXcvgo',
  authDomain: 'resto-arete.firebaseapp.com',
  databaseURL: 'https://resto-arete.firebaseio.com',
  projectId: 'resto-arete',
  storageBucket: 'resto-arete.appspot.com',
  messagingSenderId: '1059534490377',
  appId: '1:1059534490377:web:c0a8f5762ef0aebf9921d8',
  measurementId: 'G-X2TBY2KNF6',
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
