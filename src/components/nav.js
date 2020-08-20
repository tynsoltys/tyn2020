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
            <Link to="/about/">about</Link>
          </li>
          <li>
            <Link to="/philosophies/">philosophies</Link>
          </li>
          <li>
            <Link to="/skillsets/">skillsets</Link>
          </li>
          <li>
          <Link to="/portfolio/">portfolio</Link>
          </li>

          <li>
            <Link to="/contact/">contact</Link>
          </li>
        </ul>
        <Line length="20px"></Line>
        {/* <p className="close-text">close</p> */}
      </nav>
    )
  }
}

export default Nav
