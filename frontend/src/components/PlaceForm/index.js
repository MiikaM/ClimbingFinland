// import React from 'react'
// import { Formik, Field, Form, FieldArray } from 'formik'
// import TagItem from '../TagItem'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory, useRouteMatch } from 'react-router-dom'
// import { updateUserInfo } from '../../reducers/userReducer'
// import * as yup from 'yup'

// const SettingsForm = ({ user }) => {
//   const history = useHistory()
//   const dispatch = useDispatch()
//   const match = useRouteMatch('/:username/settings')
//   const tagArray = ['Boulder', 'Lead', 'Gym', 'Picnic']

//   const handleSubmit = async (data) => {
//     console.log({ data })
//     if (user) {

//       dispatch(updateUserInfo(user.username, data)).then(() => {
//         history.go(0)
//       })
//     }
//   }

//   const validationSchema = yup.object({
//     name: yup.string()
//       .required('Name is required.'),
//     username: yup.string()
//       .required('Username required')
//       .min(6, 'Minimum length is 6 characters'),
//     email: yup.string()
//       .email('Must be a valid email')
//       .required('Email required'),
//     city: yup.string().required('Where do you live?'),
//   })

//   return (
//     <Formik
//       validateOnChange={true}
//       validationSchema={validationSchema}
//       initialValues={user}
//       enableReinitialize
//       onSubmit={(data, { setSubmitting, resetForm }) => {
//         setSubmitting(true)
//         handleSubmit(data)
//         setSubmitting(false)
//         resetForm()

//       }}
//     >
//       {({ errors, values, isSubmitting }) => (
//         <Form action="" className="account-settings-form form">

//           <label htmlFor="username">Username</label><br />
//           <div>
//             <Field name='username' value={values.username} type='input' />
//           </div>
//           {errors.username ? <div className='form-error-message'>{errors.username}</div> : null}

//           <label htmlFor="name">Name</label><br />
//           <div>
//             <Field name='name' value={values.name} type='input' />
//           </div>
//           {errors.name ? <div className='form-error-message'>{errors.name}</div> : null}

//           <label htmlFor="email">Email</label><br />
//           <div>
//             <Field name='email' value={values.email} type='input' />
//           </div>
//           {errors.email ? <div className='form-error-message'>{errors.email}</div> : null}

//           <label htmlFor="city">City</label><br />
//           <div>
//             <Field name='city' value={values.city} type='input' />
//           </div>
//           {errors.city ? <div className='form-error-message'>{errors.city}</div> : null}


//           <button disabled={isSubmitting} type="submit" className="submit" >Save</button>
//           <pre style={{ color: 'blue' }}>{JSON.stringify(values, null, 2)}</pre>
//           <pre style={{ color: 'blue' }}>{JSON.stringify(errors, null, 2)}</pre>
//         </Form>
//       )}</Formik >
//   )
// }

// export default SettingsForm
