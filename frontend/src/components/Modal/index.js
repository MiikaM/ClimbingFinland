import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import '../../scss/modal.scss'

/**
 * Modal to be used for e.g. login form.
 * @param {*} open is the modal open?
 * @param {*} children children component
 * @param {*} onClose Close function
 */
const Modal = ({ open, children, onClose }) => {
  const user = useSelector(state => state.session)


  if (!open) return null
  if (user.session) {
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
  return null


}

export default Modal
