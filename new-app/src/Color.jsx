import React, {useState} from "react";

function Color(){
    const [color, setColor] = useState("#FFFFFF");

    function changeColor(e){
         setColor(e.target.value)
    }
    return(
        <div>
                <h1>Color Picker</h1>
                <div className="color-diplay" style={{backgroundColor: color}}></div>
                <p>Selected Color: {color}</p>
        

            <label htmlFor="">
            Select a color:
            </label>
            <input type="color" value={color} onChange={changeColor} />
        </div>
    )
}

export default Color