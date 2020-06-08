import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Stats = () => {
    
    const [text, setText] = useState('Sit');
    const [amount, setAmount] = useState('10');
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');

    const { addMovement } = useContext(GlobalContext);

    const onSubmit = () => {

        const createdDate = new Date();
        const newMovement = {
            id: Math.floor(Math.random() * 100000000),
            text,
            time: amount,
            date: `${createdDate.toLocaleTimeString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit'})} ${createdDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}`
        }

        function getTimeRemaining(endtime){
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            return {
                total,
                seconds,
                minutes
            };
        }

        function initClock(endtime){
            function updateClock() {
                const t = getTimeRemaining(endtime);
                setMinutes(('0' + t.minutes).slice(-2));
                setSeconds(('0' + t.seconds).slice(-2));
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                    addMovement(newMovement);
                }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        const currentTime = Date.parse(new Date()); 
        const deadline = new Date(currentTime + parseInt(amount) * 60 * 1000);

        initClock(deadline);

        //addMovement(newMovement);
    }

    return (
        <>
        <div className="rounded-lg m-4 p-6 bg-blue-200 shadow-lg">
            <h2 className="text-4xl text-center mb-4">{minutes}:{seconds}</h2>
            <div className="grid grid-cols-2 gap-6 row-gap-6">
                <select value={amount} id="time" onChange={(e) => setAmount(e.target.value)}>
                    <option value="10">10 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="30">30 Minutes</option>
                </select>
                <select value={text} id="position" onChange={(e) => setText(e.target.value)}>
                    <option value="Sit">Sitting</option>
                    <option value="Stand">Standing</option>
                </select>
                <button className="text-green-200 bg-green-600 m-2 px-4 py-2 rounded" onClick={() => {
                    //TODO: add disable to button after clicking start, vic verca with stop button
                    onSubmit();
                }}>Start
                </button>
                <button className="text-red-200 bg-red-600 m-2 px-4 py-2 rounded">Stop</button>
            </div>
        </div>
        </>
    )
}
