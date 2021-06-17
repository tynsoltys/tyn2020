import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import Header from "../components/header"
import Leaf from "../components/design_el/leaf"
import Squiggle from "../components/design_el/squiggle"
import SEO from "../components/seo"

const PortfolioPDPage = () => (
  <Layout>
    <SEO title="About" />
    <Leaf></Leaf>
    <Header></Header>
    <Content>

    <article>
      <section>
          <h2 className="w-full font-serif uppercase tracking-wide text-3xl mt-0 pt-0">PagerDuty</h2>
          <h3 className="text-5xl w-full font-sans font-bold "><span className="">Designing the </span><em className="inline-block mr-2 font-extrabold"> 3rd </em> Interface</h3>
          <h4 className="uppercase tracking-wider font-normal text-xl">Recreating Apps Within Slack and Microsoft Teams</h4>

          <p class="w-full">
          PagerDuty is a digital operations management platform that notifies and deploys the right teams (IT Teams, primarily) at the right time to solve and prevent IT incidents. Recognizing the benefit of notifying responders as-directly-as-possible, PagerDuty invested in updating and improving its integrations for Slack and Microsoft Teams, the two preeminent workplace communications "chat platforms."
          </p>
          <p class="w-full">
          Working with enterprise clients and being able to focus on design research and execution alone allowed me to truly deepen and expand my skillset in a variety of design tools and methodologies, as well as recognize my affinity for the Product Design field. My technical skillset enabled big efficiencies in the prototying and design process of this highly technical, API-driven product area, as well as contribute to the development (and React library) of PagerDuty's design system in the process.
          </p>
          <p class="w-full">
          Brought on as a contract UX Designer mid-way through a redesign of PD’s Slack Integration, my contributions in UX research, design and building of features led to a very successful release of improvements for our Slack integration. Verifying our learnings with crafty analytics gave us tremendous insight in developing complete design documentation for the forthcoming Microsoft Teams integration, and even pointed the way toward new core product features.
          </p>
      </section>
      <section>
        <h4>Project Highlights</h4>
        <ul>
          <li>
            <h5>A User Permissions Matrix as Complex as The Matrix</h5>
            <p></p>
          </li>
          <li>
            <h5>Square Peg in a Circular Hole: UI Edition</h5>
            <p></p>
          </li>
          <li>
            <h5>I-con See Clearly Now</h5>
            <p></p>
          </li>
          <li>
            <h5>End-to-end UX</h5>
            <p></p>
          </li>
        </ul>
        <h4>Reflection</h4>
      </section>

    </article>


      
    </Content>
  </Layout>
)

export default PortfolioPDPage
