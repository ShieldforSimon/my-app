import React from "react";
import { useState } from "react";

export function UnderlineChoose() {
const items=["Tab1","Tab2","Tab3"]
const [click,setClick]=useState(0);
const TextBorder= {
    borderBottom:"black,solid,2px"
}
return (
    <div>
        {items.map((item,index)=>(
            <span 
            key={item}
            onClick={()=>setClick(index)}
            style={{borderBottom:index===click?"1px solid black":"none"}}>
                {item}
</span>
        ))
    }
    </div>
)
}