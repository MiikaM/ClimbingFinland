import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {
  Switch, Route
} from 'react-router-dom'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Container } from '@material-ui/core'

import Places from './components/Places'
import HomePage from './components/HomePage'

import ChosenPlace from './components/ChosenPlace'
import CommentForm from './components/CommentForm'
import { initializePlaces } from './reducers/placeReducer'
import { initializeComments } from './reducers/commentReducer';
import { initializeUsers } from './reducers/userReducer';
import { googleLoginUser } from './reducers/loginReducer'
import { firebaseConfig } from './firebase'
import ImageForm from './components/ImageForm'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword';
import UserPage from './components/UserPage';
import UserSettings from './components/UserSettings';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';


const App = () => {
  // const dispatch = useDispatch()
  // const [isSignedIn, setIsSignedIn] = useState(false)
  // const auth = {
  //   signInFlow: 'popup',
  //   signinOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //   ],
  //   callbacks: {
  //     signInSuccessWithAuthResult: () => false
  //   }
  // }

  // if (!firebase.apps.length) {
  //   console.log(process.env.AUTHID, process.env.CLIENTID)
  //   firebase.initializeApp(firebaseConfig)
  // }

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(async user => {
  //     if (user) {
  //       const id_token = await firebase.auth().currentUser.getIdToken()
  //       console.log({ id_token })
  //       dispatch(googleLoginUser(id_token))
  //       setIsSignedIn(!!user)
  //     }
  //   })

  // }, [])

  // useEffect(() => {
  //   dispatch(initializePlaces())
  //   dispatch(initializeComments())
  //   dispatch(initializeUsers())

  // }, [dispatch])

  return (
    <div>
      {/* {isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button> </span>) :
          <StyledFirebaseAuth
            uiConfig={auth}
            firebaseAuth={firebase.auth()} />
        } */}
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/upload'>
          <ImageForm />
        </Route>
        <Route path='/place'>
          <ChosenPlace />
        </Route>
        <Route path='/comments'>
          <CommentForm />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <RegisterForm />
        </Route>
        <Route path='/reset-password'>
          <ResetPassword />
        </Route>
        <Route path='/forgot'>
          <ForgotPassword />
        </Route>
        <Route path='/user-page'>
          <UserPage />
        </Route>
        <Route path='/user-settings'>
          <UserSettings />
        </Route>
        <Route path='/nav'>
          <NavHeader />
        </Route>
        <Route path='/footer'>
          <Footer />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  )
}

export default App
