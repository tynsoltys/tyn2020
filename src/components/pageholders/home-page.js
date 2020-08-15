import React, { Component } from "react"

import Squiggle from "../design_el/squiggle"
class HomePageholder extends Component {
  state = {}
  render() {
    return (
      <div className="pageholder home-page">
        <h1>Greetings.</h1>
        <Squiggle length="200px" animated="true"></Squiggle>
        <p className="small-caps rust construction">
          // This site is actively under construction
        </p>
        <h2 className="big-text">
          I<span>&rsquo;</span>m Tyn, a multidisciplinary designer, web
          developer, and super creative person based in Toronto
          <span className="rusty" title="cool">
            .
          </span>
        </h2>
        <p className="small-caps">
          <span className="rust">//</span> I want to build a digital world that
          feels like magic...
          <br />
          It helps us, makes us smile, and then gets out of the way.
        </p>
      </div>
    )
  }
}

export default HomePageholder
