import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import '../../scss/modal.scss'

const Modal = ({ open, children, onClose }) => {
  const user = useSelector(state => state.session)
  if (!open) return null
  if (user) {
    return null
  }


  return ReactDOM.createPortal(
    <>
      <div className='modal-bg' onClick={onClose} />
      <div className='modal'>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
