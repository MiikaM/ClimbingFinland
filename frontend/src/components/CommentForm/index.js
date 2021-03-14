import React from 'react'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../reducers/commentReducer'
import '../../scss/comment.scss'
import * as yup from 'yup'

/**
 * The form for commenting.
 * If not logged in you can't comment
 * @param {*} place_id The id of the place where the comments are to be designated. 
 */
const CommentForm = ({ place_id }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session)

  const handleSubmit = (data) => {
    dispatch(addComment(data, place_id))
  }
  const addDefaultSrc = (e) => {
    e.target.src = `${user.avatar}`
  }

  const validationSchema = yup.object({
    comment: yup.string().min(2, 'Message should be atleast 2 characters long.').required('Required'),
  })

  return (
    <section className='cmform-wrapper' >
      <div className='wrapper'>
        {
          user?.session ?
            <h3 className='placeholder'>
              You must be logged in to comment!
      </h3> :
            <div className='cmbox-wrapper'>
              <img onError={addDefaultSrc} src={`../${user.avatar}`} alt='profile' />
              <Formik
                initialValues={{ comment: '' }}
                validateOnChange={true}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  setSubmitting(true)
                  handleSubmit(data)
                  setSubmitting(false)
                  resetForm()
                }}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit} className='cmform'>
                    <Field component="textarea" name='comment' type='input' placeholder='your comment' multiline='true' rows={1} />
                    <button type='submit' className="submit cmbox-button" > Comment</button>
                  </form>
                )}</Formik>
            </div>
        }


      </div>
    </section>
  )
}

export default CommentForm