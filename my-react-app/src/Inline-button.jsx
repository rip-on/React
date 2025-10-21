const styles = {
    backgroundColor: "hsl(300,100%,50%",
    color: "white",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
}


function InlineButton(){
    return(
        <button style={styles}>Click Here!</button>
    );
}

export default InlineButton;