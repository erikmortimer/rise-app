import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Howl, Howler } from 'howler';
import alarm_sound from '../assets/alarm_sound.wav';

export const Stats = () => {
    
    const [text, setText] = useState('Sit');
    const [amount, setAmount] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(amount);

	const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [toggleBtn, setToggleBtn] = useState('Start');
    const alarm = new Howl({
        src: [alarm_sound],
        loop: true,
        volume: 0.4
    });
    //const [start, setStart] = useState(false);
    //const [stop, setStop] = useState(true);
    //const [duration, setDuration] = useState(false);
    //const [movement, setMovement] = useState(false);

    //const [timeinterval, setTimeinterval] = useState();

    const { addMovement } = useContext(GlobalContext);

    const onSubmit = () => {
        const createdDate = new Date();
        const newMovement = {
            id: Math.floor(Math.random() * 100000000),
            text,
            time: amount,
            date: `${createdDate.toLocaleTimeString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit'})}`
        };
		
        addMovement(newMovement);
    }

    function toggle() {
        switch(toggleBtn){
            case 'Start':
                setToggleBtn('Pause'); setIsActive(true);
                break;
            case 'Pause':
                setToggleBtn('Start'); setIsActive(false);
                break;
            case 'OK':
                setToggleBtn('Start');
                Howler.stop();
                reset();
                break;
        }
    }

    function reset() {
        setSeconds(0);
        setMinutes(amount);
        setIsActive(false);
        setIsStarted(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive){
            setIsStarted(true);
            interval = setInterval(() => {
                if (seconds > 0)
                    setSeconds(seconds - 1);
                if (seconds === 0){
                    if (minutes === 0) {
                        clearInterval(interval);
                        onSubmit();
                        alarm.play();
                        setIsActive(false); setToggleBtn('OK');
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        } else if(!isActive && seconds !== 0){
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <>
		<div className="p-6 m-4 bg-blue-400 rounded-lg shadow-lg">
                    <h2 className="mb-4 text-4xl text-center text-white">
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h2>

				<div className="grid grid-cols-2 gap-6 row-gap-6">
                <select disabled={isStarted ? true : false} value={amount} id="time" onChange={(e) => {
                    setAmount(parseInt(e.target.value));
                    setMinutes(parseInt(e.target.value));
                }}>
                    <option value="10">10 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="30">30 Minutes</option>
                </select>
                <select disabled={isStarted ? true : false} value={text} id="position" onChange={(e) => setText(e.target.value)}>
                    <option value="Sit">Sitting</option>
                    <option value="Stand">Standing</option>
                </select>
                <button className="px-4 py-2 m-2 text-white bg-blue-600 rounded-sm" onClick={toggle}>
					{toggleBtn}
                </button>
                <button className="px-4 py-2 m-2 bg-white rounded-sm text-black-500" onClick={reset}>
					Reset
				</button>
            </div>
        </div>
        </>
    )
}
