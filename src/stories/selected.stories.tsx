import  {useState} from "react";
import {Selected} from "./selected";


export default {
    title: 'Selected',
    component: Selected
}





export const OnOffChange = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [title,SetTitle]=useState('Users')
    const ChangeTitle =(value:any,title:string)=> {
        SetTitle(title)
    }
    return (<Selected onclick={ChangeTitle} collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)} title={title}
                       items={[{title: 'Vika', value: 1},
                           {title: 'Dima', value: 2},
                           {title: 'Morty', value: 3},
                           {title: 'Pusiaka', value: 4}]}/>)
}