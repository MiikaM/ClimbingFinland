import firebase from 'firebase'

/**
 * Auth for the firebase googleauthprovider.
 * https://climbing-finland-v2.herokuapp.com/
 */
const Auth = {
  signInFlow: 'popup',
  signInSuccessUrl: 'https://climbing-finland-v2.herokuapp.com/',
  signinOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: false
  }
}


export default Auth