import React, {useState, useEffect} from 'react';
import Logo from '../imgs/Logo.svg';
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
               {/* <img src={Logo} className="Logo" alt="logo"/> */}
               <p id="logo"><b>ART</b> MUSUEM</p>
               </Link>
               :
               <p id="logo"><b>ART</b> MUSUEM</p>
          //   <img src={Logo} className="Logo" alt="logo"/>
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
