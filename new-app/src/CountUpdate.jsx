//updater function = A function passed as an argument to setState() usually ex. setYear(arrow function)

//Allow for safe updates based on the previous state Used with multiple state updates and asynchronous functions 
//Good practice to use updater functions 

import React, { useState} from "react";

function CountUpdate(){
    const [count, setCount] = useState();

    function increment(){


        // Takes the PENDING state to calculate NEXT state.
        //React puts your updater function in a queue (waiting in line)
        //During the Next render, it wil call them in the same order






        //Uses the CURRENT state to calculate the NEXT state.
        //set functions do not trigger an update
        //React batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update.


        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        //UPDATE

         
    }
    function decrement(){
        setCount(c => c-1);
        setCount(c => c-1);
        setCount(c => c-1);

    }
    function reset(){
        setCount(0);
    }
    

      return(<div className="container">
            <p className="msg">{count}</p>
            <button className="btn" onClick={decrement}>Decrement</button>

            <button className="btn" onClick={reset}>Reset</button>
            
            <button className="btn" onClick={increment}>Increment</button>

    </div>);
   
}

export default CountUpdate