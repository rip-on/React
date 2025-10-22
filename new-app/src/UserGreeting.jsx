import PropTypes from 'prop-types'

function UserGreeting(props){

    // if(props.isLoggedIn){
    // return <h1>Welcome {props.username}</h1>}
    // else{
    //     return <h1> Please log in to continue</h1>
    // }
  
    //ANOTHER

    /* return(props.isLoggedIn ? <h1>Welcome {props.username}</h1> :
                        <h1>Please log in to continue...</h1>)*/

    const welcomeMessage = <h1 className="welcome-message">
                            Welcome {props.username}
                            </h1>
    const loginPrompt = <h1 className="login-prompt">
                        Please log in to continue
                        </h1>
    
    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
};

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "GUEST",
};
export default UserGreeting