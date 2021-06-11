import * as React from "react"
import styled from "styled-components"
import CardPromote from "../CardPromote"
import ControlledAccordions from "../ControlledAccordions"

export default function ApproachSection({ approach: { heading, accordion, callToAction } }) {

  return (
    <ApproachSectionStyles>
      <h2>{heading}</h2>
      <div className="wrapper wrapper-content">
        <ControlledAccordions items={accordion} />
        <CardPromote callToAction={callToAction} />
      </div>
    </ApproachSectionStyles>
  )
}

const ApproachSectionStyles = styled.section`
  .wrapper-content {
    display: grid;
    grid-gap: 3rem;
  }

  @media (min-width: 640px) {
    .wrapper-content {
      grid-template-columns: 3fr 2fr;
      align-items: center;
    }
  }

  @media (min-width: 1280px) {
    .wrapper-content {
      grid-gap: 6rem;
    }
  }
`
