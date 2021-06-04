import React, { Component } from "react"

import Squiggle from "../design_el/squiggle"
import Line from "../design_el/line"
class ContactPageholder extends Component {
  state = {}
  render() {
    return (
      <div className="pageholder contact-page">
        <h1>Contact</h1>
        <Squiggle length="200px"></Squiggle>
        {/* <p className="small-caps rust construction">
          // This site is still under construction.
        </p> */}
        <p className="small-caps">
          <span className="rust">//</span> As a technology lover, I'm quick to adopt and participate in the latest and greatest, but just like everyone else, often feel overwhelmed and fatigued by it all...
        </p>
          <button url="mailto:c.n.soltys@gmail.com" alt="email">
            EMAIL ME
          </button>

      </div>
    )
  }
}

export default ContactPageholder
