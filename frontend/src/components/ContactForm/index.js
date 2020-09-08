import React from 'react'
import { Formik, Field, Form } from 'formik'

const ContactForm = () => {
  return (

    <Formik initialValues={{ name: '', email: '', message: '' }} onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      console.log({ data })
      setSubmitting(false)
      resetForm()
    }}
    >
      {({ values, isSubmitting }) => (
        <Form  className="footer-form">
          <label for="name">Name</label><br />
          <div>
            <Field name='name' value={values.name} type='input' />
          </div>
          <label for="email">Email</label><br />
          <div>
            <Field name='email' value={values.email} type='input' />
          </div>
          <label for="name">Message</label><br />
          <div>
            <Field component='textarea' name='message' value={values.message} placeholder='message...' multiline='true' rows={3} /> 
          </div>
          <button disabled={isSubmitting} type="submit" className="contact-submit" >Send</button>
        </Form>

      )}</Formik>
  )
}

export default ContactForm
