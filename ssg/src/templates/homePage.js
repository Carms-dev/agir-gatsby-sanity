import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

export default function HomePageTemplate({ data: { sanityHomePage: { language, title, sections } } }) {
  const { hero } = sections

  return (
    <Layout language={language}>
      <Seo title={title} language={language} />
      <Hero hero={hero}/>
    </Layout>
  )
}

export const query = graphql`
  query($language: String) {
    sanityHomePage(language: { eq: $language }) {
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
