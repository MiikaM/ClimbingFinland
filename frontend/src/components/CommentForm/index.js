import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Formik, Field } from 'formik'

const CommentForm = () => {
  return (
    <Formik initialValues={{ comment: '' }} onSubmit={(data, { resetForm }) => {
      console.log(data)
      resetForm()
    }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name='comment' type='input' placeholder='your comment' multiline rows={3} as={TextField}/>
          <div>
            <Button type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}</Formik>
  )
}

export default CommentForm