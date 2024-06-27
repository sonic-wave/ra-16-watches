import React, { useEffect, useState } from 'react'
import getCurrentTime from '../../functions/getCurrentTime'
import './Watch.css'

export interface WatchProps {
    name: string,
    time: string
}

export const Watch: React.FC<{ watch: WatchProps, offset: number, removeWatch: () => void }> = ({ watch, offset, removeWatch }) => {
    const [time, setTime] = useState(watch.time)

    useEffect(() => {
        const timerId = setInterval(() => {
            const newTime = getCurrentTime(offset);
            setTime(newTime)
        }, 1000);

        return () => clearInterval(timerId);
    }, [watch.time])

    return (
        <div className='watch-container'>
            <div className='watch-component'>
                <div className='watch-name'>{watch.name}</div>
                <div className='watch-time'>{time}</div>
            </div>
            <button className='watch-button' onClick={removeWatch}>&#10005;</button>
        </div>
    )
}
