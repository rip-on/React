import React,{useState, useEffect, use} from "react";

function Resize(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT LSTENER ADDED")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("event listener removed!");
            
        }
    },[]);

    useEffect( ()=>{
        document.title = `Size: ${width} x ${height}`
    },[width, height])
    
    
    
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