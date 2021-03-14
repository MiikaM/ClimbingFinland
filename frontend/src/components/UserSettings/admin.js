import React, { useState } from 'react'
import SettingsForm from '../SettingsForm'
import ChangePasswordForm from '../ChangePasswordForm'
import ListComp from '../PlaceForm/listComp'
import DeleteButton from '../SettingsForm/deleteButton'
import PlaceAddForm from '../PlaceForm/placeAddForm'

const Admin = ({ login }) => {
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
            case 'places':
                information = <ListComp />
                break;
            case 'addPlace':
                information = <PlaceAddForm />
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
                                <li onClick={() => setSetting('places')}>
                                    Place control
                  </li>
                                <li onClick={() => setSetting('addPlace')}>
                                    Add a place
                  </li>
                                <li onClick={() => setSetting('delete')}>
                                    Delete account
                  </li>


                            </ul>
                        </div>
                    </div>
                    {information}
                </div>
            </div>
        </section>
    )
}

export default Admin
