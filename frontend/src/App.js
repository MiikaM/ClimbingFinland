import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
import { firebaseConfig } from './firebase'
import ImageForm from './components/ImageForm'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword';
import UserPage from './components/UserPage';
import UserSettings from './components/UserSettings';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import { googleLoginUser } from './reducers/loginReducer'

import { getUser } from './reducers/loginReducer'
import Modal from './components/Modal';


/**
 * Initializing the App => Places & Active user (Google or Onsite user)
 * Controller for site navigation
 */
const App = () => {
  const dispatch = useDispatch()
  // const loggedIn = useSelector(state => state.session


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  useEffect(() => {
    dispatch(initializePlaces())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUser())
  }, [])

  // useEffect(() => {
  //   try {
  //     firebase.auth().onAuthStateChanged(async user => {

  //       if (user) {
  //         console.log({ user })

  //         const id_token = await firebase.auth().currentUser.getIdToken()
  //         console.log({ id_token })
  //         if (!!id_token) {
  //           dispatch(googleLoginUser(id_token))
  //         }
  //       }
  //     })
  //   } catch (err) {
  //     console.log('error is', err.message)
  //   }
  // }, [])






  return (
    <div>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/upload' component={ImageForm} />
        <Route exact path='/gym/:place_name' component={ChosenPlace} />
        {/* <Route path='/comments' component={CommentForm} /> */}
        <Route path='/login' component={Modal} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/reset_password' component={ResetPassword} />
        <Route exact path='/forgot' component={ForgotPassword} />
        <Route exact path='/:username/settings' component={UserSettings} />
        <Route exact path='/:username' component={UserPage} />


        {/* <Route path='/nav' component={NavHeader} />

        <Route path='/footer' component={Footer} /> */}

      </Switch>
    </div>
  )
}

export default App
