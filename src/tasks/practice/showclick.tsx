import React,{useState} from "react";


export function ShowClick(){
    const [num,setNum]=useState(0);
    return (
        <div>
            <p>点击次数:{num}</p>
            <button onClick={()=>{setNum(num+1)}}>点击</button>
        </div>
    )
}