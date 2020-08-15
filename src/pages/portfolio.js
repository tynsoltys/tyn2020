import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import PortfolioPageholder from "../components/pageholders/portfolio-page"
import Intro from "../components/intro"
import Header from "../components/header"
import Leaf from "../components/design_el/leaf"
import Squiggle from "../components/design_el/squiggle"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Leaf></Leaf>
    <Header></Header>
    <Content>
      <PortfolioPageholder />
    </Content>
  </Layout>
)

export default AboutPage
