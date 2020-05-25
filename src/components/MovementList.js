import React from 'react'

export const MovementList = () => {
    return (
        <>
        <h3 className="text-3xl text-blue-400 text-center">History</h3>
        <ul className="list">
            <li className="flex relative justify-between bg-blue-300 p-2 mx-2 my-2 shadow">Sit <span>15 Minutes</span><span>5/25/2020 12:20 PM</span><button className="delete-btn absolute cursor-pointer bg-red-300 p-1 text-lg top-1/2 left-0 transform -translate-x-full -translate-y-1/2 duration-150 opacity-0">x</button></li>
            <li className="flex relative justify-between bg-blue-300 p-2 mx-2 my-2 shadow">Stand<span>30 Minutes</span><span>5/25/2020 12:20 PM</span><button className="delete-btn absolute cursor-pointer bg-red-300 p-1 text-lg top-1/2 left-0 transform -translate-x-full -translate-y-1/2 duration-150 opacity-0">x</button></li>
            <li className="flex relative justify-between bg-blue-300 p-2 mx-2 my-2 shadow">Sit<span>10 Minutes</span><span>5/25/2020 12:20 PM</span><button className="delete-btn absolute cursor-pointer bg-red-300 p-1 text-lg top-1/2 left-0 transform -translate-x-full -translate-y-1/2 duration-150 opacity-0">x</button></li>
        </ul>
        </>
    )
}
