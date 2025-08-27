'use client'
import React, {useState, useEffect} from 'react'
import moment from 'moment';

export default function Navbar() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () =>{
            setCurrentTime(moment().format('hh:mmA'));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []) /* only run once on mount */

    
    return (
        <div className="bevel-navbar">
            <button id="start-btn">START</button>
            <button id="about-me-btn">ABOUT ME</button>
            
            <div id="clock-shadow"></div>
            <div id="clock-bevel">{currentTime}</div>
        </div>
    );
}