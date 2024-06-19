import React, { useState, useCallback,useEffect,Children } from "react";

export function Typed({msg,className}){
    const [text,setText]=useState("");
   //console.log(msg);

    useEffect(  ()=>{
        if (text.length<msg.length){
            setTimeout(() => {  setText(text+msg[text.length]); }, 90);
            console.log(text);
            
        }
        //setText(msg);

    },[text]);
    return(
        <p className={className}>{text}</p>
    )
}
