import React, {useState} from "react";




export function Rating () {

const Started =(setStars:number)=> {
setValue(setStars)
    }

    let [value,setValue]=useState(0)
    return (

        <div>  <Star selected={value>0} started={Started}/>
            <Star selected={value>1} started={Started}/>
            <Star selected={value>2} started={Started}/>
            <Star selected={value>3} started={Started}/>
            <Star selected={value>4} started={Started}/>
        </div>)

}

type StarType ={
    selected:boolean;
    started:(setStars:number)=>void;
}


export function Star (props:StarType) {



    const SetValueStars = (setStars:number)=> {
       props.started(setStars)
    }

 return (
     <span>

         {props.selected
             ? <span ><b>star </b></span>
             : <span onClick={()=>SetValueStars(5)}>star </span>}

     </span>
 )



}