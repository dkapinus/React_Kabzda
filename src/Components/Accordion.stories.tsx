import {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('On or Of click')
const clickLi =action('click some li')

export const On = () => <Accordion onclick={clickLi} collapsed={true} changeCollapsed={callback} title={'Menu'} items={[]}/>
export const Off = () => <Accordion onclick={clickLi} collapsed={false} changeCollapsed={callback} title={'Hello'}
                                    items={[{title: 'Vika', value: 1},
                                        {title: 'Dima', value: 2}, {
                                        title: 'Morty', value: 3},
                                        {title: 'Pysiaka', value: 4}]}/>

export const OnOffChange = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (<Accordion onclick={(id)=>alert(`user ${id}`)} collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)} title={'Users'}
                       items={[{title: 'Vika', value: 1},
                           {title: 'Dima', value: 2},
                           {title: 'Morty', value: 3},
                           {title: 'Pysiaka', value: 4}]}/>)
}