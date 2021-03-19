import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types/userTypes';


const Header = (props) => {
    const history = useHistory()
    const logOut = () => {
        props.dispatch({ type: LOGOUT, payload: {}});

        setTimeout(() => {
            history.push('/')
        }, 1000);
    }
    return (
        <div>
            
            {
                !props.client.id
                ?
                <>
                    <div>
                        HOLA
                        <button  onClick={()=> logOut()}>LogOut</button>

                    </div>
                </>
                :
                <>
                    <div>
                        ADIOS
                        <button  onClick={()=> logOut()}>LogOut</button>
                    </div>
                </>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        client: state.user
    }
}

export default connect(mapStateToProps)(Header)
