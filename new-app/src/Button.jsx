/* Click Event - An interaction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onclick event handler */
//prevent function calling right away () => handleClick2("JHA")


function Button(){

    const handleClick = () => console.log("OUCH~🤨");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    let count = 0;

    const click = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }

    const eventClick = (e) => e.target.textContet = "OUCH!!🤨"//console.log(e);
    return(<>
    <button onClick={handleClick}>Click Here 😾</button>
    <button onClick={() => handleClick2("JAHID")}>Click2</button>
    <button onClick={() => click("RIPON")}>Click Count!</button>
    <button onClick={(e) => eventClick(e)}>EVENT CLICK~</button>
    </>)

}

export default Button