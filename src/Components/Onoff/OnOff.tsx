import React from 'react';


type OnOffType = {
    working: () => void
    work: boolean
}


export const OnOff = (props: OnOffType) => {


    const SetWork = () => {
        props.working()
    }

    const StyleButtonON = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.work ? 'green' : 'white',
    }

    const StyleButtonOFF = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.work ? 'white' : 'red',

    }

    const Style = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.work ? 'green' : 'red',
        marginLeft: '5px'
    }


    return (<span>

            <span onClick={() => {
                SetWork()
            }} style={StyleButtonOFF}>
               OFF
            </span>
            <span onClick={() => {
                SetWork()
            }} style={StyleButtonON}>
                ON
            </span>
            <span style={Style}>

            </span>
        </span>

    );
};




