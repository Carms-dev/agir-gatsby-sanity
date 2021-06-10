import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = ({ data: { sanityHomePages: { title, sections } } }) => {
  const { hero } = sections 
  return (
    <Layout>
    <Seo title={title} />
    <h1>{hero.heading}</h1>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
  )
}
  


export default IndexPage


export const query = graphql`
  query {
    sanityHomePages(language: {eq: "en"}) {
      language
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
      title
    }
  }
`