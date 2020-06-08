import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    movements: [
        { id: 1, text: 'Sit', time: 10, date: "5/31/2020 12:20 PM" },
        { id: 2, text: 'Stand', time: 15, date: "5/31/2020 1:10 PM" },
        { id: 3, text: 'Sit', time: 30, date: "5/31/2020 2:45 PM" },
    ]
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

    return(<GlobalContext.Provider value={{
        movements: state.movements,
        addMovement
    }}>
        {children}
    </GlobalContext.Provider>);
}