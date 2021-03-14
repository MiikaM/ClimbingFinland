import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import DropDownMenu from './dropDownMenu'


const HeaderLogIn = ({ modal, user, page }) => {
    const [dropdown, setDropdown] = useState(false)
    const props = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -500 } })
    const fadeIn = useSpring({ cursor: 'pointer', opacity: 1, from: { opacity: 0 }, config: { delay: 1000, duration: 1000 } })

    if (!user) return null
    
    const addDefaultSrc = (e) => {
        e.target.src = `${user.avatar}`
    }

    return (
        <nav>
            <ul>
                {/* <li>Favourites</li> */}

                {
                    (user.session) ?
                        <animated.li style={fadeIn} onClick={modal}>Log in</animated.li> :
                        <li>
                            <animated.img style={fadeIn} onError={addDefaultSrc} src={page === 'main' ? user.avatar : `../${user.avatar}`} className='nav-icon' alt='user' onClick={() => setDropdown(!dropdown)} />
                            {
                                dropdown && <DropDownMenu user={user} />
                            }
                        </li>

                }
            </ul>
        </nav>
    )
}

export default HeaderLogIn