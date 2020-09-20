import React from 'react'
import ReactDOM from 'react-dom'
import '../../scss/modal.scss'

const Modal = ({ open, children, onClose }) => {

  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className='modal-bg' onClick={onClose}/>
      <div className='modal'>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
