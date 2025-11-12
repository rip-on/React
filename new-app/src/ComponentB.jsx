import ComponentC from "./ComponentC";


function ComponentB(){

    return(<>
    <div className="boxA">
        <h1>ComponentB</h1>
        <ComponentC/>
    </div>
    </>)
}

export default ComponentB;