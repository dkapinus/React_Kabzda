import React, {useState} from 'react';


type OnOffType = {

}





export const OnOff = (props:OnOffType) => {

    let [work,setWork]=useState(false)

    const StyleButtonON = {
        width:'30px',
        height:'30px',
        border: '1px solid black',
        backgroundColor:work ? 'green':'white',
    }

    const StyleButtonOFF = {
        width:'30px',
        height:'30px',
        border: '1px solid black',
        backgroundColor:work ? 'white':'red',

    }

    const Style = {
        width:'30px',
        height:'30px',
        borderRadius:'15px',
        display:'inline-block',
        border: '1px solid black',
        backgroundColor:work ? 'green':'red',
        marginLeft:'5px'
    }


    return ( <span>

            <span  onClick={()=>{setWork(false)}} style={StyleButtonOFF}>
               OFF
            </span>
            <span onClick={()=>{setWork(true)}}style={StyleButtonON}>
                ON
            </span>
            <span style={Style}>

            </span>
        </span>

    );
};




