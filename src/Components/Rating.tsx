import React from "react";



export type ValueType =0| 1 | 2 | 3 | 4 | 5

type RatingType =  {
    value: ValueType;
    setValue:(setStars: ValueType)=>void
}

export function Rating(props:RatingType) {

    const Started = (setStars: ValueType) => {
       props.setValue(setStars)
    }



    return (

        <div><Star selected={props.value > 0} started={Started} value={1}/>
            <Star selected={props.value > 1} started={Started} value={2}/>
            <Star selected={props.value > 2} started={Started} value={3}/>
            <Star selected={props.value > 3} started={Started} value={4}/>
            <Star selected={props.value > 4} started={Started} value={5}/>
        </div>)

}


type StarType = {
    selected: boolean;
    started: (value: ValueType) => void;
    value: ValueType;
}

export function Star(props: StarType) {

    return <span onClick={() => props.started(props.value)}>
        {props.selected ? <b>star</b> : 'star'}
          </span>


}