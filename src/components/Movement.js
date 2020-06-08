import React, { useContext } from 'react'

export const Movement = ({ movement }) => {
    return (
        <li className="flex relative justify-between bg-blue-300 p-2 mx-2 my-2 shadow">
            { movement.text }<span>{ movement.time } Minutes</span><span>{ movement.date }</span><button className="delete-btn absolute cursor-pointer bg-red-300 p-1 text-lg top-1/2 left-0 transform -translate-x-full -translate-y-1/2 duration-150 opacity-0">x</button>
        </li>
    )
}
