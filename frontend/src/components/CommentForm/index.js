import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../reducers/commentReducer'
import '../../scss/comment.scss'

const CommentForm = ({ place_id }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session)

  const handleSubmit = (data) => {
    console.log({ data, place_id })
    dispatch(addComment(data, place_id))
  }

  if (!user ) {
    return (
      <h2 className='placeholder'>
        You must be logged in to comment!
      </h2>
    )
  }

  return (
    <Formik initialValues={{ comment: '' }} onSubmit={(data, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      handleSubmit(data)
      setSubmitting(false)
      resetForm()
    }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className='cmform'>
          <Field component="textarea" name='comment' type='input' placeholder='your comment' multiline='true' rows={3} />
            <button type='submit' className="submit" > Comment</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}</Formik>
  )
}

export default CommentForm