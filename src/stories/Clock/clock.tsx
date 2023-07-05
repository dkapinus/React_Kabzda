import React, {useEffect, useState} from "react";


type ClockType = {
    data:Date
}



export const Clock:React.FC<ClockType> = ({data}) => {


    // const [date, setDate] = useState<Date>(new Date((Date.now())))
    //
    //
    // useEffect(() => {
    //
    //
    //     const intervalID = setInterval(() => {
    //         console.log('tick')
    //         setDate(new Date())
    //     }, 1000)
    //
    //     return ()=>clearInterval(intervalID)
    //
    //
    // }, [])




    let formatterTime = new Intl.DateTimeFormat("ru", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const stringTime = `${formatterTime.format(data)}`
    return (
        <div>

            <span>
                   {stringTime}
                </span>



        </div>
    )
}










