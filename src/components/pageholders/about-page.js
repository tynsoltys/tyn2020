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
        <p className="rusty-rail">
          As someone who's designed, built, and maintained many different things over her career as a developer, I've witnessed how upstream frustrations and ambiguity can flow downstream and
          impact the end user experience. 
        </p>

        <h2>
          I became a designer because I want to create things that I'd be
          delighted to use, are a joy to build, and ultimately allow <em>all</em> folks to live their best lives.
        </h2>
        <p className="highlight-box highlight-right">
          Through the lenses of product, interaction, and workflow design, my
          dream is to make all user experiences in the digital world work{" "}
          <strong>
            not <em>only</em> for a diverse pool of end-users, but for{" "}
            <em>all </em> stakeholders: developers, content producers, and
            administrators too.
          </strong>
          <hr/>
          <span className="small-caps"> CHECK OUT MY PHILOSOPHIES</span>
        </p>
        {/* <h3>Conceptually, I want things I make to feel like:</h3>
        <ul className="things-like">
          <li>good disney magic: is kinda cute and saves your day</li>
          <li>super chill synthwave playlists: very technology, much relax</li>
          <li>someone holding a door open for you: feels kinda nice to be thought of</li>
          <li>holding the door open for someone: feels kinda good being nice</li>
          <li>cutting into a perfect avocado: no further explanation needed</li>
        </ul> */}
      </div>
    )
  }
}

export default AboutPageholder
