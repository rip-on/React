//click event = An interaction when a user clicks on a specific element we can respond to clicks by passing a callback to the onClick event handler.


function Profile(){
    const imageURL = './src/assets/profile.jpg';

    const click = (e) => e.target.style.display = "none";//console.log("You clicked in PHOTO");

    return(<img onClick = {(e) => click(e)} src={imageURL} ></img>)



}

export default Profile