// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { uploadAvatar } from '../../reducers/userReducer'

// /**
//  * The form for uploading an image for the user and the validation for it.
//  */
// const ImageForm = () => {
//   const [image, setImage] = useState(null)
//   const users = useSelector(state => state.users)
  
//   const dispatch = useDispatch()

//   const handleChange = (event) => {
//     event.preventDefault()
//     if (event.target.files[0]) {
//       setImage(event.target.files[0])
//     }
//   }

//   const handleUpload = (event) => {
//     event.preventDefault()

//     if (image) {
//       dispatch(uploadAvatar(image))
//     }
//   }

//   if (!users) return null

//   const user = users
//     ? users.find(user => user.id.toString() === '5f294ce5e5953a8730d56fe5')
//     : null


//   return (
//     <div>
//       <h2>Upload image from here</h2>
//       <input type='file' onChange={handleChange} />
//       <br />
//       <button onClick={handleUpload}>Upload</button>
//       <br />
//       {image ?
//         <img src={user.avatar} alt='shown' /> :
//         null
//       }

//     </div>
//   )
// }

// export default ImageForm