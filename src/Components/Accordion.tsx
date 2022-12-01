import React, {useState} from "react";

type AccordionType = {
    title:string

}

export function Accordion (props:AccordionType){

    let [collapsed,setCollapsed]=useState(true)
    return (<div>
        <AccordionTitle title={props.title}/>
<button onClick={()=>setCollapsed(!collapsed)}>collapsed</button>

        {collapsed &&<AccordionBody />}


    </div>)


}

type AccordionTitle = {
    title:string;
}

export function AccordionTitle (props:AccordionTitle){
    return (
        <div>
            <h3>---{props.title}---</h3>


        </div>
    )
}

export function AccordionBody (props:any){
    return (
        <div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        </div>
    )
}

