import React,{ useState} from 'react'
import SettingsForm from '../SettingsForm'

const ThirdParty = ({ login }) => {
    const [changePass, setChangePass] = useState(false)

    return (
        <section className="content-wrapper-settings">
            <div className="wrapper">
                <div className="settings">

                    <div className="user-settings wrap">
                        <div className="align " >

                            <h2>User Settings</h2>
                            <ul>
                                <li onClick={() => setChangePass(false)}>
                                    General
                  </li>

                            </ul>
                        </div>
                    </div>
                    {
                        !changePass ?
                            (<div className="account-settings wrap ">
                                <div className="align" >

                                    <h2>Account</h2>

                                    <SettingsForm user={login} />
                                </div>
                            </div>

                            )
                            : null
                    }
                </div>
            </div>
        </section>
    )
}

export default ThirdParty
