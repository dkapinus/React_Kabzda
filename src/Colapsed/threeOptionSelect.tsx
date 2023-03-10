import React, { useState,KeyboardEvent} from 'react';
import s from './three.module.css'

type ThreeOptionSelectType ={
    items:ItemsType[]
    value:number
}

type ItemsType = {
    value:number
    title:string
}

export const ThreeOptionSelect = (props:ThreeOptionSelectType) => {

    const TitleFind = props.items.find((el)=>el.value===props.value )


    const [editMode,setEdit]=useState(false)

    const ChangeStatus=() => {
        setEdit(!editMode)
    }

    const [select,SetSelect]=useState('Minsk')

    const [hover,SetHover]=useState(props.value)

    const ChangeEnableSpan =(title:string)=> {
        SetSelect(title)
        setEdit(!editMode)
    }

// const onKeyUp = (e:KeyboardEvent<HTMLDivElement>)=> {
//         for (let i=0;i<props.items.length;i++){}
// }

    return (
        <>
            <div className={s.select} >
                <span className={s.main} onDoubleClick={ChangeStatus}>{select}</span>
                {editMode &&
                    <div className={s.items}>
                        {props.items.map((el)=>{
                            return (
                                <div className={hover ===el.value ? s.active :''}
                                    onMouseEnter={()=>SetHover(el.value)}
                                    onClick={()=>ChangeEnableSpan(el.title)} >{el.title}</div>
                            )
                        })}
                    </div>

                }
            </div>


        </>
    );
};

