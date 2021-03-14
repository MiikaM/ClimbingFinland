import React from 'react'
import { Formik, Field, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { updateUserInfo } from '../../reducers/userReducer'
import * as yup from 'yup'

const SettingsForm = ({ user }) => {
  const dispatch = useDispatch()

  const handleSubmit = async (data) => {
    if (user) {
      dispatch(updateUserInfo(user.username, data))
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
    city: yup.string().required('Where do you live?'),
  })

  return (
    <div className="account-settings wrap ">
      <div className="align" >

        <h2>Account</h2>
        <Formik
          validateOnChange={true}
          validationSchema={validationSchema}
          initialValues={user}
          enableReinitialize
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            handleSubmit(data)
            setSubmitting(false)
            resetForm()

          }}
        >
          {({ errors, values, isSubmitting, handleChange }) => (
            <Form action="" className="account-settings-form form">

              <label htmlFor="name">Name</label><br />
              <div>
                <Field name='name' value={values.name} type='input' onChange={handleChange} />
              </div>
              {errors.name ? <div className='form-error-message'>{errors.name}</div> : null}

              {values.type === 'ThirdPartyUser' ? null : (
                <div>
                  <label htmlFor="email">Email</label><br />
                  <div>
                    <Field name='email' value={values.email} type='email' onChange={handleChange} />
                  </div>
                  {errors.email ? <div className='form-error-message'>{errors.email}</div> : null}
                </div>
              )}


              <label htmlFor="city">City</label><br />
              <div>
                <Field name='city' value={values.city} type='input' onChange={handleChange} />
              </div>
              {errors.city ? <div className='form-error-message'>{errors.city}</div> : null}

              {/* <div className="likes">
            <label htmlFor="likes">Likes</label><br />
            <button type="button">+</button>
          </div>

          <FieldArray name="tags">
            {arrayHelpers => (
              <div>
                <ul className="like-list">
                  {values.tags.map(tag => (
                    <TagItem key={tag} tag={tag} />
                  ))}
                </ul>
              </div>
            )}
          </FieldArray> */}
              <button disabled={isSubmitting} type="submit" className="submit" >Save</button>

            </Form>
          )}</Formik >
      </div>
    </div>
  )
}

export default SettingsForm
