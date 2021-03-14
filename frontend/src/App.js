import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
  Switch, Route
} from 'react-router-dom'


import HomePage from './components/HomePage'

import ChosenPlace from './components/ChosenPlace'
import { initializePlaces } from './reducers/placeReducer'

import { auth } from './firebase'

import Register from './components/Register'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword';
import UserSettings from './components/UserSettings';

import { googleLoginUser } from './reducers/loginReducer'
import Notification from './components/Notification'
import {changeNotification} from './reducers/notificationReducer'

import { getUser } from './reducers/loginReducer'
import Modal from './components/Modal';


/**
 * Initializing the App => Places & Active user (Google or Onsite user)
 * Controller for site navigation
 */
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializePlaces())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged(async user => {
        if (user) {
          const id_token = await user.getIdToken()
          if (!!id_token) {
            dispatch(googleLoginUser(id_token))
          }
        }
      })
      return unsubscribe
    } catch (err) {
      dispatch(changeNotification({title:'Error', message: `Something went wrong when logging in: ${err.message}`}))
    }
  }, [dispatch])



  return (
    <div>
      <Notification />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/upload' component={ImageForm} /> */}
        <Route exact path='/gym/:place_name' component={ChosenPlace} />
        {/* <Route path='/comments' component={CommentForm} /> */}
        <Route path='/login' component={Modal} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/reset_password' component={ResetPassword} />
        <Route exact path='/forgot' component={ForgotPassword} />
        <Route exact path='/:username/settings' component={UserSettings} />
        {/* <Route exact path='/:username' component={UserPage} /> */}


        {/* <Route path='/nav' component={NavHeader} />

        <Route path='/footer' component={Footer} /> */}

      </Switch>
    </div>
  )
}

export default App
