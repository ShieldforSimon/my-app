import React,{useState} from "react";

type Props = { 
    img:string;
    alt:string;
}
export const ShowImg:React.FC<Props>=({img,alt})=>{
    return (
    <img src={img} alt={alt}/>
    )
};