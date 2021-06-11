import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function IndexPage({ data: { sanityLandingPage: { title, featuredImage, languageHomeLinks } } }) {
  const langNames = {
    ar: 'عربى',
    en: 'English',
    fr: 'Français',
    es: 'Espagñol'
  }
  return (
    <Layout language="fr">
      <Seo title={title} />
      <h1>{title}</h1>
      <GatsbyImage
        image={featuredImage.asset.gatsbyImageData}
        alt={featuredImage.alt}
        imgStyle={{ height: `auto` }} />
      <ul>
        {languageHomeLinks.map(link =>   (
          <li key={link.language}><Link to={`/${link.language}`}>{langNames[link.language]}</Link></li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityLandingPage {
      title
      featuredImage {
        alt
        asset {
          gatsbyImageData (
            width: 600
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      languageHomeLinks {
        language
      }
    }
  }
`
