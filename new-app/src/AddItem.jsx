import React, {useState} from "react";

function AddItem(){

    const [items, setItem] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setItem(i => [...i, newFood]);
    }

    function handleRemoveFood(index){
        setItem(items.filter((__, ind) => ind !== index))
    }

    return(
        <div>
            <p>List of Food:</p>
            <ul>
                {items.map((item, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{item}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Item"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}


export default AddItem