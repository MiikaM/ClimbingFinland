import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ImageForm = () => {
  const [image, setImage] = useState(null)
  const dateNow = Date.now()
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
    if (event.target.files[0]) {
      dispatch(uploadImage(event.target.files[0]))
    }
  }

  return (
    <div>
      <h2>Upload image from here</h2>
      <input type='file' onChange={handleUpload} />
      <br />
    </div>
  )
}

export default ImageForm