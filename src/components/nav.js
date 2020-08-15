import React, { Component } from "react"
import { Link } from "gatsby"
import Line from "./design_el/line"

class Nav extends Component {
  state = {}
  render() {
    return (
      <nav>
        <Line length="20px"></Line>
        <ul>
          <li>
            <Link to="/portfolio/">Portfolio</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
        <Line length="20px"></Line>
        {/* <p className="close-text">close</p> */}
      </nav>
    )
  }
}

export default Nav
