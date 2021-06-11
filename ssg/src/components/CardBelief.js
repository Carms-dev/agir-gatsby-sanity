import * as React from "react"
import styled from "styled-components"

export default function CardBelief({ card: { description, isLong }, Icon, iconColor }) {
  return (
    <CardBeliefStyles isLong={isLong} >
      <Icon color={iconColor} size={30}/>
      <p>{description}</p>
    </CardBeliefStyles>
  )
}

const CardBeliefStyles = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  padding: 2rem 1rem;
  border-radius: 12px;
  background: var(--off-white);

  @media (min-width: 640px) {
    grid-column: ${props => props.isLong ? `1 / -1` : `span 1`};
  }
`
