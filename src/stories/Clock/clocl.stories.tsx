import {Clock} from "./clock";
import {AnalogClock} from "./AnalogClock";
import {useEffect, useState} from "react";


export default {
    title: 'Clock ',

}




export const   Analog = ()=> {

    const [date, setDate] = useState<Date>(new Date((Date.now())))


    useEffect(() => {


        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return ()=>clearInterval(intervalID)


    }, [])

    return (
        <>
            <AnalogClock data={date}/>
            <Clock data={date}/>

        </>
    )

}

