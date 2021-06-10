import * as React from "react"
import styled from "styled-components"

export default function ReportSection({ report: { heading, files } }) {
  return (
    <ReportSectionStyles>
      <h2>{heading}</h2>
      <div className="wrapper wrapper-content">
        {files.map(({ file }) => (
          <a key={file.id} href={file.mediaItemUrl}>{file.title}→</a>
        ))}
      </div>
    </ReportSectionStyles>
  )
}

const ReportSectionStyles = styled.section`
  a {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-alt);
    text-decoration: underline;
    width: fit-content;
  }
`
