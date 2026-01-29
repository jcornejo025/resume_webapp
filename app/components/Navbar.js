'use client'
import React, {useState, useEffect} from 'react'
import moment from 'moment';
import AboutMe from './AboutMe';

export default function Navbar() {
    const [isPressed, setIsPressed] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () =>{
            setCurrentTime(moment().format('hh:mmA'));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []) /* only run once on mount */

    const handleClick = () => {
        setIsPressed(!isPressed);
    };

    return (
        <>
        <AboutMe isVisible={isPressed}/>
        <div className="bevel-navbar">
            <button className="start-btn">START</button>
            <button
            className={`about-me-btn ${isPressed ? "bevel-pressed-btn" : ""}`.trim()}
            onClick={handleClick}
            >
              ABOUT ME
            </button>
            <div className="clock-shadow"></div>
            <div className="clock-bevel">{currentTime}</div>
        </div>
        </>
    );
}
