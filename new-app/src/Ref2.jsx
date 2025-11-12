

import React, {useState, useEffect, useRef} from "react";

function Ref2(){
    const inputRef = useRef(null);

    useEffect(()=>{
        console.log("COMPONENT RENDERED");
        console.log(inputRef);
        
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
        
    }

    return(
        <>
        <button onClick={handleClick}>Click here!
        </button>
        <input ref={inputRef}/>
        </>
    )
}


export default Ref2;