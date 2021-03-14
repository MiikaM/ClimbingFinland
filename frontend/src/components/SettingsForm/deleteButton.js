import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../reducers/userReducer'
import '../../scss/deleteButton.scss'

const DeleteButton = (user) => {
    const dispatch = useDispatch()

    if (!user) return null
    const handleDelete = (e) => {
        e.preventDefault()

        if (window.confirm('Are you sure you wish to delete you\'r account?'))
            dispatch(deleteUser(user.user.username))

    }   

    return (
        <div className='delete-button-wrapper'>
            <div className="delete-button" onClick={handleDelete}>
                <span>Delete</span>
            </div >
        </div>
    )
}

export default DeleteButton
