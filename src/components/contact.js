import React, { Component } from "react"
import Button from "./design_el/button"
import Squiggle from "./design_el/squiggle"
import { useInView } from 'react-intersection-observer'

const Contact = props => {
  return (
    <div className="contact" id="contact">
      <Squiggle length="200px"></Squiggle>
      <h3>Let's chat about making things good.</h3>
      <p className="small-caps">and making good things even better :)</p>
      <Button url="mailto:c.n.soltys@gmail.com" alt="email">
        EMAIL ME
      </Button>
    </div>
  )
}

export default Contact
