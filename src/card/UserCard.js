
function User() {
   return (
    <div  className="card-container">
      <span className="pro">ONLINE</span>
      <img src="image/swa.jpg" className="img" alt="user"/>
      <h3>Fill Name</h3>
      <p>Front-end devloper</p>
      <div className="buttons">
      <button className="primary">Message</button> 
      <button  className="primary outline">Following </button> 
      </div>
      <div className="skill">
        <h6> Skills</h6>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVAScript</li>
          <li>REACT</li>
        </ul>
      </div>
    </div>
    
   )
}


export const UserCard = () => {
  return <User/>
}
