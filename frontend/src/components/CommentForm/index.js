import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../reducers/commentReducer'
import ProfilePic from '../../images/profile_testit/chad-madden-8mCMQSq41gQ-unsplash.jpg'
import '../../scss/comment.scss'

const CommentForm = ({ place_id }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session)

  const handleSubmit = (data) => {
    console.log({ data, place_id })
    dispatch(addComment(data, place_id))
  }

  return (
    <section className='cmform-wrapper' >
      <div className='wrapper'>
        {
          !user ?
            <h3 className='placeholder'>
              You must be logged in to comment!
      </h3> :
            <div className='cmbox-wrapper'>
              <img src={ProfilePic} alt='profile' />
              <Formik initialValues={{ comment: '' }} onSubmit={(data, { setSubmitting, resetForm }) => {
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
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                  </form>
                )}</Formik>
            </div>
        }


      </div>
    </section>
  )
}

export default CommentForm