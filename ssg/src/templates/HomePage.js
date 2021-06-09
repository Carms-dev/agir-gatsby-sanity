import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomepageTemplate = ({ data: { sanityHomePages: { title, sections } } }) => {
  const { hero } = sections

  return (
    <Layout>
    <Seo title={title} />
    <h1>{hero.heading}</h1>
    <p>{hero.description}</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
  )
}

export default HomepageTemplate


export const query = graphql`
  query($language: String) {
    sanityHomePages(language: { eq: $language }) {
      language
      title
      sections {
        hero {
          description
          heading
          featuredImage {
            asset {
              gatsbyImageData
              altText
            }
          }
        }
      }
    }
  }
`