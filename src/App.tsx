import React, {useState} from 'react';
import './App.css';
import {Rating, ValueType} from "./Components/Rating";
import {Accordion} from "./Components/Accordion";
import {OnOff} from "./Components/Onoff/OnOff";



function App() {

    const [value,SetValue]=useState<ValueType>(0)
    let [collapsed,setCollapsed]=useState(true)
    let [work,setWork]=useState(false)

    const ChangeValue=(setStars: ValueType)=> {
    SetValue(setStars)
    }



  return (
    <div className={'App'}>
        <AppTitle title={'This is App component'}/>
        <Accordion collapsed={collapsed} changeCollapsed={()=>setCollapsed(!collapsed)} title={'Menu'} />
        <Accordion collapsed={collapsed} changeCollapsed={()=>setCollapsed(!collapsed)}  title={'Hello subscriber'} />
        <Rating  value={value} setValue={ChangeValue}/>

        <OnOff work={work} working={()=>setWork(!work)} />
        <OnOff work={work} working={()=>setWork(!work)}/>
    </div>
  );
}

type AppTitleType = {
    title:string
}

function AppTitle (props:AppTitleType){
  return (
      <>
          {props.title}
      </>
  )
}




export default App;
