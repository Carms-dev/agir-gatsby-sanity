import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Logo() {
  const { sanitySiteSettings: { logo } } = useStaticQuery(graphql`
    query {
      sanitySiteSettings {
        logo {
          alt
          asset {
            gatsbyImageData(
              width: 60
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={logo.asset.gatsbyImageData}
      alt={logo.alt}
      imgStyle={{width: `auto`}}
    />
  )
}
