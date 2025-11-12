import React,{useState, useEffect} from "react";

function Resize(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener("resize", handleResize)

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Height: {height}px</p>
        <p>width: {width}px</p>
        </>
    )

};

export default Resize;