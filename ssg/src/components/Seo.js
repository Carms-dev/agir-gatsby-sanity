import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, language, meta, title }) {
  // query meta data from sanity
  // TODO: implement author
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          title {
            ar
            en
            es
            fr
          }
          description {
            ar
            en
            es
            fr
          }
        }
        # author {}
      }
    `
  )
  
  const metaDescription = sanitySiteSettings.description[language] || description
  const defaultTitle = sanitySiteSettings.title[language]
  
  return (
    <Helmet
      htmlAttributes={{
        language,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: sanitySiteSettings?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  language: `fr`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  language: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
