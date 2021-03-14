import React from 'react'
import { useDispatch } from 'react-redux'

import { Formik, Field, Form } from 'formik'
import { resetPassword } from '../../services/contactServices'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { changeNotification } from '../../reducers/notificationReducer'
const ResetPasswordForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = async (data) => {

    try {
      await resetPassword(data)
      dispatch(changeNotification({title:'Done', message: 'Your password has been reset.'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Oh no there was an error while reseting your password ${err.response.data.error}`}, 'error'))
    }
  }

  const validationSchema = yup.object({
    newPassword: yup.string()
      .required('Password required')
      .min(10, 'Password must be atleast 10 characters long'),
    newPasswordAgain: yup.string()
      .required('Password required')
      .oneOf([yup.ref('newPassword')], 'Passwords must be the same'),
  })



  return (
    <Formik
      initialValues={{ newPassword: '', newPasswordAgain: '' }}
      validateOnChange={true}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        handleSubmit(data)
        setSubmitting(false)
        resetForm()
        history.push('/')
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form >
          <label htmlFor="newPassword">New password</label><br />
          <div>
            <Field name='newPassword' value={values.newPassword} type='password' />
          </div>
          {errors.newPassword ? <div className='form-error-message'>{errors.newPassword}</div> : null}


          <label htmlFor="newPasswordAgain">New password again</label><br />
          <div>
            <Field type="password" name='newPasswordAgain' value={values.newPasswordAgain} />
          </div>
          {errors.newPasswordAgain ? <div className='form-error-message'>{errors.newPasswordAgain}</div> : null}

          <button disabled={isSubmitting} type="submit" className="submit" >Reset password</button>
        </Form>

      )}</Formik>
  )
}

export default ResetPasswordForm
