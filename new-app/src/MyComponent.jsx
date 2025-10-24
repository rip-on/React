//React hook = Special function that allows functional components to use React features without writing class components (React v16.8)
//(useState, useEffect, useContext, useReducer, UseCallback, and more.....)


//useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM.
//[name, setName]


import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("GUEST");

    const [age, setAge] = useState(0);

    const [IsEmployed , setIsEmployed] = useState(false);

    const UpdateName = () => {
        setName("Mohammad");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleStatus = () => {
        setIsEmployed(!IsEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={UpdateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsEmployed: {IsEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>toggle Status</button>
        </div>
    )
}

export default MyComponent