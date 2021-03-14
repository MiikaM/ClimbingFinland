import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import FormPage2 from './formPage2'
import FormPage1 from './formPage1'
import { createUser } from '../../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import * as yup from 'yup'


const RegisterForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [page, setPage] = useState(0)

  // eslint-disable-next-line no-undef
  // const pageArray = [<FormPage1 errors={errors} />, <FormPage2 errors={errors} />]

  let wrapper = `wrapper${page + 1}`

  const handleSubmit = (data) => {
    try {
      dispatch(createUser(data))
    } catch (err) {
      console.log('Error on register submit', err.error)
    }

  }

  const validationSchema = yup.object({
    name: yup.string()
      .required('Name is required.'),
    username: yup.string()
      .required('Username required')
      .min(6, 'Minimum length is 6 characters'),
    email: yup.string()
      .email('Must be a valid email')
      .required('Email required'),
    password: yup.string()
      .required('Password required')
      .min(10, 'Password must be atleast 10 characters long'),
    passwordagain: yup.string()
      .required('Password required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    city: yup.string().required('Where do you live?'),
  })


  return (
    <div className={`${wrapper} register-wrapper`} >
      <h2>Register</h2>

      <Formik
        validateOnChange={true}
        validationSchema={validationSchema}
        initialValues={{ username: '', password: '', passwordagain: '', name: '', email: '', city: '', adminVerification: '' }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          handleSubmit(data)
          setSubmitting(false)
          history.push('/')
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form >

            { page === 0 ?
              <FormPage1 errors={errors} /> :
              <FormPage2 errors={errors} />
            }
            {
              page !== 1 ?
                null :
                <button disabled={isSubmitting} type="submit" className="submit" >Register</button>

            }
          </Form>
        )}</Formik>
      {page === 0 ?
        null :
        <button onClick={() => setPage(page - 1)} className='submit'> Back </button>}

      {page !== 0 ?
        null :
        <button onClick={() => setPage(page + 1)} className='submit'> Next </button>}


      <p className="login-small" style={{ cursor: 'pointer' }}>
        <Link to={{
          pathname: '/',
          open: true
        }}> Already have an account?</Link>
      </p>
    </div >
  )

}

export default RegisterForm
