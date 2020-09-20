import React from 'react'
import { Field } from 'formik'


const FormPage2 = ({ errors }) => {
  return (
    <>
      <label htmlFor="name">Name</label><br />
      <div>
        <Field name='name' type='input' />
      </div>
      {errors.name ? <div className='form-error-message'>{errors.name}</div> : null}

      <label htmlFor="email">Email</label><br />
      <div>
        <Field name='email' type='input' />
      </div>
      {errors.email ? <div className='form-error-message'>{errors.email}</div> : null}

      <label htmlFor="city">City</label><br />
      <div>
        <Field name='city' type='input' />
      </div>
      {errors.city ? <div className='form-error-message'>{errors.city}</div> : null}
    </>
  )
}

export default FormPage2
