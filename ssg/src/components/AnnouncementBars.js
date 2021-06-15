import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import AnnouncementBar from './AnnouncementBar'

export default function AnnouncementBars({ language }) {
  const { allSanityAnnouncement } = useStaticQuery(graphql`
    query {
      allSanityAnnouncement(filter: {isActive: {eq: true}}) {
        nodes {
          id
          title {
            ar
            en
            es
            fr
          }
          linkText {
            ar
            en
            es
            fr
          }
        }
      }
    }
  `)
  // console.log(allSanityAnnouncement)

  return (
    <>
      {allSanityAnnouncement.nodes.map(node => {
        const { id, title, linkText } = node
        const t = title[language] || title.en

        // handle the scenario if the announcement has a link
        if (linkText) {
          return (
            <AnnouncementBar key={id} title={t} linkText={linkText[language] || linkText.en}/>
            )
          } else {
            return (
            <AnnouncementBar key={id} title={t} />
          )
        }

      })}
    </>
  )
}
