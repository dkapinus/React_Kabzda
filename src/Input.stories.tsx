import {ChangeEvent, useRef, useState} from "react";


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


export const ControlledInput = ()=>{
const [value,setValue]=useState('')


    const onChange =(e:ChangeEvent<HTMLInputElement>)=> {
    setValue(e.currentTarget.value)
    }
    return (<input value={value} onChange={onChange}/>)

}

export const ControlledInputCheckbox = ()=>{
    const [value,setValue]=useState(false)

    const changeStatus = (e:boolean)=> {
        setValue(e)
    }

    return (<input type={'checkbox'} checked={value} onClick={(event)=>changeStatus(event.currentTarget.checked)}/>)

}

export const ControlledSelect = ()=>{
    const [value,setValue]=useState<string|undefined>('3')


    const onChange =(e:ChangeEvent<HTMLSelectElement>)=> {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChange}>
        <option value={'1'}>none</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Vienna</option>
        <option value={'4'}>Pha</option>
    </select>



}

