import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useEffect} from "react"
import Nav from "./nav"
import "../styles/styles.scss"
// import Jelogo from "./Jelogo"
// import loadable from '@loadable/component'


// const LoadableJelogo = loadable(() => import('./Jelogo'));

const Header = () => (

  <header className="z-50">
      <Link to="/" className="logo bg-navy">
          <h1 className="font-serif">TYN</h1>
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
