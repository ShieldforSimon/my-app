import React,{useState} from "react";


type NumArray={
    data:number[];
}
export const ArraySum:React.FC<NumArray>=({data})=>{


    return (
        <div>{data.reduce((sum, curr, index)=>sum+(index%2 ===0 ? curr: -curr), 0)}</div>
    )
}

  
 