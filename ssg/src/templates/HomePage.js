import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

export default function HomepageTemplate({ data: { sanityHomePages: { title, sections } } }) {
  const { hero } = sections

  return (
    <Layout>
      <Seo title={title} />
      <Hero hero={hero}/>
      <Link to="/">Go back to Landing</Link>
    </Layout>
  )
}

export const query = graphql`
  query($language: String) {
    sanityHomePages(language: { eq: $language }) {
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