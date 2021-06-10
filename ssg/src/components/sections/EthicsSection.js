import * as React from "react"
import styled from "styled-components"

export default function EthicsSection({ ethics: { heading, description, linkText, linkUrl } }) {
  return (
    <EthicsSectionStyles>
      <h2>{heading}</h2>
      <p>{description}</p>
      <a href={linkUrl}>{linkText}→</a>
    </EthicsSectionStyles>
  )
}

const EthicsSectionStyles = styled.section`
  max-width: 720px;
  p {
    margin: 2rem 0;
  }
`
