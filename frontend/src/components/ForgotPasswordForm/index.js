import React from 'react'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'

import { forgotPassword } from '../../services/contactServices'
import * as yup from 'yup'
import { changeNotification } from '../../reducers/notificationReducer'
/**
 * The form for forgot password and the validation for it.
 */
const ForgotPasswordForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (data) => {
    try {
      await forgotPassword(data)
      dispatch(changeNotification({title:'Done', message: 'A reset link has been sent to your email.'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Oh no something went wrong: ${err.response.data.error}`}, 'error'))
    }
  }

  const validationSchema = yup.object({
    email: yup.string().email('Must be a valid email').required('Required'),

  })

  return (
    <Formik
      validateOnChange={true}
      validationSchema={validationSchema}
      initialValues={{ email: '' }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        handleSubmit(data)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form >
          <label htmlFor="email">Email</label><br />
          <div>
            <Field name='email' value={values.email} type='input' />
          </div>
          {errors.email ? <div className='form-error-message'>{errors.email}</div> : null}

          <button disabled={isSubmitting} type="submit" className="submit" >Send</button>
        </Form>

      )}</Formik>
  )
}

export default ForgotPasswordForm
