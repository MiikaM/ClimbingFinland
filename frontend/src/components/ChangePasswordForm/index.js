import React from 'react'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import * as yup from 'yup'

import { changePassword } from '../../reducers/userReducer'

const ChangePasswordForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const match = useRouteMatch('/:username/settings')

  const handleSubmit = (data) => {
    // dispatch(changePassword('MIquli', data))
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
    <Formik
      validateOnChange={true}
      initialValues={{ oldPassword: '', newPassword: '', newPasswordAgain: '' }}
      validationSchema={validationSchema}
      // validate={values => {
      //   const errors = {}
      //   if (values.oldpassword === '' || values.newpassword === '' || values.newpasswordagain === '') {
      //     errors.oldpassword = 'Password fields can\'t be empty'
      //   }

      //   return errors
      // }}
      // validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        handleSubmit(data)
        setSubmitting(false)
        resetForm()
        history.go(0)

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
          <pre style={{ color: 'blue' }}>{JSON.stringify(values, null, 2)}</pre>
          <pre style={{ color: 'blue' }}>{JSON.stringify(errors, null, 2)}</pre>

        </Form>
      )}</Formik >
  )
}

export default ChangePasswordForm
