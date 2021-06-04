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
    <h3><span class="client">PagerDuty</span><span>Icons for Visceral Understanding</span></h3>
            <div className="project-details">
              <p><em>"Doing the right thing"</em> sometimes means doing less work and recommending solutions that already exist.</p>
            </div>
    </Content>
  </Layout>
)

export default PortfolioPDPage
