import React from 'react';
import {useState} from "react";


export default {
    title: 'React Memo',

}


type TableType = {
    user:Array<string>
}
export const Table = (props:TableType) => {
    console.log('users')
    return <div>

        {props.user.map((el,index)=>{
            return(
                <li key={index}>
                    {el}
                </li>
            )
        })}
    </div>
}
const  TableSecret=React.memo(Table)


export const ReactMemo = () => {

    const [count, setCount] = useState(0)

    const [user, setUser] = useState(['Dimych', 'Valera', 'Julian'])

    const Rerender =()=> {
        setUser([...user,'Morty'+' ' + Date()])
    }

    return (

        <>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={Rerender}>Rerender user</button>
            <Header count={count} />
            <TableSecret user={user} />
        </>
    )
}



type HeaderType = {
    count: number

}

export const Header = (props: HeaderType) => {



    return <div>

        {props.count}
    </div>
}