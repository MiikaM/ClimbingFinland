import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

const ChangePasswordForm = () => {

  
  const validationSchema = yup.object({
    oldppassword: yup.string().required().min(10),
    newpassword: yup.string().required().min(10),
    newpasswordagain: yup.string().required().min(10)
  })
  return (
    <Formik
      initialValues={{ oldpassword: '', newpassword: '', newpasswordagain: '' }}
      validationSchema={validationSchema}
      // validate={values => {
      //   const errors = {}
      //   if (values.oldpassword === '' || values.newpassword === '' || values.newpasswordagain === '') {
      //     errors.oldpassword = 'Password fields can\'t be empty'
      //   }

      //   return errors
      // }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        console.log({ data })
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <Form className="form">
          <label for="oldpassword">Old password</label><br />
          <div>
            <Field name='oldpassword' value={values.oldpassword} type='password' />
          </div>

          <label for="newpassword">New password</label><br />
          <div>
            <Field name='newpassword' value={values.newpassword} type='password' />
          </div>

          <label for="newpasswordagain">New password again</label><br />
          <div>
            <Field type="password" name='newpasswordagain' value={values.newpasswordagain} />
          </div>
          <button disabled={isSubmitting} type="submit" className="-submit" >Change password</button>
          <pre style={{ color: 'blue' }}>{JSON.stringify(values, null, 2)}</pre>
          <pre style={{ color: 'blue' }}>{JSON.stringify(errors, null, 2)}</pre>

        </Form>
      )}</Formik >
  )
}

export default ChangePasswordForm
