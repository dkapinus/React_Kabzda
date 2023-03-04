import React from "react";


type ItemType = {
    title:string,
    value:any
}


type AccordionType = {
    title:string
    changeCollapsed:()=>void
    collapsed:boolean
    items:ItemType[]
    onclick:(value:any)=>void
}

export function Accordion (props:AccordionType){






    return (<div>
        <AccordionTitle title={props.title} onClick={()=>props.changeCollapsed()}/>


        {props.collapsed &&<AccordionBody onclick={props.onclick} items={props.items} />}


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

type AccordionBodyType = {
    items:ItemType[]
    onclick:(value:any)=>void
}

export function AccordionBody (props:AccordionBodyType){
    return (
        <div>

            <ul>{props.items.map((i,index)=>{return(
                <li key={index}  onClick={()=>props.onclick(i.value)}>{i.title}</li>

            )})}

            </ul>

        </div>
    )
}

