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
        <form onSubmit={handleSubmit} className='cmform'>
          <Field component="textarea" name='comment' type='input' placeholder='your comment' multiline rows={3} />
          <div>
            <button type='submit' className="submit" > Comment</button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}</Formik>

      //      {/* <div className="comment-form">
      //   <label for="comment">
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