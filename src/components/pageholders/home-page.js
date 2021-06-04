import React, { useState } from "react"

import Squiggle from "../design_el/squiggle"
// import Button from "../design_el/button"
import { Link } from "gatsby"
import Image from "gatsby-image";
import PortfolioThumb from "../../components/portfolio-thumb";
import Button from "../../components/design_el/button";
import morph from "../../images/lo2hifi.gif";
import morphy from "../../images/morph.gif";
import decode from "../../images/decode.gif";
import sharpie from "../../images/brett-jordan-sharpie.jpg";
import leafie from "../../images/leaves1.png";
import leafie2 from "../../images/leaves2.png";
import leafie3 from "../../images/leaves3.png";
import leafie4 from "../../images/leaves4.png";
import leafie5 from "../../images/leaves5.png";
import leafie6 from "../../images/leaves6.png";
import leafie7 from "../../images/leaves7.png";
import leafie8 from "../../images/leaves8.png";
import leafie9 from "../../images/leaves9.png";
import leafie10 from "../../images/leaves10.png";
import leafie11 from "../../images/leaves11.png";
import leafie12 from "../../images/leaves12.png";
import leafie13 from "../../images/leaves13.png";
import leafie14 from "../../images/leaves14.png";
import test from "../../images/logdna.gif";

const HomePageholder = () => {
  const [ hasScrolled ] = useState(false);
  return (
    <div className="pageholder home-page">
      <section className="" id="top">
        <h2 className="font-serif text-4xl">Greetings.</h2>
        <Squiggle length="200px" animated="true"></Squiggle>
        <p className="small-caps rusty construction lg:w-2/3">
          // This site is being built right meow. thank you for being cool about it. mobile improvements in progress!
        </p>
        <h2 className="big-text">
          <span >I&rsquo;m Tyn,</span> a hyper-creative, extremely fast-learning, multidisciplinary problem solver
          <span className="period rusty" title="currently based in Toronto but not opposed to relocating.">
            .
          </span>
        </h2>
        <p className="highlight-box highlight-right lg:ml-12 mt-12 relative z-40 shadow-xl">
          <span className="inline-block mr-10">
            <p className="font-bold text-2xl">In real life, I flex as a product designer and consultant, with a technically-informed "T-shape."</p>
            <p>
              Evolving out of front-end development, and dipping back into my business school background, my passion for puzzles, patterns, and making technology suck less has consolidated around delivering delightful, effective, and engaging user experiences. 
            </p>

            <hr/>
            <p class="text-lg font-bold">
              I'm looking for a permanent home amongst fellow 👽🦄s.
            </p>
          </span>

        </p>

        
      </section>

      <section id="projects" className="pb-48 pt-48">
          <img src={ leafie } alt="monstera leaf" className="hidden lg:block desatch -mt-72 -left-3/4 pr-32 absolute z-20 transform -rotate-12" />
          <h3 className="mt-0 text-7xl tracking-wide font-serif font-semibold inline-block  text-navy">Recent Projects</h3>
        <div className="relative pl-12 -ml-1">
          <div className="transform rotate-90 absolute -left-24 top-24 pt-2">
            <Squiggle length="240px" ></Squiggle>
            </div>
          <p class="font-semibold italic text-3xl">
            Here's a quick sampling of design-driven projects I've worked on recently.
          </p>
          <p className="text-rust text-xl font-semibold">I'm currently assembling corresponding case studies, but do <a href="#contact" className="underline text-rust">reach out</a> for details, artifacts, or a chat in the meantime.</p>
          <p>I'm most proud of my ability to help clients sift through noise and rhetoric to gain clarity and alignment around goals, and craft simple and maintainable solutions that actually work for them.</p>
        </div>
      


        <div className="border-silver border-l-8 pl-12 ml-2 mt-24">
          {/* <h3 className="mt-0 text-7xl tracking-wide font-sans font-semibold bg-navy p-4 pl-10 inline-block px-8 pb-6 text-white">recent projects</h3> */}

          <ol>
          <li>
              <p className="w-full ml-4 font-serif uppercase tracking-wide text-3xl mt-0 pt-0">Big Picture Trading, Inc.</p>
              <h3 className="text-4xl lg:text-5xl w-full font-sans font-bold ">Exploring <em className="inline-block -ml-2"> Options</em> </h3>
              <h4 className="uppercase tracking-wider font-normal text-xl">GETTING <em>In the money</em> with research and Experimentation </h4>
              <p className="w-full">
                BPT is a highly-respected source for options trading education content with a solid and passionate membership and many die-hard fans. In 2020, leadership recognized a concerning drop off in membership starts & retention. While the service's content and insights were consistently rated top-notch,  exit surveys revealed that members' difficulty navigating the vast amounts of content had them feeling overwhelmed and unable to derive the value they were expecting.
              </p>
              <p className="w-full">Receptive to the power of user research, iterative prototyping, regular feedback surveys, and heuristic study, BPT has gained tremendous clarity around member perceptions and expectations and has evolved its offerings and approach to product design in a correspondingly responsive way 🙌 </p>
              <p className="w-full">What started as a redesign experiment for the service's core educational programs has now expanded beyond UX/UI/IX/visual design-build to include product strategy. <em>Currently wrapping up a full UX and IA overhaul for daily update service.</em> </p>
              <div className="flex justify-end w-full mt-12">
              {/* <p className="text-silver italic text-7xl opacity-20 font-bold tracking-small w-full text-right -mt-4">case coming soon</p> */}
              </div>
            </li>

            <li class="relative">
              <p className="w-full ml-4 font-serif uppercase tracking-wide text-3xl mt-0 pt-0">Plast Canada</p>
              <h3 className="text-5xl w-full font-sans font-bold "><em className="inline-block mr-1">Not</em> an Online Summer Camp</h3>
              <h4 className="uppercase tracking-wider font-normal text-xl">Reformatting the scouting experience for a pandemic</h4>
              <p className="w-full">
                When Plast Canada Ukrainian Youth Scouting's summer camps were abruptly cancelled in May of 2020, kids (and already burnt-out parents) suddenly found themselves with a lot of time to spare. As a lifetime member and volunteer of Plast, I was brought on in a professional (design/development/consulting) capacity to assist a small but very dedicated team in end-to-end delivery of a then-undefined "summer experience" for our scouts all across Canada (and a few elsewhere, too!)</p>
                <p class="w-full">With very tight timelines and limited resources, product decisions were tough and swift - but with a solid vision established at the start, I was able to help the team clarify direction and build that into a clean, delightful, and very well-received online activity hub full of awesome activities and content!  </p>
                <p className="w-full">From program ideation all the way through to building a Gatsby/Prismic/Tailwind app, we worked together to ship a self-directed, household-inclusive online hub that successfully got families (somewhat paradoxically) off their screens, learning together, and making the best of an uncertain situation.
                </p> 


              <div className="flex justify-end w-full mt-12">
                {/* <p class="text-silver italic text-7xl opacity-20 font-bold tracking-small w-full text-right -mt-4">case coming soon</p> */}
              </div>
              <div className="absolute -bottom-1/2 w-full -rotate-45 transform desatch -left-full -ml-64 transform">
                <img src={leafie4} alt=""/>
              </div>
            </li>
            <li class="relative">
              <p className="w-full ml-4 font-serif uppercase tracking-wide text-3xl mt-0 pt-0">PagerDuty</p>
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


              {/* <div className="absolute -bottom-1/2 transform -rotate-12 desatch -right-40 transform w-1/2">
                <img src={leafie10} alt=""/>
              </div> */}
            </li>
            
          </ol>

        {/* <p>In the meantime, check out these fun little gadgets I've built:</p> */}
        </div>
        <div className="relative quickies ">

          <div className="bg-white border-4 rounded-xl border-rust border-dashed p-8 w-full my-12 lg:my-24 mb-8 xl:ml-16 z-40 relative shadow-xl">
              <div class="w-full flex flex-wrap relative">

                <div className="item-img w-full order-2 mt-8 lg:mt-0 lg:order-1 lg:w-1/3" ><img src={decode} alt="gif of app showing translation" className="shadow-xl"/>
                </div>
                <div className="item-info w-full order-1 lg:order-2 lg:w-2/3 p-2 lg:p-4 lg:pl-8 flex flex-wrap">
                  <h2 className="text-rust text-4xl italic lg:text-right -mt-3 uppercase block w-full">
                    <span className="fun-letter">f</span>
                    <span className="fun-letter">u</span>
                    <span className="fun-letter">n</span>
                    <span className="fun-letter"> </span>
                    <span className="fun-letter">h</span>
                    <span className="fun-letter">o</span>
                    <span className="fun-letter">b</span>
                    <span className="fun-letter">b</span>
                    <span className="fun-letter">y</span>
                    <span className="fun-letter"> </span>
                    <span className="fun-letter">c</span>
                    <span className="fun-letter">o</span>
                    <span className="fun-letter">r</span>
                    <span className="fun-letter">n</span>
                    <span className="fun-letter">e</span>
                    <span className="fun-letter fun-r">r</span>
                    {/* <span className="fun-letter">e</span>
                    <span className="fun-letter">c</span>
                    <span className="fun-letter">e</span>
                    <span className="fun-letter">s</span>
                    <span className="fun-letter">s</span> */}
                  </h2>
                  <div className="w-full lg:w-auto">
                    <h3 className="item-title font-sans italic font-bold tracking-narrow mb-1">decode</h3>
                    <p>As an enthusiast of cryptography, colour, and 80s jams, I built a nerdy tool that helps translate colour codes found on <em>New Order</em> album covers.</p>
                    <a href="https://tynsoltys.github.io/decode/" target="_blank" className="bg-rust text-white uppercase p-2 px-3">Check it out on github</a>
                  </div>

                </div>
              </div>

          </div>
          
          <div className="absolute -top-24 transform -rotate-90 desatch -right-1/2 transform w-full z-20">
            <img src={leafie10} alt=""/>
          </div>
        </div>
      </section>
      <section id="skills" className="py-12 lg:py-24 pt-0">
        <h2 className="font-serif text-5xl text-navy">Skills</h2>
        <Squiggle length="200px"></Squiggle>

      <p className="text-3xl font-semibold mt-8">With nearly 10 years experience creating in the digital space, I've helped dozens of clients design, build, and implement  solutions for many different contexts. </p>
          
          <div>
            <p className="my-8 text-2xl mb-8">Most recently, it's been with the following skillsets:</p>
            <ul class="higher-skills m-0 p-0 flex flex-wrap">
              <li class="transform  md:inline-block md:w-1/2 lg:w-1/3 mb-12"><span className="skillset-title font-semibold text-2xl">Design</span>
              <ul className="ml-0 pl-0 pr-16  text-sm">
                <li>Figma / Sketch / Adobe</li>
                <li>UX & Product Strategy</li>
                <li>Information Architecture</li>
                <li>Rapid Prototyping / Testing / research</li>
                <li>Accessibility / Adaptive Design</li>
                <li>Visual Design / Branding</li>
  
  
              </ul></li>
              <li class="transform  md:inline-block md:w-1/2 lg:w-1/3 block mb-12"><span className="skillset-title font-semibold text-2xl">Tech</span>
                <ul className="ml-0 pl-0 pr-16 text-sm">
                  <li>JS: ES6+ / React / Alpine</li>
                  <li>HTML5, CSS3, Sass, Tailwind, etc.</li>
                  <li>Gatsby / Graph QL / JAMstack </li>
                  <li>Custom Wordpress Solutions</li>
                  <li>Design Systems Design</li>
                </ul>
              </li>
              <li class="transform  md:inline-block md:w-1/2 lg:w-1/3 block mb-12"><span className="skillset-title font-semibold text-2xl">Other</span> 
              <ul className="ml-0 pl-0 pr-16 text-sm">
                <li>Ideation / Workshops / Strategic Planning </li>
                <li>Leadership Programming</li>
                <li>Wilderness Advanced First Aid / Survival</li>
                <li>Calligraphy and other fine arts</li>
                <li>Fluent in Ukrainian 🇺🇦</li>
              </ul></li>
            </ul>
          </div>


      {/* <p className="highlight-box highlight-right ml-12 mt-12 mb-24">
          <span className="inline-block mr-10">
            <p className="font-bold text-2xl">I find patterns and create systems around them.</p>
            <p>
              Whether its designing for reusability, dialling in workflows, or plotting out information architecture, my experience in both technical and design worlds primes me to deliver not only great user experiences, but behind-the-scenes content and developer experiences as well. 
              </p>
            <hr/>
            <span className="font-semibold text-lg">
            I believe continuous improvement in upstream process & communication translates to better organizational agility and ultimately, better experiences for everyone.
            </span>
          </span>

        </p> */}
        {/* <div className="flex justify-center mt-24">
          <a href="https://codepen.io/tynsoltys/full/XWbWoxX"><div className="item-img" ><img src={morphy} alt="A morphing wireframes loading page concept made with Sketch and GreensockJS"/>  </div></a>
        </div> */}

      </section>
      <div className="sharpie-container h-32 lg:h-64 flex justify-center items-center overflow-hidden" >
            <img src={sharpie} title="gotta drop some big sharpie energy" alt="image of brand name fine tip permanent marker" />
        </div>
      <section>
      <div className="pageholder about-page lg:py-12" id="about">
      <h2 className="font-serif text-5xl text-navy">About Me</h2>
          <Squiggle length="200px"></Squiggle>
          {/* <div>
            <p className="font-sans mt-12 text-5xl font-semibold text-navy inline-block"><em>Hi I'm Tyn</em>
            
            <div className="inline-block mx-4 italic bg-rust p-2 px-3 mb-4">
              
              <p className="uppercase text-sm text-white m-0 p-0">pronounced: "tin"</p>
              <p className="uppercase text-sm text-white m-0 p-0">pronouns: she/her</p>
            </div>is short for Chrystyna but no one calls me that.</p>

          </div> */}


        <p className="text-2xl font-semibold mt-8">Adaptable, teachable, curious, and stoked to get in the weeds, I think everything is interesting and can be made better with some creative inquiry and courage.</p>

        <p>I really enjoy working in space-between design, technology, and business, and am especially suited to tackling abstract, wicked-problem, systemic-level challenges. Topics that light me up include design systems, accessibility, information architecture, and rethinking education, the workplace, and refactoring the role of technology in our lives for better mental health. <strong><em>I want to help build a better, chiller, friendlier, less cortisol-spiking world for all of us, one bit at a time.</em></strong> </p>

        {/* <p>When I'm not working, I'm probably out <a href="https://www.strava.com/athletes/14651807" target="_blank" className="text-rust underline">riding my bike</a>, <a href="https://open.spotify.com/user/22e5vcxhfsk7h663v4kbceyda?si=8af9e0f63dbe47eb" target="_blank" className="text-rust underline">listening to music</a>, <a href="https://www.instagram.com/kooknhakn/" target="_blank" className="text-rust underline">doodling</a> or <a href="https://www.instagram.com/midnightborshchclub/" target="_blank" className="text-rust underline">sprinkling things with dill</a>. I might also be out in the wilderness teaching scouts how to craft furniture from sticks and rope, swinging in a hammock contemplating if the truth is out there, or picking up cool rocks (and trash: respecting Mother Naitch is important). Rarely, you will find me selling hand-printed greeting cards at holiday markets.</p> */}
        {/* <h3 className="mt-12">Conceptually, I aspire to create things that feel like:</h3>
          <ul className="things-like rusty-rail">
            <li><span className="font-semibold text-lg">good disney magic:</span> is kinda cute and saves your day</li>
            <li><span className="font-semibold text-lg">super chill synthwave playlists:</span> very technology, much relax</li>
            <li><span className="font-semibold text-lg">fresh sneakers:</span> simple, clean, puts pep in your step</li>
            <li><span className="font-semibold text-lg">holding doors open:</span> works both ways </li>
            <li><span className="font-semibold text-lg">a perfect avocado:</span> self-explanatory</li>
          </ul> */}
          <p className="text-2xl font-semibold mt-8">At this time, I am open to full-time product design, UX, and strategy opportunities, and am holding out for the right <Link className="underline hover:text-rust" to="/philosophies">workplace fit</Link>.</p>
          
          <div className="relative">
          <p className="relative mt-12 text-navy text-3xl font-semibold transform skew-x-12 text-center">so if that sounds cool</p>

          </div>

        </div>

      </section>

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
  );
}
 
export default HomePageholder;
