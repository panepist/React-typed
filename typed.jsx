import React, { useState, useEffect } from "react";

//function typing text
export function Typed({msg,className}){
    const [text,setText]=useState("");

    useEffect(  ()=>{
        if (text.length<msg.length){
            //delay 90 ms 
            //typing Character every 90 msec
            setTimeout(() => {  setText(text+msg[text.length]); }, 90);
            console.log(text);            
        }     
    },[text]);
    return(
        <p className={className}>{text}</p>
    )
}

