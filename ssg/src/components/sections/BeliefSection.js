import * as React from "react"
import styled from "styled-components"
import CardBelief from "../CardBelief"
import { RiHomeHeartFill } from 'react-icons/ri';



export default function BeliefSection({ belief: { heading, cards } }) {
  const iconColors = ["#F8C7B4", "#C6E1E2"]

  return (
    <BeliefSectionStyles>
      <h2>{heading}</h2>
      <div className="wrapper wrapper-cards">
        {cards.map((card, index) => {
          const iconColor = (index % 2 === 0 ? iconColors[0] : iconColors[1])
          return (
            <CardBelief
              key={card.description}
              card={card}
              Icon={RiHomeHeartFill}
              iconColor={iconColor}/>
          )
        })}
      </div>
    </BeliefSectionStyles>
  )
}

const BeliefSectionStyles = styled.section`
  .wrapper-cards {
    display: grid;
    grid-gap: 20px;
  }
  @media (min-width: 640px) {
    .wrapper-cards {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 1fr;
      /* TODO: alternate the color of the icons */
      grid-auto-flow: row dense;
    }
  }
`
