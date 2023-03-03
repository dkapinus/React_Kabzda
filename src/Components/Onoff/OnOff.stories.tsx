
import {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title:'OnOff',
    component:OnOff
}

const callback = action('On or Of click')

export const On = ()=> <OnOff work={true} working={callback} />
export const Off = ()=> <OnOff work={false} working={callback} />

export const OnOffChange = ()=> {
    const [work,setWork]=useState(true)
    return (<OnOff work={work} working={()=>setWork(!work)}/>)
}