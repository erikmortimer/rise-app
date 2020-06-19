import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    movements: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addMovement(movement) {
        dispatch({
            type: 'ADD_MOVEMENT',
            payload: movement
        });
    }

    function removeMovement(movement){
        dispatch({
            type: 'REMOVE_MOVEMENT',
            payload: movement
        });
    }

    return(<GlobalContext.Provider value={{
        movements: state.movements,
        addMovement,
        removeMovement
    }}>
        {children}
    </GlobalContext.Provider>);
}
