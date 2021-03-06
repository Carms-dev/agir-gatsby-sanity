import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({ hero: { heading, description, featuredImage: { asset, alt } } }) {
  return (
    <HeroStyles>
      <GatsbyImage
        image={asset.gatsbyImageData}
        alt={alt || ''}
        imgStyle={{ height: `auto` }} />
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </HeroStyles>
  )
}

const HeroStyles = styled.section`
  display: grid;
  grid-gap: 2rem;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
  }

  @media (min-width: 640px) {
    grid-template-columns: 2fr 3fr;
    grid-auto-rows: 1fr;
    align-items: center;
    text-align: left;
    direction: rtl;
  }

  @media (min-width: 1280px) {
    .wrapper-content {
      grid-gap: 6rem;
    }
  }

`
