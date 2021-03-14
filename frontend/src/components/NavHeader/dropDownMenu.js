import React from 'react'
import { logoutUser } from '../../reducers/loginReducer'
import '../../scss/dropdown.scss'
import SettingsSVG from '../../images/settings.svg'
import LogoutSVG from '../../images/logout.svg'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

/**
 * Wrapper for the dropdown menu.
 * @param {*} user logged in user 
 * Includes => 
 * - Link to user page.
 * - Link to settings page.
 * - Logout button.
 */
const DropDownMenu = ({ user }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = (e) => {
    e.preventDefault()

    dispatch(logoutUser())
    history.push('/')
  }

  return (
    <div className='dropdown'>
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
