import React from 'react'
import { Formik, Field, Form } from 'formik'
import { forgotPassword } from '../../services/contactServices'
import * as yup from 'yup'

const ForgotPasswordForm = () => {

  const handleSubmit = async (data) => {
    console.log({ data })

    try {
      const response = await forgotPassword(data)
      console.log({ response })
    } catch (err) {
      console.log({ err })
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
