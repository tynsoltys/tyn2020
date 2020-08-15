import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import "../styles/styles.scss"

const Header = () => (
  <header>
    <Link className="logo" to="/">
      <h1>TYN</h1>
    </Link>

    <Nav></Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
