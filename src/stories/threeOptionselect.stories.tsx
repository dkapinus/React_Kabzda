
import {ThreeOptionSelect} from "./threeOptionSelect";
import {useState} from "react";

export default {
    title: 'ThreeOptionSelect',
    component: ThreeOptionSelect
}

export const ThreeOptionSelected = ()=>{

const [value,SetValue]=useState(2)

    return <ThreeOptionSelect items ={[
        {value:1,title:'Minsk'},
        {value:2,title:'Kiev'},
        {value:3,title:'Madrid'}]} value={value}/>
}