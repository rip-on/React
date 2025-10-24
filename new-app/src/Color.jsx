import React, {useState} from "react";

function Color(){
    const [color, setColor] = useState("#FFFFFF");

    function changeColor(e){
         setColor(e.target.value)
    }
    return(
        <div className="color-container">
                <h1>Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
                </div>

            <label htmlFor="">Select a color:</label>
            <input type="color" value={color} onChange={changeColor} />
        </div>
    )
}

export default Color