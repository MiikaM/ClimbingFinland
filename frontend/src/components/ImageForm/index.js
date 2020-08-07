import React from 'react'

const ImageForm = () => {

  const uploadImage = (event) => {
    event.preventDefault()
    
  }

  return (
    <div>
      <input type='file' onChange={(e) => uploadImage(e)} />
    </div>
  )
}

export default ImageForm