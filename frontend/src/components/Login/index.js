import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Auth from '../../firebase/auth'
import { googleLoginUser } from '../..//reducers/loginReducer'

import '../../scss/login.scss'
import LoginPic from '../../images/layout_testit/roya-ann-miller-G2QYE9czCEw-unsplash.jpg'
import LoginForm from './loginForm'
import CloseSVG from '../../images/close.svg'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


const Login = ({ close }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session)

  if (user.length > 0) {
    return null
  }


  return (
    <section>
      <div className="wrapper">
        <div className="login">
          <div className="login-image">
            <img src={LoginPic} alt="" />
          </div>

          <div className="login-container">
            <div className="login-header">
              <h2>Log in</h2>
              <img src={CloseSVG} alt="" onClick={close} />
            </div>

            <LoginForm />
            <StyledFirebaseAuth
              uiConfig={Auth}
              firebaseAuth={firebase.auth()} />


            <p className="login-small" onClick={() => history.push('/forgot')} style={{ cursor: 'pointer' }}>
              Forgot password?
            </p>

            <p className="login-small" onClick={() => history.push('/register')} style={{ cursor: 'pointer' }}>
              Don't have an account?
          </p>


          </div>
        </div>
      </div>
    </section >
  )
}

export default Login
