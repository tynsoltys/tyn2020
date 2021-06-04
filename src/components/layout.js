/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../fonts/d39898aa-94a3-4115-bc71-65287da5a969.woff2"
import "../fonts/fonts.scss"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  const NavContext = React.createContext(false);
  const [ navOpen, setNavOpen ] = useState(false);
  const [ scrollPosition, setScrollPosition] = useState(0);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  
    <NavContext.Provider>
      <div className="container">{children}</div>
    </NavContext.Provider>
  
  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
