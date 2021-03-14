import firebase from 'firebase/app'
import 'firebase/storage'

/**
 * Config for the firebase application.
 * Initializes the firebase application.
 */
export const firebaseConfig = {
  apiKey: "AIzaSyCVmpjoCpS53LqU26ee693vwbKwIp3-0Mg",
  authDomain: "climbingfinland-cf142.firebaseapp.com",
  databaseURL: "https://climbingfinland-cf142.firebaseio.com",
  projectId: "climbingfinland-cf142",
  storageBucket: "climbingfinland-cf142.appspot.com",
  messagingSenderId: "513581301963",
  appId: "1:513581301963:web:e50aa3799f9ae5bc4c1b4e",
  measurementId: "G-H8QRV1L13W"
};

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()

export default firebase