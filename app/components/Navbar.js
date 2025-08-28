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
            <button id="start-btn">START</button>
            <button id="about-me-btn" 
            className={isPressed ? "bevel-pressed-btn" : ""}
            onClick={handleClick}>ABOUT ME</button>
            <div id="clock-shadow"></div>
            <div id="clock-bevel">{currentTime}</div>
        </div>
        </>
    );
}