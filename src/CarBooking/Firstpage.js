// import React from 'react'
import { Link } from 'react-router-dom';

export const Firstpage = () => {
  return (
    <div>
        <section id="nav" className="navebar">
            <ul>
              <img src="./image/image.png"/>
                <li>Home</li>
                <li>Partners</li>
                <li>Booking</li>
                <li>Cities</li>
                <li>Supports</li>
                <li>Contect</li>
          
                <input type="text" id="search"placeholder="search here.."/>
                <li> <Link to="/signup">Do you want to Sign Up?</Link> <button>signin</button></li> 
            </ul>
        </section>
    </div>
  );
}
