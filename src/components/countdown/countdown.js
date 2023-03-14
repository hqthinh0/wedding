import { useState, useEffect, useRef } from 'react';
import './countdown.scss';


const CountdownTimer = () => {


    const [timerDays, settimerDay] = useState('00');
    const [timerhours, settimerhours] = useState('00');
    const [timerminutes, settimerminutes] = useState('00');
    const [timerSeconed, settimerSeconed] = useState('00');

    let interval = useRef();

    const startTime = () => {
        const countdownDate = new Date('Mar 17 2023 17:05:00').getTime();

        interval = setInterval(() => {
             const now =  new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )/ (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60 ) / 1000));

            if (distance < 0){
                clearInterval(interval.current);
            }else{
                settimerDay(days);
                settimerhours(hours);
            
                settimerminutes(minutes);
                settimerSeconed(seconds);
            }

        }, 1000);
    }

 
    useEffect(() => {

             const intervalId = setInterval(() => {
                 startTime();
        }, 1000);
        return () => { clearInterval(intervalId); }
    },);

    return (
        <div className="countdown grid-row">
            <div className="countdown__txt">
                <p className="countdown__txt--number">{timerDays}</p>
                <span className="countdown__txt--day">Ngày</span>
            </div>
            <div className="countdown__txt">
                <p className="countdown__txt--number">{timerhours}</p>
                <span className="countdown__txt--day">Giờ</span>
            </div>
            <div className="countdown__txt">
                <p className="countdown__txt--number">{timerminutes}</p>
                <span className="countdown__txt--day">Phút</span>
            </div>
            <div className="countdown__txt">
                <p className="countdown__txt--number">{timerSeconed}</p>
                <span className="countdown__txt--day">giây</span>
            </div>

        </div>
    )
}

export default CountdownTimer;