import React, { Component } from "react"

import Squiggle from "./design_el/squiggle"
import HomePageholder from "./pageholders/home-page"

import Contact from "./contact"

const Content = props => {
  return (
    <div className="content-container">
      {props.children}

      {/* <p className="small-caps">DESIGNED AND BUILT BY TYN IN 2021</p> */}
    </div>
  )
}

export default Content
