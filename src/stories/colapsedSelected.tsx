import React, {ChangeEvent, useState} from 'react';

type CollapsedSelectedType = {

}



export const CollapsedSelected = (props:CollapsedSelectedType) => {

    const [editMode,setEdit]=useState(false)

    const ChangeStatus=() => {
        setEdit(!editMode)
    }

    const [select,SetSelect]=useState('Minsk')

    const ChangeEnableSpan =(e:ChangeEvent<HTMLSelectElement>)=> {
     SetSelect(e.currentTarget.value)
    }

    return (
        <>
            {editMode
            ? <select value={select} onBlur={ChangeStatus} autoFocus onChange={ChangeEnableSpan}>
                <option>{'Kiev'}</option>
                <option>{'Minsk'}</option>
                <option>{'Vienna'}</option>
        </select>


            : <span onDoubleClick={ChangeStatus}>{select}</span>}
        </>
    );
};

