import "../src/Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import sologo from "../src/img/sologo.svg"
import React, { useRef} from 'react';



function Navbar(){

  const navRef = useRef();

  const showNav = ( ) => {
    navRef.current.classList.toggle("responsive_nav")
    

    }

  
   return(
      <header >
          <h3><img src={sologo} alt="" className="sologo" /></h3>

          <nav ref={navRef}>      
                 <a href="/">Developers</a>
                  <a href="/">Network</a>
                  <a href="/">Validator</a>
                  <a href="/">Community</a>
                  < a href="/">Ecosystem</a>
                  <button className="nav-btn nav-btn-close" onClick={showNav}>
                    <FaTimes />
                  </button>           
            </nav>
            <button className="nav-btn " onClick={showNav}>
              <FaBars />
            </button>

      </header>
      
    )


}


export default Navbar;











