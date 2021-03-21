import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    save({state: ['dataUser']}), // Saving done here
)( createStore );

const store = createStoreWithMiddleware(
    rootReducer,
    load( { 
        preloadedState: {
            user:{}

        },
        state: ['dataUser'] 
    }), // Loading done here
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) || compose
);

export default store;
