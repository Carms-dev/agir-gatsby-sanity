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
          modalText {
            _rawAr(resolveReferences: {maxDepth: 10})
            _rawEn(resolveReferences: {maxDepth: 10})
            _rawEs(resolveReferences: {maxDepth: 10})
            _rawFr(resolveReferences: {maxDepth: 10})
          }
        }
      }
    }
  `)

return (
    <>
      {allSanityAnnouncement.nodes.map(node => {
        const { id, title, linkText, modalText } = node
        const t = title[language] || title.en

        // handle the scenario if the announcement has a link
        if (linkText) {
          const rawLangKey = `_raw` + language.charAt(0).toUpperCase() + language.slice(1)
          return (
            <AnnouncementBar
              key={id}
              title={t}
              linkText={linkText[language] || linkText[`en`]}
              modalBlock={modalText[rawLangKey] || modalText[`_rawEn`]}
            />
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
