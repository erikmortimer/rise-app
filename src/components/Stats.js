import React from 'react'

export const Stats = () => {
    return (
        <>
        <div className="rounded-lg m-4 p-6 bg-blue-200 shadow-lg">
            <h2 className="text-4xl text-center mb-4">00:00</h2>
                <div className="grid grid-cols-2 gap-6 row-gap-6">
                    <select name="time" id="time">
                        <option value="10">10 Minutes</option>
                        <option value="15">15 Minutes</option>
                        <option value="30">30 Minutes</option>
                    </select>
                    <select name="position" id="position">
                        <option value="sit">Sitting</option>
                        <option value="stand">Standing</option>
                    </select>
                    <button className="text-green-200 bg-green-600 m-2 px-4 py-2 rounded">Start</button>
                    <button className="text-red-200 bg-red-600 m-2 px-4 py-2 rounded">Stop</button>
                </div>
        </div>
        </>
    )
}
