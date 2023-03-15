import React, {useCallback, useMemo} from 'react';
import {useState} from "react";


export default {
    title: 'React Memo',

}



export const ReactMemo = () => {

    const [count, setCount] = useState(0)

    const [user, setUser] = useState(['Dimych', 'Valera', 'Julian'])

    const MainRerender =useMemo(()=>{return user.filter((el)=>el.toLocaleLowerCase().indexOf('a')>-1)},[user])


    const  addCount =()=> {
        setCount(count+1)
    }

    const memorized=useCallback(()=>{ setUser([...user,'Marty'+' ' + Date()])},[user])

    return (

        <>

            <button onClick={memorized}>Rerender user</button>
            <HeaderSecret count={count} />
            <TableSecret user={MainRerender} addCount={addCount} />
        </>
    )
}



type HeaderType = {
    count: number

}

export const Header = (props: HeaderType) => {
console.log('bhhbh')
    return <div>

        {props.count}
    </div>
}

type TableType = {
    user:Array<string>
    addCount:()=>void
}

export const Table = (props:TableType) => {
    console.log('users')
    return <div>
        <button onClick={()=>props.addCount()}>+</button>
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

const HeaderSecret=React.memo(Header)
