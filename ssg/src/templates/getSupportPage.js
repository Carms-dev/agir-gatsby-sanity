import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function GetSupportPageTemplate({ data: { sanityGetSupportPage: { language, title } } }) {
  // const { hero } = sections

  return (
    <Layout language={language}>
      <Seo title={title} language={language} />
      {/* <Hero hero={hero} /> */}
    </Layout>
  )
}

export const query = graphql`
  query($language: String) {
    sanityGetSupportPage(language: { eq: $language }) {
      language
      title
    }
  }
`
