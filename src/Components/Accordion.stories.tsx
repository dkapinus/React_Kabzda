
import {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title:'Accordion',
    component:Accordion
}

const callback = action('On or Of click')

export const On = ()=> <Accordion  collapsed={true} changeCollapsed={callback} title={'Menu'} />
export const Off = ()=> <Accordion collapsed={false} changeCollapsed={callback} title={'Hello'} />

export const OnOffChange = ()=> {
    const [collapsed,setCollapsed]=useState(true)
    return (<Accordion collapsed={collapsed} changeCollapsed={()=>setCollapsed(!collapsed)} title={''}/>)
}