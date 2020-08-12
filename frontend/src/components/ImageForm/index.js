import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadAvatar } from '../../reducers/userReducer'

const ImageForm = () => {
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    if (event.target.files[0]) {
      setImage(event.target.files[0])
    }
  }

  console.log({ image })
  const handleUpload = (event) => {
    event.preventDefault()

    if (image) {
      dispatch(uploadAvatar(image))
    }
  }

  return (
    <div>
      <h2>Upload image from here</h2>
      <input type='file' onChange={handleChange} />
      <br />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {image ?
        <img src={image} alt='shown' /> :
        null
      }

    </div>
  )
}

export default ImageForm