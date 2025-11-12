import React,{useContext} from "react";
import { userContext } from "./componentA";

import ComponentD from "./ComponentD";


function ComponentC(){
    const user = useContext(userContext);
    return(<>
    <div className="boxA">
        <h1>ComponentC</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <ComponentD/>
    </div>
    </>)
}

export default ComponentC;