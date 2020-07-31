import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {
  Switch, Route
} from 'react-router-dom'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Container } from '@material-ui/core'

import Places from './components/Places'
import ChosenPlace from './components/ChosenPlace'
import CommentForm from './components/CommentForm'
import { initializePlaces } from './reducers/placeReducer'
import { initializeComments } from './reducers/commentReducer';

const App = () => {
  const dispatch = useDispatch()
  const [isSignedIn, setIsSignedIn] = useState(false)
  const auth = {
    signInFlow: 'popup',
    signinOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.AUTHID,
      authDomain: process.env.CLIENTID
    })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log({ user })
      setIsSignedIn(!!user)
    })

  }, [])

  useEffect(() => {
    dispatch(initializePlaces())
    dispatch(initializeComments())
  }, [dispatch])

  return (
    <Container>
      <div>
        {isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button> </span>) :
          <StyledFirebaseAuth
            uiConfig={auth}
            firebaseAuth={firebase.auth()} />
        }
        {/* <NavBar /> */}
        <Switch>
          <Route exact path='/'>
            <Places />
          </Route>
          <Route path='/places/:id'>
            <ChosenPlace />
          </Route>
          <Route path='/comments'>
            <CommentForm />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Container>
  )
}

export default App
