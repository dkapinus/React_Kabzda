import React from "react";

type AccordionType = {
    title:string
    changeCollapsed:()=>void
    collapsed:boolean
}

export function Accordion (props:AccordionType){






    return (<div>
        <AccordionTitle title={props.title} onClick={()=>props.changeCollapsed()}/>


        {props.collapsed &&<AccordionBody />}


    </div>)


}

type AccordionTitle = {
    title:string;
    onClick:()=>void

}

export function AccordionTitle (props:AccordionTitle){
    return (
        <div>
            <h3 onClick={()=>props.onClick()}>---{props.title}---</h3>


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

