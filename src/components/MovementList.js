import React, { useContext } from 'react';
import { Movement } from './Movement';

import { GlobalContext } from '../context/GlobalState';

export const MovementList = () => {

    const { movements } = useContext(GlobalContext);

    return (
        <>
        <h3 className="text-3xl text-blue-400 text-center">History</h3>
        <ul className="list">
            {movements.map(movement => (
                <Movement key={movement.id} movement={movement}/>
            ))}
        </ul>
        </>
    )
}
