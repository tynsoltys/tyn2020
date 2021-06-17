import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import Header from "../components/header"
import Leaf from "../components/design_el/leaf"
import Squiggle from "../components/design_el/squiggle"
import SEO from "../components/seo"

const PortfolioBPTPage = () => (
  <Layout>
    <SEO title="About" />
    <Leaf></Leaf>
    <Header></Header>
    <Content>
            <h1 className="inline-block lg:block lg:w-full font-serif uppercase tracking-wide text-3xl lg:mt-0 lg:pt-0">Big Picture Trading, Inc.</h1>
              <h2 className="text-4xl lg:text-5xl w-full font-sans font-bold ">Exploring <em className="inline-block -ml-2"> Options</em> </h2>
              <p className="uppercase tracking-wider font-normal text-xl">GETTING <em>In the money</em> with research and Experimentation </p>
              <Squiggle length="100%"></Squiggle>
              <h3 className="project-highlights mt-3">Project Overview</h3>

              <p className="w-full">
                BPT is a highly-respected source for options trading education content with a solid and passionate membership and many die-hard fans. In 2020, leadership recognized a concerning drop off in membership starts & retention. While the service's content and insights were consistently rated top-notch,  exit surveys revealed that members' difficulty navigating the vast amounts of content had them feeling overwhelmed and unable to derive the value they were expecting.
              </p>
              <p className="w-full">Receptive to the power of user research, iterative prototyping, regular feedback surveys, and heuristic study, BPT has gained tremendous clarity around member perceptions and expectations and has evolved its offerings and approach to product design in a correspondingly responsive way 🙌 </p>
              <p className="w-full mb-10">What started as a redesign experiment for the service's core educational programs has now expanded beyond UX/UI/IX/visual design-build to include product strategy (note that marketing is not included in the scope of work).<em>Currently wrapping up a full UX and IA overhaul for daily update service.</em> </p>
              <Squiggle length="100%" className="mt-6"></Squiggle>
              <div className="mt-4">
                <h3 className="project-highlights">Project Highlights</h3>
                <ul>
                  <li>
                    <h4>Getting to know the customer</h4>
                    <p>The first phase of my contract involved prototyping </p>
                  </li>
                </ul>
              </div>
    </Content>
  </Layout>
)

export default PortfolioBPTPage
