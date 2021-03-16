const initialState = {
    visibility: 'ALL',
    // clients: [],
    appointments: []
}

function reducer(state = initialState, action){
    switch (action.type) {

    case 'ADD_APPOINTMENTS':
        return  {
            ...state,
            appointments : action.payload
            
         }

    default:
        return state
    }
}

export default reducer;