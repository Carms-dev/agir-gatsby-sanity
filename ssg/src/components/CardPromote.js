import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function CardPromote({ callToAction: {image, heading, description, linkText, pageLink} }) {
  return (
    <CardPromoteStyles>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.altText}
        imgStyle={{ height: `auto` }}
      />
      <h3>{heading}</h3>
      <p>{description}</p>
      <Link to={pageLink.uri}>{linkText}→</Link>
    </CardPromoteStyles>
  )
}

const CardPromoteStyles = styled.div`
  h3 {
    margin: 1rem 0;
  }
  p {
    margin-bottom: 1rem;
  }
  @media (min-width: 640px) {
  }
`
