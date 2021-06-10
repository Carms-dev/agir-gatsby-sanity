import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
// import MissionSection from "../components/sections/MissionSection"
// import BeliefSection from "../components/sections/BeliefSection"
// import StorySection from "../components/sections/StorySection"
// import ApproachSection from "../components/sections/ApproachSection"
// import EthicsSection from "../components/sections/EthicsSection"
// import LogoGarden from "../components/sections/LogoGarden"
// import ReportSection from "../components/sections/ReportSection"

export default function AboutpageTemplate({ data: { sanityAboutPages: { title, sections } } }) {
  // const { hero, mission, belief, story, approach, codeOfEthics, logoGarden, report } = aboutPage
  const { hero } = sections

  return (
    <Layout>
      <Seo title={title} />
      <Hero hero={hero} />
      {/* <MissionSection mission={mission} />
      <BeliefSection belief={belief} />
      <StorySection story={story} />
      <ApproachSection approach={approach} />
      <EthicsSection ethics={codeOfEthics} />
      <LogoGarden logoGarden={logoGarden} />
      <ReportSection report={report} /> */}
    </Layout>
  )
}

export const query = graphql`
  query($language: String) {
    sanityAboutPages(language: { eq: $language }) {
      language
      title
      sections {
        hero {
          heading
          description
          featuredImage {
            asset {
              gatsbyImageData(
                width: 590
                placeholder: BLURRED
                layout: CONSTRAINED
              )
              altText
            }
          }
        }
      }
    }
  }
`