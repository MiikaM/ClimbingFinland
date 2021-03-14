import React from 'react'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import * as yup from 'yup'

import { changePassword } from '../../reducers/userReducer'
import { changeNotification } from '../../reducers/notificationReducer'

/**
 * The form for password change and the validation for it.
 * @param {*} user user who's password is to be changed. 
 */
const ChangePasswordForm = ({ user }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    if (user) {
      dispatch(changePassword(user.username, data)).then(() => {
        setTimeout(() => {
        }, 5000)
        history.go(0)
      }
      )
      dispatch(changeNotification({title:'Done', message: 'You\'r password has been changed!'}))
    }
  }

  const validationSchema = yup.object({
    oldPassword: yup.string().required('Required'),
    newPassword: yup.string()
      .required('Password required')
      .min(10, 'Password must be atleast 10 characters long'),
    newPasswordAgain: yup.string()
      .required('Password required')
      .oneOf([yup.ref('newPassword')], 'Passwords must match'),
  })

  return (
    <div className="change-password wrap">
      <div className="align " >
        <Formik
          validateOnChange={true}
          initialValues={{ oldPassword: '', newPassword: '', newPasswordAgain: '' }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            handleSubmit(data)
            setSubmitting(false)
            resetForm()

          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form className="form">
              <label htmlFor="oldPassword">Old password</label><br />
              <div>
                <Field name='oldPassword' value={values.oldPassword} type='password' />
              </div>
              {errors.oldPassword ? <div className='form-error-message'>{errors.oldPassword}</div> : null}

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

              <button disabled={isSubmitting} type="submit" className="-submit" >Change password</button>

            </Form>
          )}</Formik >
      </div>
    </div>
  )
}

export default ChangePasswordForm
