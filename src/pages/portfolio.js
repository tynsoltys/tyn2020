import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import Header from "../components/header"
import Leaf from "../components/design_el/leaf"
import Squiggle from "../components/design_el/squiggle"
import SEO from "../components/seo"
import PortfolioThumb from "../components/portfolio-thumb"
import morph from "../images/morph.png";
import decode from "../images/decode.png";
import test from "../images/test.png";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Leaf></Leaf>
    <Header></Header>
    <Content>
    <div className="pageholder portfolio-page">
        <h1>Portfolio.</h1>
        <Squiggle length="200px" animated="true"></Squiggle>
        <p className="small-caps rust construction">
          //  ACTIVELY UNDER CONSTRUCTION 🔨🔨🔨
        </p>
        <h4>While I build out my case studies for publishing, here are some recent projects you can ask me about: </h4>
        <ul className="portfolio-list main-project-list">
          <PortfolioThumb projectTitle="Full Product Overhaul" link="portfolio-bpt" img="" imgAlt="" client="Big Picture Trading" desc="A complete user-focused redesign of an online options trading learning platform, from Dreamweaver (to soon) JS-on-Wordpress " actionText="Go To Case" />
          <PortfolioThumb projectTitle="Love Sun Motion Life" link="portfolio-ldml" img="" imgAlt="" client="Plast Canada" desc="Designing and building a self-directed summer camp program for members of Plast Scouts Canada" actionText="Go To Case"/>
          <PortfolioThumb projectTitle="Chat App Integrations" link="portfolio-pd" img="" imgAlt="" client="PagerDuty" desc="Migrating popular PagerDuty workflows into Slack and Microsoft Teams apps" actionText="Go To Case"/>
          <PortfolioThumb projectTitle="Branding" link="portfolio-pd" img="" imgAlt="" client="Lemon Meringue Studio" desc="Branding design and eCommerce consultation for local caterer" actionText="Go To Case"/>
          <PortfolioThumb projectTitle="Icon Improvement Concepts" link="portfolio-icons" img="" imgAlt="" client="PagerDuty" desc="Improving product understandability with intelligent, consistent use of iconography and other visual cues" actionText="Go To Case"/>

        </ul>
        <h4>Some fun side projects:</h4>
        <ul className="quick-hits">
          <li><a href="https://tynsoltys.github.io/decode/"><div className="item-info"><h3 className="item-title">decode</h3><p className="item-desc">An app that helps translates colour codes on New Order album covers</p></div><div className="item-img" ><img src={decode} alt=""/></div></a></li>
          <li><a href="https://codepen.io/tynsoltys/full/XWbWoxX"><div className="item-info"><h3 className="item-title">Morphing Wireframes Loading Page</h3><p className="item-desc" >Loading page concept made with Greensock & Sketch</p></div><div className="item-img" ><img src={morph} alt=""/>  </div></a></li>
          <li><a href="https://boiling-river-63434.herokuapp.com/"><div className="item-info"><h3 className="item-title">MEAN Code Test</h3><p className="item-desc">Pixel perfect PSD test built on MEAN stack with bonus interactivity flair</p></div><div className="item-img" ><img src={test} alt=""/></div></a></li>
        </ul>
        {/* <p>In the meantime, check out these fun little gadgets I've built:</p> */}
      </div>
    </Content>
  </Layout>
)

export default AboutPage
