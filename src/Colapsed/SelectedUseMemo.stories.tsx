

import React, {useMemo, useState} from "react";
import s from "./three.module.css";
import {ItemsType, SelectedUseMemo} from "./SelectedUseMemo";

export default {
    title: 'ThreeOptionSelect',
    component: SelectedUseMemo
}

export type FilterValueType ='Belarus'|'Ukraine'|'Spain'

export const SelectedMemo = ()=>{

    const [value,SetValue]=useState(2)


    const [items,SetItems]=useState<ItemsType[]>([
        {value:1,title:'Minsk', country:'Belarus',isDone:true},
        {value:2,title:'Brest', country:'Belarus',isDone:false},
        {value:3,title:'Grodno', country:'Belarus',isDone:true},
        {value:4,title:'Kiev',country:'Ukraine',isDone:false},
        {value:5,title:'Lvov',country:'Ukraine',isDone:true},
        {value:6,title:'Madrid',country:'Spain',isDone:false},
        {value:7,title:'Barcelona',country:'Spain',isDone:true},
        {value:8,title:'Malaga',country:'Spain',isDone:true},
    ])



        return(

            <SelectedUseMemo items ={items}
                             value={value}
                            />

       )
}



