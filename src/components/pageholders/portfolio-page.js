import React, { Component } from "react"
import Intro from "../intro"
import Squiggle from "../design_el/squiggle"
class PortfolioPageholder extends Component {
  state = {}
  render() {
    return (
      <div className="pageholder portfolio-page">
        <h1>Portfolio.</h1>
        <Squiggle length="200px" animated="true"></Squiggle>
        <p className="small-caps rust construction">
          // Portfolio is under construction.
        </p>
        <h4>While I build out my case studies & blog, here are some recent projects you can ask me about:</h4>
        <ul>
        <li>
            <h3><span class="client">Big Picture Trading</span><span>Learning Platform Prototypes</span></h3>
            <h4 className="project-tagline small-caps">UX RESEARCH | PRODUCT DESIGN | VISUAL DESIGN | PROTOTYPING</h4>
            <div className="project-details">
              <p>BPT's outdated design and near-impossible navigability has been cannibalizing its recent uptick in success as an online-learning platform & options trading resource.</p>
              <p>With constraints on technology and a staff spread very thin, both content-production and end-user experience design were factored into progressive updates to existing workflows and web infrastructure with little interruption.<em className="rust">The sales team has reported a significant increase in conversions and membership retention since these updates were introduced.</em></p>
              <p> <strong>Up next is a complete platform update and e-Commerce revamp incorporating UX insights gleaned from these early experiments.</strong> </p>
            </div>
          </li>
          <li>
            <h3><span class="client">Lemon Meringue Studios</span><span>Branding & Web Presence Consult</span></h3>
            <div className="project-details">
              <p><em>"Doing the right thing"</em> sometimes means doing less work and recommending solutions that already exist.</p>
            </div>
          </li>
        <li>
            <h3><span class="client">Plast Canada</span><span>Love Sun Motion Life Summer Program Site</span></h3>
            <div className="project-details">
              <p><em>"Doing the right thing"</em> sometimes means doing less work and recommending solutions that already exist.</p>
            </div>
          </li>
          <li>
            <h3><span class="client">PagerDuty</span><span>Chat App Integrations Product Design</span></h3>
            <div className="project-details">
              <p><em>"Doing the right thing"</em> sometimes means doing less work and recommending solutions that already exist.</p>
            </div>
          </li>
          <li>
            <h3><span class="client">PagerDuty</span><span>Icons for Visceral Understanding</span></h3>
            <div className="project-details">
              <p><em>"Doing the right thing"</em> sometimes means doing less work and recommending solutions that already exist.</p>
            </div>
          </li>

        </ul>
        <h4>And here are some fun lil things on github, because they're easy:</h4>
        <ul>
          <li><h3>Code Test for A Startup</h3>
          <p>Though I did not get the gig, in later interviews I was informed that this was the best version of the take home test they'd ever seen. In addition to dusting off my javascript life, I made sure to include some lovely microinteractions to flex some of my UX chops.</p>
          </li>
          <li><h3>Morphing Wireframes Landing Page</h3>
          <p>Doesn't quite match the aesthetic of this site, I created this lofi-to-hifi wireframe animation with the Greensock svg animation library.</p>
          </li>
          <li><h3>Code Test for A Startup</h3>
          <p>Though I did not get the gig, in later interviews I was informed that this was the best version of the take home test they'd ever seen. In addition to dusting off my javascript life, I made sure to include some lovely microinteractions to flex some of my UX chops.</p>
          </li>
        </ul>
        {/* <p>In the meantime, check out these fun little gadgets I've built:</p> */}
      </div>
    )
  }
}

export default PortfolioPageholder
