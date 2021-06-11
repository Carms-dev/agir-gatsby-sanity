import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export default function CardMission({ card: { icon, text }, bgColor }) {
  return (
    <CardMissionStyles bgColor={bgColor}>
      <GatsbyImage
        image={icon.localFile.childImageSharp.gatsbyImageData}
        alt={icon.altText}
        imgStyle={{ height: `auto`}} />
      <p>{text}</p>
    </CardMissionStyles>
  )
}

const CardMissionStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  text-align: left;
  border-radius: 12px;
  background: ${props => props.bgColor};

  p {
    margin-left: 1rem;
  }

  @media (min-width: 640px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
    p {
      margin-left: 0;
      margin-top: 2rem;
    }
  }
`
