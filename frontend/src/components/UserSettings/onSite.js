import React, { useState } from 'react'
import SettingsForm from '../SettingsForm'
import ChangePasswordForm from '../ChangePasswordForm'

const OnSite = ({ login }) => {
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
                                <li onClick={() => setChangePass(true)}>
                                    Change password
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
                            : (<div className="change-password wrap">
                                <div className="align " >

                                    <h2>Change password</h2>

                                    <ChangePasswordForm user={login} />
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default OnSite
