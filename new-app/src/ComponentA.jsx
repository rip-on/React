//useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level


/*
Provider Component
1. import {createContext} from 'react'
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}>
    <child/>
    </MyComponent.Provider>


CONSUME COMPONENTS
1. import React, {useContext} from 'react';
    import {MyContext} from './ComponentA';
2. const value = useContext(MyContext);
*/
import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("JAHID");
    return(<>
    <div className="boxA">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <userContext.Provider value={user}>
            <ComponentB/>
        </userContext.Provider>
    </div>
    </>)
}

export default ComponentA;