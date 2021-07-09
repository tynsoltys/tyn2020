import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/content"
import Header from "../components/header"
import Leaf from "../components/design_el/leaf"
import Squiggle from "../components/design_el/squiggle"
import SEO from "../components/seo"

import mst1 from "../images/mst-1.jpg"
import mst2 from "../images/mst-2.png"
import mst3 from "../images/mst-3.png"
import confusing from "../images/confusing_in_channel.gif"
import iconinchannel from "../images/icon_in_channel.gif"
import incidentmessage from "../images/incident_message.gif"
import annotations from "../images/annotations.png"
import statuses from "../images/statuses.png"
import pdlogos from "../images/pd_logos.png"
import consistency from "../images/consistency.png"
import permissions from "../images/permissions.png"

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
          <div class="flex flex-row flex-wrap">
            <p class="lg:w-3/4 lg:pr-8">
            PagerDuty is a digital operations management platform that notifies and deploys the right teams (IT Teams, primarily) at the right time to solve and prevent IT incidents. Recognizing the benefit of notifying responders as-directly-as-possible, PagerDuty invested in updating and improving its integrations for Slack and Microsoft Teams, the two preeminent workplace communications chat-driven collaboration platforms.
            </p>
            <div class="lg:w-1/4">
              <img class="w-full" src={pdlogos} alt="Slack, Microsoft Teams, and PagerDuty logos" />
            </div>
          </div>
          <p class="w-full">
          Brought on as a contract UX Designer mid-way through a redesign of PD’s Slack Integration, my contributions in UX research, design and building of features led to a very successful release of improvements for our Slack integration. Verifying our learnings with crafty analytics gave us tremendous insight in developing complete design documentation for the forthcoming Microsoft Teams integration, and even pointed the way toward new core product features.
          </p>

          <p class="w-full">
          Working with enterprise clients and being able to focus on design research and execution alone allowed me to truly deepen and expand my skillset in a variety of design tools and methodologies, as well as recognize my affinity for the Product Design field. My technical skillset enabled big efficiencies in the prototying and design process of this highly technical, API-driven product area, as well as contribute to the development (and React library) of PagerDuty's design system in the process.
          </p>

      </section>
      <section class="mt-24">
        <h3 class="text-4xl font-serif">Project Highlights</h3>
        <Squiggle length="300px" className="mt-6"></Squiggle>
        <ul class="my-12">
          <li>
            <h4 class="text-xl uppercase tracking-wide w-full font-sans p-6 bg-rust text-yellow rusty-rail shadow-lg mb-12 -ml-6">A User Permissions Matrix as Complex as The Matrix</h4>
            <p><strong>While understanding the complexities, combinations, and setups of IT Teams and Admins was a cornerstone of the PagerDuty product itself, intersecting the PagerDuty user model with the multitude of ways Chat App products are configured and used across organizations large and small proved to be the most mind boggling part of this project.</strong>  Getting this right was critical in developing our permissions models and answering fundamental questions around where these “Integrated” UIs and features should live.</p>
            <p>Multiple rounds of research, revisions, and testing finally led to an as smooth-as-possible configuration flow between the apps, that also incorporated concerns around future-proofing, multi-chat-app scenarios, and security.</p>
            <div>

            </div>
            <div class="mb-16 mt-8">
              <h5 class="w-full text-2xl mt-8">Exhibit 1: Lo-to-HiFi mockups for Configuration Flow</h5>
              <img src={mst1} alt="Image of chat window where important messages get lost in visual noise" class="shadow-xl" />
              <p class="w-full caption text-sm font-semibold rusty-rail ">1A: An early-stage sketch of what became the user flow for PagerDuty account --> Microsoft Teams workspace configuration (a.k.a. <em>user mapping</em> )</p>
            </div>
            <div class="mb-16 mt-8">
              <img src={mst2} alt="refined user flow with clear visible icon to highlight important message" class="shadow-lg" />
              <p class="w-full caption text-sm font-semibold rusty-rail ">1B: The above, but expanded to incorporate messaging (as per developer request), and digitized for sharing with our internationally distributed team. We used Abstract to leave comments & discuss mockups, allowing for asynchronous collaboration between SF, Toronto, Atlanta, and Ukraine.</p>
            </div>
            <div class="mb-16">
              <img src={mst3} alt="detailed mid-hi-fi mockups" />
              <p class="w-full caption text-sm font-semibold rusty-rail ">1C: A screenshot of the full-set of screens used in the configuration flow. This was a "hybrid fidelity" mockup crafted for efficiency: we did not need to spend time on hi-fi mockups where we were not in control of UI (e.g. in Microsoft Teams), but did want to capture all screens (and variables such as blank/error states and messaging) so that everything was extremely clear for our devs and common edge-cases accounted for.</p>
            </div>

          </li>
          <li>
          <h4 class="text-xl uppercase tracking-wide w-full font-sans p-6 bg-rust text-yellow rusty-rail shadow-lg mb-12 -ml-6 mt-16">I-con See Clearly Now</h4>
            <p>The urgent and time-sensitive nature of incident response requires critical information and next steps be readily available and accessible to responders with as minimal friction as possible. </p>
            <p>One of the most prominent complaints from responders using the Slack integration was how easy it was for important, actionable messages to get lost in channel noise. We iterated tirelessly with everything from paper mockups to full implementations with our internal responders to deliver the most useful combination of information, colours, and visual cues, and made an already stressful experience slightly less so.</p>
            <p>Further complicating this was the fact we were designing in a foreign design ecosystem, within the limited real estate of a Chat App message, using a limited set of UI elements and affordances that varied between the platforms. We had to reduce everything into simple, linear, and most-likely-to-follow task flows, which inspired us to pursue some unprecedentedly useful analytics using Segment and UTM codes that in turn informed the core product roadmap and a variety of design system improvements.</p>





            <div class="flex flex-row flex-wrap">
            <h5 class="w-full text-2xl mt-12">Exhibit 2: How might we be more of a lighthouse in the storm?</h5>
            <p class="w-full text-sm"> While bringing PagerDuty notifications into Slack & MS Teams was a big win for incident visibility & response times, previously built versions of the notifications being sent into both Slack and MS Teams were often missing key information, too frequent & verbose, “too colourful/distracting” and unclear about which messages required action, and further, inconsistent about which messages contained action buttons & items.</p>
            <p></p>
            <div class="mb-6 mt-8 lg:w-1/2 lg:pr-4">
              <img src={confusing} alt="Image of hand drawn user flow diagram for Microsoft Teams Integration" class="shadow-xl" />
              <p class="w-full caption text-sm font-semibold rusty-rail ">2A: In this live prototype, you can see what our responders lovingly referred to as "scrolling hell" - there's way too much going on, and no obvious place to slow down and get things done.</p>
            </div>
            <div class="mb-6 mt-8 lg:w-1/2 lg:pl-4">
              <img src={iconinchannel} alt="bold icon stands out in chat flow" class="shadow-lg" />
              <p class="w-full caption text-sm font-semibold rusty-rail ">2B: Though still kind of busy, the big, bold icon acts as a visual anchor to viscerally communicate incident status and indicate from where relevant responder actions could be taken.</p>
            </div>
            <p className="italic ">This was but one of dozens of experiments we ran to improve this experience - happy to share more <a href="#contact" class="underline text-rust">in conversation.</a> </p>
            </div>

            <div class="mb-16">
            <h5 class="w-full text-2xl mt-12">Exhibit 3: Maybe let's <em>not</em> use the ⚠️ icon for the 9th time...</h5>
            <p class="w-full caption text-sm ">In an attempt to choose the best and most on-brand icons for our messages, I conducted a full product icon inventory and recognized an opportunity for us to bring a little bit more consistency and clarity to our product and platform. </p>
              <img src={statuses} class="shadow-lg" alt="early prototype of icon combinations" />
              <p class="w-full caption text-sm font-semibold rusty-rail ">3A: Here is one of my initial proposals for a re-vamped icon system, which contains 2 tiers of information (icons for status and shape for tier of impacted service), with colour only playing a supportive role in the conveyance of important info, ensuring that colourblind users could still viscerally perceive information without needing to rely solely on colour or sprawling text... <em>"acknowledged"</em> is a long word, and well.. <em>"triggered"</em> isn't so innocuous in 2020+..</p>
            </div>

          </li>
          <li>
          <h4 class="text-xl uppercase tracking-wide w-full font-sans p-6 bg-rust text-yellow rusty-rail shadow-lg mb-12 -ml-6 mt-16">UX FOR US, TOO</h4>
          <h5 class="w-full text-2xl mt-12">Exhibit 4: Empathy and Lollipops </h5>
            <div class="flex flex-row flex-wrap">

              <p class="lg:w-2/3 lg:pr-8 lg:pl-8">
              I live for the high-five high of feeling in sync and in the zone as a team - with our team being distributed across 4 cities and 3 timezones, we faced our share of challenges, but learned to overcome many of them with rock-solid documentation, overcommunication, and a variety of practical interventions to helps us all get on the same page.
              <p class="mt-4 w-full caption text-sm font-semibold rusty-rail ">4A: Here is a sample of one of the many reference charts we created to help clarify information architecture as it pertained to permissions.</p>
              </p>

              <div class="lg:w-1/3">
                <img class="w-full shadow-lg" src={permissions} alt="a matrix showing types of PagerDuty users intersected with types of Microsoft Teams users, and who has permission to do what" />

              </div>

            </div>

            <div className="mb-16 mt-16">
              <p className="">Having worked in the trenches as a developer myself, I am intimately aware of the decision fatigue and holdups that can strike when design mockups are unclear or missing key pieces of info. Viewing the dev team as users of the design products I was delivering, I made sure to provide the devs with everything they needed to be successful: annotations at the baseline, and where time and resources permitted, fully built out React front-ends that simply needed to be wired up to the appropriate APIs.</p>
              <img src={annotations} alt="Image of a mockup with an annotated version below, complete with notes on interaction and data sources" class="shadow-xl" />
              <p className="w-full caption text-sm font-semibold rusty-rail ">4B: An example of an annotated mockup for the <em>Response Play</em> feature.</p>
            </div>
            <div className="flex flex-row flex-wrap">
              <p>Contextualizing UIs with interactive mockups, and in this case, other-chat-app equivalents helped the dev team better understand what hooks, states, and situations needed to be accounted for - not just on the front end, but in the app backend as well - and how they could implement D.R.Y. and keep things as consistent as possible between the two apps.</p>
              <div className="mb-6 mt-8 lg:w-1/2 lg:pr-4">
                <img src={incidentmessage} alt="Image of hand drawn user flow diagram for Microsoft Teams Integration" class="shadow-xl" />
                <p className="w-full caption text-sm font-semibold rusty-rail ">4C: A hi-fi prototype of our "ideal" SlackV2 incident message, with full suite of desired features included. <em>Due to a variety of constraints, we cut back to the version on the right.</em></p>
              </div>
              <div className="mb-6 mt-8 lg:mt-32 lg:w-1/2 lg:pl-4">
                <img src={consistency} alt="bold icon stands out in chat flow" class="shadow-lg" />
                <p className="w-full caption text-sm font-semibold rusty-rail ">4D: A comparison of a Slack V2 mockup with our MST Early Access mockup.</p>
              </div>
            </div>
          </li>
        </ul>
        <h4>Reflection</h4>
        <p>
        My time in UX at PagerDuty gave me great assurance that pursuing product design was the right tack to follow with my career - and though I’m still faster at prototyping with CSS Flexbox than I am configuring my auto layouts in Figma, understanding and being part of the “why” behind product design decisions brings a whole new level of meaning to my work. I definitely see myself continuing on in this field, perhaps specializing in exactly the space between design and engineering.
        </p>
        <p>
        I believe that the next revolution in the digital product space will be the full adoption and investment in design systems and design--dev workflow engineering. Whether it be through assets like the above, component libraries, style guides, or other forms of communication, I believe that strong upstream coordination translates to downstream consistency, reliability, and scalability, and acts as a new plane of cross-departmental collaboration, as well as providing an additional forum for amplification of important matters like accessibility.

        </p>
      </section>

    </article>


      
    </Content>
  </Layout>
)

export default PortfolioPDPage
