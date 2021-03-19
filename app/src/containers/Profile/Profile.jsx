import React from 'react';
import { NavbarProfile } from '../../components/Navbar/Navbar';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';


const Profile = () => {

    return (
        <div>
            <NavbarProfile/>
            <Header/>
            <p>IEEEE</p>
        </div>
    )
}

export default Profile
