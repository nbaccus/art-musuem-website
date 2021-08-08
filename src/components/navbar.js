import React, {useState, useEffect} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
     const [windowSize, setWindowSize] = useState(false);

     const checkWindowSize = () => {
          if (window.innerWidth <=500) 
              setWindowSize(true);
      };
     useEffect(() => {
         checkWindowSize();
     },[]);

    return (
        <header className="navbar-container">
             <div className="navbar-wrapper">
               {windowSize ?
               <Link to ="/">
               
               <p id="logo"><b>ART</b> MUSUEM</p>
               </Link>
               :
               <p id="logo"><b>ART</b> MUSUEM</p>
          
               }
            <nav className="navbar">
                <ul>
               <Link to="/">
                    <li>HOME</li>
               </Link>
               <Link to="/about-us">
                    <li>ABOUT US</li>
               </Link>
               <Link to="/contact-us">
                    <li>CONTACT US</li>
               </Link>
               </ul>
               <button>Log in</button>
              </nav>
              </div>
         </header>
    );
}



export default Navbar;
