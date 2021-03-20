import { createStore, compose, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = applyMiddleware(
    save(), // Saving done here
)( createStore );

const store = createStoreWithMiddleware(
    userReducer,
    load( { preloadedState: {
        user:{}
    } } ), // Loading done here
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) || compose
);

export default store;