import React, {useEffect, useState} from 'react';


export default {
    title: 'ResetUseEffect',

}


export const ResetUseEffect = () => {
    const [counter, setCounter] = useState(0)

    console.log('SetTimeoutExample')

    useEffect(() => {
  console.log('Effect ocurred')

        return ()=> {
      console.log('Reset')
        }
    },[])



    return (
        <>

            <button onClick={() => setCounter(counter + 1)}>counter</button>
           Hello : {counter}


        </>
    )
}


