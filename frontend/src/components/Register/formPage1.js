import React from 'react'
import { Field } from 'formik'


const FormPage1 = ({ errors }) => {
  return (
    <>
      <label htmlFor="username">Username*</label><br />
      <div>
        <Field name='username' type='input' />
      </div>
      {errors.username ? <div className='form-error-message'>{errors.username}</div> : null}

      <label htmlFor="password">Password*</label><br />
      <div>
        <Field name='password' type='password' />
      </div>
      {errors.password ? <div className='form-error-message'>{errors.password}</div> : null}

      <label htmlFor="passwordagain">Confirm Password*</label><br />
      <div>
        <Field name='passwordagain' type='password' />
      </div>
      {errors.passwordagain ? <div className='form-error-message'>{errors.passwordagain}</div> : null}

      <label htmlFor="adminVerification">Admin verification</label><br />
      <div>
        <Field name='adminVerification' type='password' />
      </div>
      {errors.adminVerification ? <div className='form-error-message'>{errors.adminVerification}</div> : null}
    </>
  )
}

export default FormPage1
