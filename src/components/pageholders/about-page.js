import React, { Component } from "react"

import Squiggle from "../design_el/squiggle"
import Line from "../design_el/line"
class AboutPageholder extends Component {
  state = {}
  render() {
    return (
      <div className="pageholder about-page">
        <h1>About Me.</h1>
        <Squiggle length="200px"></Squiggle>
        {/* <p className="small-caps rust construction">
          // This site is still under construction.
        </p> */}
        <p className="small-caps">
          <span className="rust">//</span> As a technology lover, I'm quick to adopt and participate in the latest and greatest, but just like everyone else, often feel overwhelmed, frustrated, and fatigued by it all...
        </p>
        <h2>
          I became a designer because I want to create things that I'd be
          delighted to use and let me live my best life.
        </h2>
        <h3>These things may feel like:</h3>
        <ul className="things-like">
          <li>good disney magic: is kinda cute and saves your day</li>
          <li>super chill synthwave playlists: very technology, much relax</li>
          <li>someone holding a door open for you: feels kinda nice to be thought of</li>
          <li>holding the door open for someone: feels kinda good being nice</li>
          <li>cutting into a perfect avocado: no further explanation needed</li>
        </ul>

        <p class="">
          As someone who's designed, built, and maintained{" "}
          <a href="#skills">many forms of technology</a> over the past 7 years,
          I've witnessed how upstream frustrations and ambiguity can flow downstream and
          impact the end user experience. 
        </p>

        <p >
          Through the lenses of product, interaction, and workflow design, my
          dream is to make all user experiences in the digital world work{" "}
          <strong>
            not <em>only</em> for a diverse pool of end-users, but for{" "}
            <em>all </em> stakeholders: developers, content producers, and
            administrators too.
          </strong>
        </p>

      </div>
    )
  }
}

export default AboutPageholder
