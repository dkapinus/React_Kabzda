import React from 'react';
import './App.css';
import {Rating} from "./Components/Rating";
import {Accordion} from "./Components/Accordion";
import {OnOff} from "./Components/Onoff/OnOff";

function App() {
  return (
    <div >
        <AppTitle title={'This is App component'}/>
        <Accordion title={'Menu'} />
        <Accordion title={'Hello subscriber'} />
        <Rating />

        <OnOff />
        <OnOff />
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
