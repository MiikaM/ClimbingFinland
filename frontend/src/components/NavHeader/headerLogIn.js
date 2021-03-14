import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useSelector } from 'react-redux'
import DropDownMenu from './dropDownMenu'
import AvatarSVG from '../../images/avatar.svg'


const HeaderLogIn = ({ modal, user }) => {
    const [dropdown, setDropdown] = useState(false)
    const props = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -500 } })
    const fadeIn = useSpring({ cursor: 'pointer', opacity: 1, from: { opacity: 0 }, config: { delay: 1000, duration: 1000 } })
    

    return (
        <nav>
            <ul>
                {/* <li>Favourites</li> */}

                {
                    (user.session) ?
                        <animated.li style={fadeIn} onClick={modal}>Log in</animated.li> :
                        <li>
                            <animated.img style={fadeIn} src={AvatarSVG} className='nav-icon' alt='user' onClick={() => setDropdown(!dropdown)} />
                            {
                                dropdown ?
                                    <DropDownMenu user={user} /> :
                                    null
                            }
                        </li>

                }
            </ul>
        </nav>
    )
}

export default HeaderLogIn