import React from "react";
import './Navbar.css'

function Navbar(){


    return(
       <nav className="navbar">
     <div className="logo">Bill Tracker </div>
     <ul className="nav-links">
       <input type="checkbox" id="checkbox_toggle" />
       <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
       <div className="menu">
         <li><a href="/"> Electricity Bills </a></li>
         <li><a href="/"> Water Bills</a></li>
         
         <li><a href="/"> Internet Bills </a></li>
         <li><a href="/">Other Bills </a></li>
       </div>
     </ul>
   </nav>)

}
export default Navbar;