import React from 'react'
import firebase from 'firebase'
import logoutUser from '../../reducers/loginReducer'
import '../../scss/dropdown.scss'
import AvatarSVG from '../../images/avatar.svg'
import SettingsSVG from '../../images/settings.svg'
import LogoutSVG from '../../images/logout.svg'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


const DropDownMenu = ({ user }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (e) => {
    e.preventDefault()
    firebase.auth().signOut()
    dispatch(logoutUser())
    history.push('/')
  }
  return (
    <div className='dropdown'>
      <a href={`/${user.username}`}>
        <img src={AvatarSVG} className='little-nav-icon' alt='user' /> My profile
        </a>
      <a href={`/${user.username}/settings`}>
        <img src={SettingsSVG} className='little-nav-icon' alt='user' /> Settings
      </a>

      <a href={`/`}>
        <img src={LogoutSVG} className='little-nav-icon' alt='user' onClick={handleLogout} /> Logout
      </a>
    </div >
  )
}

export default DropDownMenu
