import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import HomePageholder from "../components/pageholders/home-page"

import Image from "../components/image"
import Header from "../components/header"
import Leaf from "../components/design_el/leaf"
import Squiggle from "../components/design_el/squiggle"
import SEO from "../components/seo"



const IndexPage = () => ( 
  <Layout>
    <SEO title="Home" />
    <Header></Header>
    <Content className="ml-0">
      <Leaf></Leaf>
      <HomePageholder />
    </Content>
  </Layout>
)

export default IndexPage
