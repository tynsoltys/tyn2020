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
        This is the BPT page.
    </Content>
  </Layout>
)

export default PortfolioBPTPage
