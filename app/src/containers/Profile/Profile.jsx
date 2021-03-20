import React from 'react';
import {useHistory} from 'react-router-dom';
import { NavbarProfile } from '../../components/Navbar/Navbar';
import { connect } from 'react-redux';
import './Profile.css';

const Profile = (props) => {
    
    const history = useHistory()

    return (
        <div className="profileContainer">
            <NavbarProfile/>
            <div className="info">
                {
                    props.client.id
                    ?
                    <>
                        <div className="profileName">
                            <h3>Name : {`${props.client.name}`}</h3>
                        </div>
                        <div className="profilePhone">
                            <h3>Phone : {`${props.client.phone}`}</h3>
                        </div>
                        <div className="profileEmail">
                            <h3>Email : {`${props.client.email}`}</h3>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            {/* {`Bye ${props.client.name}`} */}
                            
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        client: state.user
    }
}

export default connect(mapStateToProps)(Profile)
