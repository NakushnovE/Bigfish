import React from 'react';
import profile from './Profile.module.css';
import Data from './Data/Data';
import Foto from './Foto/Foto';

const Profile = () => {
    return (
        <div className={profile.profile}>
            <Foto/>
            <Data/>
        </div>
    )
}

export default Profile;