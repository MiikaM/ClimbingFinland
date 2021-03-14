import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form } from 'formik'
import { sendMail } from '../../services/contactServices'
import * as yup from 'yup'
import { changeNotification } from '../../reducers/notificationReducer'

/**
 * The form for the contact form and the validation for it.
 */
const ContactForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (data) => {
    try {
      await sendMail(data)
      dispatch(changeNotification({title:'Done', message: 'Thank you for contacting us. Your email has been sent'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Oh no an error has occured ${err.response.data.error}`}, 'error'))
    }
  }

  const validationSchema = yup.object({
    name: yup.string().required('Name is required.'),
    email: yup.string().email('Must be a valid email').required('Required'),
    message: yup.string().required().min(10, 'Message should be atleast 10 characters long.'),
  })


  return (

    <Formik
      validateOnChange={true}
      validationSchema={validationSchema}
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        handleSubmit(data)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form className="footer-form">
          <label htmlFor="name">Name</label><br />
          <div>
            <Field name='name' value={values.name} type='input' />
          </div>
          {errors.name ? <div className='form-error-message'>{errors.name}</div> : null}

          <label htmlFor="email">Email</label><br />
          <div>
            <Field name='email' value={values.email} type='input' />
          </div>
          {errors.email ? <div className='form-error-message'>{errors.email}</div> : null}

          <label htmlFor="name">Message</label><br />
          <div>
            <Field component='textarea' name='message' value={values.message} placeholder='message...' multiline='true' rows={3} />
          </div>
          {errors.message ? <div className='form-error-message'>{errors.message}</div> : null}

          <button disabled={isSubmitting} type="submit" className="contact-submit" >Send</button>
        </Form>

      )}</Formik >
  )
}

export default ContactForm
