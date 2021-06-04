import React, { Component } from "react"

import Squiggle from "../design_el/squiggle"
import Line from "../design_el/line"

import bikestairs from "../../images/bikestairs.gif"
import giphy from "../../images/giphy.gif"
import whoa from "../../images/whoa.gif"
import legocrash from "../../images/legocrash.gif"
import mariohats from "../../images/mariohats.gif"
import leafie2 from "../../images/leaves2.png";


class PhilosophiesPageholder extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { showHoverSnacks: false };
        this.toggleSnacks = this.toggleSnacks.bind(this);
      }

    toggleSnacks(e) {
        console.log('togg', this.state.showHoverSnacks)
        this.setState(prevState => ({
            showHoverSnacks: !prevState.showHoverSnacks
          }));
    } 
  render() {
    return (
      <div>
      <div className="pageholder philosophies-page">
        <h1>Energy Vibes 'n' Stuff</h1>
        <Squiggle length="350px"></Squiggle>
        {/* <p className="small-caps rust construction">
          // This site is still under construction.
        </p> */}
        <p className="small-caps">
          <span className="rust">//</span> respect, fun, and doin' the right things
        </p>
        <h2 className="big-text mb-20">
        Genuine values-driven cultural fit is a no-brainer for working together. Here&rsquo;s what I&rsquo;m about:
        </h2>

        <ol className="philosophies">

          <li>
            <h3 className="philosophy-title">Functional, but fun.</h3>
            <p class="text-sm">
              You won't have fun if something isn't functional, and you won't want to use something that's not fun. This circular and highly contextual debate is central to any designer's life, and I try my best to resolve with user testing, ye ol' business-school matrixing, and a lot of experimentation and getting weird (within professional boundaries, ofc). I'm a big believer in play and flexing the creative muscle, and love to help others build confidence in theirs. Whether the medium is wireframes, value propositions, or office snack sculpture, I'm perpetually cookin', hackin', and remixing things to make them more rad.
            </p>
            <img src={bikestairs} alt="biking down a staircase"/>
          </li>
          <li>
            <h3 className="philosophy-title">All together now.</h3>
            <p class="text-sm">
              I love being part of a team and getting to know folks, their stories, and experiences, with the beauty and wisdom of diversity an essential part of that mix. Our empathy as a society and individuals has been put to task more than ever lately, and I will continue to learn and grow as an ally of underrepresented groups.
              <br/><br/>From an implementation context, a11y is something I'd like to get expert-level at. Just like how mobile-first has become the predominant design paradigm to solve for an ever-increasing array of devices, I'd like to champion accessibility-first as the next paradigm that ensures <em>all</em> users can use, enjoy, and benefit from products equitably.
            </p>
            <img src={giphy} alt="diversity is a superpower"/>
          </li>
          <li>
            <h3 className="philosophy-title">
              Master of reality.
            </h3>
            <p class="text-sm">
              Authenticity, clarity, and respectful candor have all been traits of my most successful projects & relationships, professional & otherwise. Asking plenty of thoughtful, sometimes challenging, and unexpected questions is part of that, and always done in the pursuit of deeper understanding and empathy. Curiosity is my M.O. and even moreso now that I am continuously humbled by the process of design research: <strong>I've realized how little I really know until I ask.</strong>  Similarly, I think receiving, giving, and learning from constructive feedback is imperative to healthy teamwork and personal/professional growth. Keepin' it real = real solutions, real progress, real cool times.
            </p>
            <img src={whoa} alt="keanu reeves whoa"/>
          </li>
          <li>
            <h3 className="philosophy-title">Mise en place.</h3>
            <p class="text-sm">
              There's definitely a time and place to get scrappy and explore new frontiers: but there's also a lot of value in developing systems and principles that help mitigate decision fatigue, deliver a cohesive end result, and allow for intelligent innovation. Having done time in many different trenches, I'm uniquely qualified to empathize with and negotiate the requirements of business, design, and development into design systems, process & workflow strategies. <strong>Paying attention to the <em>way</em> we get things done is sometimes as important as getting the things done.</strong>  It honestly just makes things easier next time and often leads to high-fives <em>(and do I miss them!)</em>
            </p>
            <img src={legocrash} alt="lego truck smashes stacked up legos"/>
          </li>
          <li>
            <h3 className="philosophy-title">Laterally (not literally).</h3>
            <p class="text-sm">
              Whether using spreadsheet skills from my finance days to generate code, or applying backcountry survival and team building skills to project management, I'm a big believer in the value of diverse experiences and in finding patterns, parallels, and solutions in unexpected places. It's an imperative of mine to listen to, learn from, and try new things and hats on regularly to stay inspired, identify opportunities for improvement, and grow as a designer, professional, and person. <strong>Everything is interesting and every experience is a teacher!</strong></p>
              <img src={mariohats} alt="mario tries on all his magic suits"/>
          </li>
        </ol>
      </div>
            <section id="contact" className="py-48 pt-0 flex justify-center flex-wrap relative">

            <h2 className="mt-6 font-semibold italic text-6xl text-center">
                  <Squiggle animated="" length="240px" ></Squiggle>
                  <a href="mailto:tynsoltys@gmail.com" className="text-rust block">email me</a>
                  <Squiggle  length="240px" ></Squiggle>
            </h2>
      
            
            <div className="pageholder contact-page">
              <div className="mt-12">
                
                {/* <a href="mailto:tynsoltys@gmail.com" class="inline-block uppercase p-4 px-8 pr-9 hover:mb-2 bg-rust items-center text-white font-semibold tracking-wide shadow-xl text-6xl italic ml-16">Email Me</a> */}
      
                <p className="text-2xl font-semibold text-center">For the forseeable future, I am not taking on any new freelance projects, though can offer my 🧠 for picking on occasion.</p>
      
                <p className="text-center">Thank you for coming by, and wish you a happy, healthy, and inspiring day.</p>
      
              </div>
              
      
            </div>
            <div className="absolute w-full transform desatch transform rotate-45 -left-full -bottom-48">
              <img src={leafie2} alt=""/>
            </div>
            </section>
            </div>
    )
  }
}

export default PhilosophiesPageholder
