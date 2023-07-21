import React, {useEffect, useState} from 'react';


export default {
    title: 'useState demo',

}


export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0);

    // useEffect(() => {
    // setInterval(()=>setCounter(counter+1))
    // },[counter])



    return (
        <>
            <button onClick={() => setCounter(counter)}>coonter</button>
            <button onClick={() => setFake(fake + 1)}>fake</button>
            {counter} {fake}


        </>
    )
}


