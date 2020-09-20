import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import googleLogin from '../services/loginService'

const Auth = {
  signInFlow: 'popup',
  signInSuccessUrl: 'http://localhost:3000/',
  signinOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: false
  }
}


export default Auth