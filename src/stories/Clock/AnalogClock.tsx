import React from "react";
import "./AnalogClock.css"

type AnalogClockType = {
    data:Date
}


export const AnalogClock:React.FC<AnalogClockType> = ({data}) => {






    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getMinutes() * 30}deg)`
    };



    return (
        <div>

            <div className={"clock"}>
                <div className={'analog-clock'}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                </div>

            </div>


        </div>
    )
}










