import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../reducers/commentReducer'

const CommentForm = ({ place_id }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session)

  const handleSubmit = (data) => {
    console.log({ data, place_id })
    dispatch(addComment(data, place_id))
  }

  if (!user || user.length < 1) {
    return (
      <div>
        You must be logged in to comment!
      </div>
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
            <div>
              <button type='submit' className="submit" > Comment</button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}</Formik>

      //      {/* <div className="comment-form">
      //   <label htmlFor="comment">
      //     Your comment
      //   </label>
      //   <form action="" className='cmform' >

      //     <textarea name="comment" id="" cols="60" rows="2"></textarea>
      //     <input type="submit" className="submit" value="Comment" />
      //   </form>
      // </div>  */}
    )
}

export default CommentForm