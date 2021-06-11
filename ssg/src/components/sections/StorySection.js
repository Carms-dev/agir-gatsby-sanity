import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function StorySection({ story: { heading, description, image} }) {

  return (
    <StorySectiontyles>
      <h2>{heading}</h2>
      <div className="wrapper wrapper-content">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.altText}
          imgStyle={{ height: `auto`}} />
        <p>{description}</p>
      </div>
    </StorySectiontyles>
  )
}

const StorySectiontyles = styled.section`
  .wrapper-content {
    display: grid;
    grid-gap: 3rem;
  }

  @media (min-width: 640px) {
    .wrapper-content {
      grid-template-columns: 2fr 3fr;
      align-items: center;
    }
  }

  @media (min-width: 1280px) {
    .wrapper-content {
      grid-gap: 6rem;
    }
  }
`
