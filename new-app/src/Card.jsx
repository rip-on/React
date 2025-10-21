import profilePicture from './assets/profile.jpg'

function Card(){
    return(
      <div className="card">
        <img className="card-image" src={profilePicture} alt="profile picture"></img>
        <h2 className="card-title">Jahid Hasan</h2>
        <p className="card-text">I'm a student pursuing higher education from JnU</p>
      </div>  
    );
}

export default Card