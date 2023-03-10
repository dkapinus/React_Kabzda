import React from "react";


type ItemType = {
    title:string,
    value:any
}


type SelectedType = {
    title:string
    changeCollapsed:()=>void
    collapsed:boolean
    items:ItemType[]
    onclick:(value:any,title:string)=>void
}

export function Selected (props:SelectedType){






    return (<div>
        <SelectedTitle title={props.title} onClick={()=>props.changeCollapsed()}/>


        {props.collapsed &&<SelectedBody onclick={props.onclick} items={props.items} />}


    </div>)


}

type SelectedTitleType = {
    title:string;
    onClick:()=>void

}

export function SelectedTitle (props:SelectedTitleType){
    return (
        <div>
        <div onClick={()=>props.onClick()}><option>{props.title}</option></div>


        </div>
    )
}

type SelectedBodyType = {
    items:ItemType[]
    onclick:(value:any,title:string)=>void
}

export function SelectedBody (props:SelectedBodyType){
    return (
        <div>

            <ul>{props.items.map((i,index)=>{return(
                <li key={index}  onClick={()=>props.onclick(i.value,i.title)}>{i.title}</li>

            )})}

            </ul>

        </div>
    )
}

