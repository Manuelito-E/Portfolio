import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    
    const [menu, setMenu] = useState("navigation-off");
    const navigationRef = useRef(null);
  
    useEffect(() => {
      // Add a click event listener to the entire document
      document.addEventListener("click", handleClickOutside);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
  
    const handleMenu = () => {
      if (menu === "navigation") {
        setMenu("navigation-off");
      }
      
       else {
        setMenu("navigation");
      }
    };
  
    const handleClickOutside = (e) => {
      // Check if the click occurred outside the navigation container
      if (navigationRef.current && !navigationRef.current.contains(e.target)) {
        setMenu("navigation-off");
      }
    };

    const closeNavigation = () => {
      // Close the navigation menu
      setMenu("navigation-off");
    };

    return (
    <div className="navbar">
        <div className="header">
            <div className="logo">
                <p>Portfolio</p>
            </div>

            <div className="nav">
                <nav>
                    <Link to = "/">Home</Link>
                    <Link to = "/about">About</Link>
                    <Link to = "/about">Skill</Link>
                    <Link to = "/service">Service</Link>
                    <Link to = "/contact">Contact</Link>
                </nav>
            </div>

            <div className="social_acct">
              <Link to = "#">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="-204.79995 -341.33325 1774.9329 2047.9995"><path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/></svg>
              </Link>
              <Link to = "#">
              <img src="\logo.png" alt="" height="25" width="24"/>
              </Link>
              <Link to = "#">
              <img src="\twitter.png" alt="" height="25" width='24' />
              </Link>
            </div>

            
            
            <div ref={navigationRef} className="menu">
              <button onClick={()=>{
                handleMenu()
              }}>
                   <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              </button>
              </div>
        </div>
        <div className={menu}>
        <ul>
            <li><Link to = "/" onClick = {closeNavigation}>Home</Link></li>
            <li><Link to = "/about" onClick = {closeNavigation}>About</Link></li>
            <li><Link to = "/about" onClick = {closeNavigation}>Skill</Link></li>
            <li><Link to = "/service" onClick = {closeNavigation}>Service</Link></li>
            <li><Link to = "/contact" onClick = {closeNavigation}>Contact</Link></li>
            <div className="scroll_btn">
                <button type="submit"><a href = "#home"> To-Top</a></button>
            </div> 
        </ul>
      </div>
    </div>
    );
}
 
export default Navbar;