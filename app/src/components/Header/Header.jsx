import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userTypes';
import { ADMINLOGOUT } from '../../redux/types/adminTypes'

const Header = (props) => {
    const history = useHistory();

    const logOut = () => {
        
        props.dispatch({ type: LOGOUT, payload: {}});
        props.dispatch({ type: ADMINLOGOUT, payload: {}});
            
        setTimeout(() => {
            history.push('/')
        }, 1000);
    };
    console.log(props);
    // console.log(props.client.name)

    return (
        <div className="headerContainer">
            {
                props.client.id || props.clinic.id
                ?
                <>
                    <div>
                        {props.client.name}
                        {props.clinic.name}
                        {/* <button  onClick={()=> logOut()}>LogOut</button> */}
                        <div onClick={()=> logOut()}>logOut</div>

                    </div>
                </>
                :
                <>
                    <div>
                        Bye
                        {/* <div onClick={()=> logOut()}>logOut</div> */}
                        {/* <button  onClick={()=> logOut()}>LogOut</button> */}
                    </div>
                </>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        client: state.userReducer.user,
        clinic: state.adminReducer.admin

    }
}

export default connect(mapStateToProps)(Header)
