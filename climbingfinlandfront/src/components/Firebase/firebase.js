import app from 'firebase/app'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const Firebase = () => {
  app.initializeApp(config)
}

export const googleLogin = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await firebase.auth().signInWithhPoup(provider)
    console.log({ user })
    return user;
  } catch (e) {
    console.log({e})
  }
  }

export const logOut = () => {
  try {
    const logOut = await firebase.auth().signOut()
    console.log('You have logged out!')
  } catch (e) {
    console.log({e})
  }
}

export default Firebase