import React from 'react'
import { Formik, Field, Form, FieldArray } from 'formik'
import TagItem from '../TagItem'

const SettingsForm = () => {

  const tagArray = ['Boulder', 'Lead', 'Gym', 'Picnic']

  return (
    <Formik
      initialValues={{ firstname: '', tags: [ ...tagArray ] }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        console.log({ data })
        setSubmitting(false)
        resetForm()
      }}
    >
      {({errors, values, isSubmitting }) => (
        <Form action="" className="account-settings-form form">

          <label for="username">Username</label><br />
          <div>
            <Field name='username' value={values.username} type='input' />
          </div>

          <div className="name">
            <label for="firstname">First name</label><br />
            <div>
              <Field name='firstname' value={values.firstname} type='input' />
            </div>
            <label for="lastname">Last name</label><br />
            <div>
              <Field name='lastname' value={values.lastname} type='input' />
            </div>
          </div>

          <label for="email">Email</label><br />
          <div>
            <Field name='email' value={values.email} type='input' />
          </div>

          <label for="city">City</label><br />
          <div>
            <Field name='city' value={values.city} type='input' />
          </div>

          <div className="likes">
            <label for="likes">Likes</label><br />
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
          </FieldArray>
          <button disabled={isSubmitting} type="submit" className="submit" >Save</button>
          <pre style={{ color: 'blue' }}>{JSON.stringify(values, null, 2)}</pre>
          <pre style={{ color: 'blue' }}>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}</Formik>
  )
}

export default SettingsForm
