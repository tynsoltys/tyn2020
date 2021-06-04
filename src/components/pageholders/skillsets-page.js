import React, { Component } from "react"

import Squiggle from "../design_el/squiggle"
import Line from "../design_el/line"
class SkillsetsPageholder extends Component {
  state = {}
  render() {
    return (
      <div className="pageholder skillsets-page">
        <h1>Skillsets</h1>
        <Squiggle length="200px"></Squiggle>
        <p className="small-caps">// <em>is she an engineer? is she a designer? is she ..*gulp*</em> <span className="rusty">..an alien unicorn?</span></p>
        {/* <p>What I <em>do</em> know, is that I truly love designing, testing, and building prototypes that get answers and ultimately help build better products that make lives easier.</p> */}
        <h2 class="big-text">Here's a few things I really like to do (and think I'm good at):</h2>
        <h2><a class="italic" href="#skillsets">Skip to classic mode here.</a> </h2>
        <ul className="competencies">
          <li>
            <div class="rusty-rai">
              <h3>Information Design & Architecture</h3>
              <p>I've come to learn that I have one of those handy 3D brains that thinks in colour coded matrices and enjoys grappling with very complex problems and technical architecture, and translating the abstract into tangible interfaces through the developer, configuration, and end-user layers. While I appreciate a good-looking product, I'm far more passionate about well-executed and seamless logic, and helping designers and developers understand their critical relationship to one another. </p>
            </div>
          </li>
          <li>
            <div class="rusty-rai">
              <h3>High Fidelity Prototyping</h3>
              <p>As a rockstar CSS stylist and pretty decent JS wrangler, I <em>could</em> design-build a fair portion of a modern web app singlehandedly. However, my true motivation lies in delivering and refining awesome end user experiences through experimentation.  With bonus skills like real-time code editing, understanding APIs, oAuth, docs and other technical stuff, I'm comfortable interfacing with clients, devs, product folk and search engines. From lowest-of-the-low-fi prototypes, all the way through to repos that get cloned by the devs, my coding skills allow me to bring ideas to life rapidly and with far less friction and process than a typical hi-fi design workflow. Plus I'm quite comfortable going into github and adding 3px of margin-top to that awkwardly positioned icon without needing to make a whole QA ticket about it.</p>
              </div>
          </li>
          <li>
            <div class="rusty-rai">
              <h3>Design Systems 🔥</h3>
              <p>As someone who has spent plenty of time on both sides of the fence, I'm thoroughly seasoned in negotiating designer dreams with developer realities (often through conversations with myself). From knowing which questions to ask, to establishing requirements, to having thoroughly explored my component library and usage documentation fantasies, I'm deeply empathetic with all users of this important UX moment. When decision fatigue and confusion are minimized in the upstream process, it's often the case that efficiency, quality, ownership, cooperation, and creativity shine through to create a reflexively seamless end product.</p>
            </div>
          </li>
          <li>
            <div class="rusty-rai">
              <h3>Product Semiotics</h3>
              <p>At the intersection of information design, branding, and design systems, lie the fundamental principles of good UX: clarity, familiarity, and consistent usage of symbols, colours, and interaction patterns to create intuitive, usable, and understandable products. Whether its conducting colour contrast audits, assembling icon inventories, or running word association exercises, putting real thought behind small details has a big impact on the visceral, subconscious user experience that elevate a product from usable to magical. </p>
            </div>
          </li>
        </ul>
        
        <h3>Skillsets</h3>
        <div className="skillset-container">
          <div className="skillset">
            <h4>DESIGN</h4>
            <ul>
              <li><p>Sketch/Abstract, sometimes Figma & Adobe<span> better than napkins (though maybe not better than Rhodia dotpads)</span></p></li>
              <li><p>UX research & strategy<span> observe, report, & inform your solutions, qual & quant style</span></p></li>
              <li><p>Information Architecture<span> be smart, organized, & consistent (lest you hate yourself)</span></p></li>
              <li><p>Prototyping & User Testing<span> from actual napkins to full-functionality</span></p></li>  
              <li><p>Accessibility & Interaction Design<span> be considerate, kind, and helpful</span></p></li>
              <li><p>Adaptive & Responsive Design<span> because devices</span></p></li>
              <li><p>Visual Design & Branding<span></span></p></li>
            </ul>
          </div>
          <div className="skillset">
            <h4>CODE</h4>
            <ul>
              <li><p>JS: ES6+ / React / Redux<span> or whatever thing that's needed</span></p></li>
              <li><p>Gatsby / Graph QL / JAMstack & SSGs<span> especially for the clean, JS driven workflows</span></p></li>
              <li><p>Design systems & component architecture<span> LEGOs for the developer soul</span></p></li>
              <li><p>custom Wordpress implementations<span> </span></p></li>
              <li><p>CSS3, Sass, Tailwind, etc.<span> pixel perfection is my</span></p></li>
              <li><p>Basic node.js & MEANstack<span>not hopeless on the backend</span></p></li>
            </ul>
          </div>
          <div className="skillset" id="skillsets">
            <h4>RANDOM</h4>
            <ul>
              <li><p>youth leadership programming<span> great for working with international team</span></p></li>
              <li><p>fluent in ukrainian<span> great for working with international team</span></p></li>
              <li><p>wilderness advanced first aid<span> I take remote work very seriously</span></p></li>
              <li><p>all the crafts</p></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsetsPageholder
