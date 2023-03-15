import React, {useMemo, useState} from 'react';


export default {
    title: 'React UseMemo',

}


export const Example = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5)


    let resultA = 1
    let resultB = 1

    let ResultAAA =useMemo(()=>{ for (let i = 1; i <= a; i++) {
        resultA = resultA * i
        let fake =0
        while (fake<10000){
            fake++
            const x = Math.random()
        }

    } return resultA},[a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i

    }
        return (
            <>
                <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
                <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
                <div>
                    result A: {resultA}
                </div>
                <div>
                    result B: {resultB}
                </div>
            </>
        )
    }