import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Line from "./design_el/line"

const Nav = () => {
  return ( 
    <nav>
      
        <Line length="20px"></Line>
          <ul>
            <li>
              <Link to="/#projects">projects</Link>
            </li>
            <li>
              <Link to="/#skills">skills</Link>
            </li>
            <li>
              <Link to="/#about">about</Link>
            </li>
            <li>
              <Link to="/#contact">contact</Link>
            </li>
          </ul>
        <Line length="20px"></Line>
        {/* <p className="close-text">close</p> */}
      </nav>

   );
}
 
export default Nav;
