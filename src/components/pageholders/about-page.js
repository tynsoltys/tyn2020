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
          <span className="rust">//</span> I want to build a digital world that
          feels like magic...
          <br />
          It helps us, makes us smile, and then gets out of the way.
        </p>
        <h4>
          I became a designer because I want to create things that I'd be
          delighted to use: things that make my life easier, spark joy, and work
          like they should.
        </h4>

        <p class="small-para">
          As someone who's designed, built, and maintained{" "}
          <a href="#skills">many forms of technology</a> over the past 7 years,
          I've witnessed how upstream frustrations can flow downstream and
          impact the end user experience.
        </p>

        <p class="small-para">
          Through the lenses of product, interaction, and workflow design, my
          dream is to make all user experiences in the digital world work{" "}
          <strong>
            not <em>only</em> for a diverse pool of end-users, but for{" "}
            <em>all </em> stakeholders: developers, content producers, and
            administrators too.
          </strong>
        </p>

        <hr />
        <h3>Philosophies</h3>
        <ol className="philosophies">
          <li>
            <h3 className="philosophy-title">Functional, but fun.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eius minus reiciendis eum voluptatum blanditiis autem
              quos molestiae quia. Fuga saepe, sequi commodi temporibus quis
              explicabo unde ipsam quae nisi!
            </p>
          </li>
          <li>
            <h3 className="philosophy-title">All together now.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eius minus reiciendis eum voluptatum blanditiis autem
              quos molestiae quia. Fuga saepe, sequi commodi temporibus quis
              explicabo unde ipsam quae nisi!
            </p>
          </li>
          <li>
            <h3 className="philosophy-title">Mise en place.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eius minus reiciendis eum voluptatum blanditiis autem
              quos molestiae quia. Fuga saepe, sequi commodi temporibus quis
              explicabo unde ipsam quae nisi!
            </p>
          </li>
          <li>
            <h3 className="philosophy-title">Laterally (not literally).</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eius minus reiciendis eum voluptatum blanditiis autem
              quos molestiae quia. Fuga saepe, sequi commodi temporibus quis
              explicabo unde ipsam quae nisi!
            </p>
          </li>
          <li>
            <h3 className="philosophy-title">
              Why? Why? Why? Why? Why? Why? Why? Why?
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eius minus reiciendis eum voluptatum blanditiis autem
              quos molestiae quia. Fuga saepe, sequi commodi temporibus quis
              explicabo unde ipsam quae nisi!
            </p>
          </li>
        </ol>

        <hr />
        <h3>Skillsets</h3>
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

export default AboutPageholder
