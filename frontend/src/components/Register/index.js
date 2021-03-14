import React from 'react'
import '../../scss/register-form.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import RegisterForm from './registerForm'

const Register = () => {
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
