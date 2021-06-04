import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
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
        <h1>This is a post</h1>
        <Squiggle></Squiggle>
    </Content>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default AboutPage