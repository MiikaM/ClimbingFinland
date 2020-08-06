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
import { googleLoginUser } from './reducers/loginReducer'

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
      signInSuccessWithAuthResult: () => false
    }
  }

  if (!firebase.apps.length) {
    console.log(process.env.AUTHID, process.env.CLIENTID)
    firebase.initializeApp({
      apiKey: 'AIzaSyCVmpjoCpS53LqU26ee693vwbKwIp3-0Mg',
      authDomain: 'climbingfinland-cf142.web.app'
    })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const id_token = user.getIdToken()
        console.log({ user })
        dispatch(googleLoginUser(id_token))
        setIsSignedIn(!!user)
      }
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
