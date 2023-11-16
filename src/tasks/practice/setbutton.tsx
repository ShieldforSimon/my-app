import React,{useState} from "react";
type CardMessage ={
  title: string;
  message: string;
}

export const Card:React.FC<CardMessage> =({title,message}) => {

  const [infor,setInfor]=useState(false);

return (
  <div
  onMouseEnter={()=>setInfor(true)}
    onMouseLeave={()=>setInfor(false)}
  >
    <h3>{title}</h3>
    {infor&& <p>{message}</p>}
  </div>
)
}






