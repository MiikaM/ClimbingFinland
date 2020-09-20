import React from 'react'
import '../../scss/reset-password.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import ResetPasswordForm from '../ResetPasswordForm'


const ResetPassword = () => {
  return (
    <div>
      <NavHeader />
      <section className="wrapper">
        <div className="reset-wrapper">
          <h2>Reset your password</h2>
          <p className="login-small">
            Enter your new password and press the 'reset password' button to reset your password
      </p>
          <ResetPasswordForm />

          <div className="reset-footer">

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ResetPassword
