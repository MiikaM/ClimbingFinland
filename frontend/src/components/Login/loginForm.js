import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { sendMail } from '../../services/contactServices'
import { loginUser, getUser } from '../../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

const LoginForm = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session)

  const handleSubmit = (data) => {
    console.log({ data })
    dispatch(loginUser(data))
  }

  const validationSchema = yup.object({
    username: yup.string().required('Required'),
    password: yup.string()
      .required('Password required')
  })

  if (user) console.log({ user })


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
