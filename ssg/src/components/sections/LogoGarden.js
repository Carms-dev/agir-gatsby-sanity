import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function LogoGarden({ logoGarden: { heading, logos } }) {
  return (
    <LogoGardenStyles>
      <h2>{heading}</h2>
      <div className="wrapper wrapper-logos">
        {logos.map(logo => (
          <GatsbyImage
            image={logo.localFile.childImageSharp.gatsbyImageData}
            key={logo.id}
            alt={logo.altText}
            imgStyle={{ height: `auto` }}
          />
        ))}
      </div>
    </LogoGardenStyles>
  )
}

const LogoGardenStyles = styled.section`
  .wrapper-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, 80px);
    grid-template-rows: auto;
    grid-gap: 20px;
  }
  @media (min-width: 640px) {
    .wrapper-logos {
      grid-template-columns: repeat(auto-fit, 120px);
      grid-gap: 30px;
    }

  }
`
