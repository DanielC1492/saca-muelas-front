import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer
});

export default rootReducer;