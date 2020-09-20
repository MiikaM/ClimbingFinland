import React from 'react'
import '../../scss/register-form.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import RegisterForm from './registerForm'
import { Link, useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  return (
    <div>
      <NavHeader />

      <section className="wrapper">
        <RegisterForm />
        
      </section>
      <Footer />
    </div>
  )
}

export default Register
