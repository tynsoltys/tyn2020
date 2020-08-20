import React, { Component } from "react"

import Squiggle from "../design_el/squiggle"
import Line from "../design_el/line"
class ContactPageholder extends Component {
  state = {}
  render() {
    return (
      <div className="pageholder contact-page">
        <h1>Philosophies</h1>
        <Squiggle length="200px"></Squiggle>
        {/* <p className="small-caps rust construction">
          // This site is still under construction.
        </p> */}
        <p className="small-caps">
          <span className="rust">//</span> As a technology lover, I'm quick to adopt and participate in the latest and greatest, but just like everyone else, often feel overwhelmed and fatigued by it all...
        </p>

        <h3>Contact</h3>
        <div className="skillset-container">
          <div className="skillset">
            <h4>DESIGN</h4>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="skillset">
            <h4>CODE</h4>
            <ul>
              <li>TOOLS</li>
            </ul>
          </div>
          <div className="skillset">
            <h4>Other</h4>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <p className="small-caps">...And so much more!!!</p>
        <h4>
          Fluent in Ukrainian, can survive comfortably and bountifully in the
          wilderness while I apply first aid, music nerd, bike nerd, printmaker
          & artist, amateur chef and novice sourdough head.
        </h4>
      </div>
    )
  }
}

export default ContactPageholder
