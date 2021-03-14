import React, { useState } from 'react'
import SettingsForm from '../SettingsForm'
import ChangePasswordForm from '../ChangePasswordForm'
import DeleteButton from '../SettingsForm/deleteButton'

const OnSite = ({ login }) => {
    const [setting, setSetting] = useState('general')
    let information

    if (setting) {
        switch (setting) {
            case 'general':
                information = <SettingsForm user={login} />
                break;
            case 'changePass':
                information = <ChangePasswordForm user={login} />
                break;
            case 'delete':
                information = <DeleteButton user={login} />
                break;
            default:
                information = <SettingsForm user={login} />
        }
    }
    return (
        <section className="content-wrapper-settings">
            <div className="wrapper">
                <div className="settings">

                    <div className="user-settings wrap">
                        <div className="align " >

                            <h2>User Settings</h2>
                            <ul>
                                <li onClick={() => setSetting('general')}>
                                    General
                  </li>
                                <li onClick={() => setSetting('changePass')}>
                                    Change password
                  </li>
                                <li onClick={() => setSetting('delete')}>
                                    Delete account
                  </li>
                            </ul>
                        </div>
                    </div>
                    {
                        information
                    }
                </div>
            </div>
        </section>
    )
}

export default OnSite
