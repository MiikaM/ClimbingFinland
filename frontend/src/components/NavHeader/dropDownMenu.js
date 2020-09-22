import React from 'react'
import firebase from 'firebase'
import { logoutUser } from '../../reducers/loginReducer'
import '../../scss/dropdown.scss'
import AvatarSVG from '../../images/avatar.svg'
import SettingsSVG from '../../images/settings.svg'
import LogoutSVG from '../../images/logout.svg'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'


const DropDownMenu = ({ user }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (e) => {
    e.preventDefault()
    console.log('tapahtuu')

    dispatch(logoutUser())
    history.push('/')
  }

  console.log({ user })
  return (
    <div className='dropdown'>
      <Link to={{ pathname: `/${user.username}` }}>
        <img src={AvatarSVG} className='little-nav-icon' alt='user' /> My profile
        </Link>
      <Link to={{ 
        pathname: `/${user.username}/settings`,
        user: user 
        }}>
        <img src={SettingsSVG} className='little-nav-icon' alt='user' /> Settings
      </Link>

      <Link to={{ pathname: '/#' }} onClick={handleLogout}>
        <img src={LogoutSVG} className='little-nav-icon' alt='user' /> Logout
      </Link>
    </div >
  )
}

export default DropDownMenu
