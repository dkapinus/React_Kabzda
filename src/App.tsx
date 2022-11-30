import React from 'react';
import './App.css';
import {Rating} from "./Components/Rating";

function App() {
  return (
    <div >
        <AppTitle title={'This is App component'}/>
        <Rating value={0}/>
        <Accordion title={'Menu'}/>
        <Accordion title={'Hello subscriber'}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

function AppTitle (props:any){
  return (
      <>
          {props.title}
      </>
  )
}





function Accordion (props:any){
    return (
        <div>
           <AccordionTitle title={props.title}/>
              <AccordionBody />
        </div>
    )
}

function AccordionTitle (props:any){
    return (
        <div>
            <h3>---{props.title}---</h3>


        </div>
    )
}

function AccordionBody (props:any){
    return (
        <div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        </div>
    )
}


export default App;
