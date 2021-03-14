import React from 'react'
import { Formik, Field, Form } from 'formik'
import { loginUser } from '../../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

/**
 * The form for logging in and the validation for it.
 * @param {*} props 
 */
const LoginForm = (props) => {
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    dispatch(loginUser(data))
  }

  const validationSchema = yup.object({
    username: yup.string().required('Required'),
    password: yup.string()
      .required('Password required')
  })



  return (

    <Formik
      validateOnChange={true}
      validationSchema={validationSchema}
      initialValues={{ username: '', password: '' }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        handleSubmit(data)
        setSubmitting(false)
        resetForm()
        // history.go(0)
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form >
          <label htmlFor="username">Username</label><br />
          <div>
            <Field name='username' value={values.username} type='input' />
          </div>
          {errors.username ? <div className='form-error-message'>{errors.username}</div> : null}

          <label htmlFor="password">Password</label><br />
          <div>
            <Field name='password' value={values.password} type='password' />
          </div>
          {errors.password ? <div className='form-error-message'>{errors.password}</div> : null}

          <button disabled={isSubmitting} type="submit" className="submit" >Log in</button>
        </Form>

      )}</Formik>
  )
}

export default LoginForm
