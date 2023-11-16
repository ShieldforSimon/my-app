import { type } from "os";
import React from "react";

type Article={
    topimg:string;
    usename:string;
    para:string;
}
type Props={
    issue:string;   
    data:Article[];
}
function ArticleItem(props:{item:Article}){
    const{topimg,usename,para}=props.item;
    return (
        <div key={usename}>
            <div>{topimg}</div>
            <div>{usename}</div>
            <div>{para}</div>
        </div>

    )}

export function ArticleList(props:Props){
    const {issue,data}=props;
    return (
        <div> 
            {data.map(article=>(
            <div>
                <h1>{issue}</h1>
                <ArticleItem item={article}/>
            </div>
))}
        </div>
)
}
