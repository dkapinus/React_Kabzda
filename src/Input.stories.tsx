import {useRef, useState} from "react";


export default {
    title: 'input',

}

export const ControllerInput = () => <input value={1}/>
export const TrackerInput = () => {
    const [tracker, setTracker] = useState('')

    return (<><input onChange={(e) => setTracker(e.currentTarget.value)}/> -{tracker}</>)
}


export const InputDifferent = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    const inputValue = () => {
        const e = inputRef.current as HTMLInputElement
        setValue(e.value)
    }

    return (<><input ref={inputRef}/><button onClick={inputValue}>Text</button> -{value}</>)
}


