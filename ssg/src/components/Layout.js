import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../styles/GlobalStyles"
import SiteBorderStyles from "../styles/SiteBorderStyles"
import AnnouncementBars from "./AnnouncementBars"
import Header from "./Header"
import Footer from "./Footer"
import Typography from "../styles/Typography"

const Layout = ({ language, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Typography />
      <AnnouncementBars />

      {language && <Header language={language} siteTitle={data.site.siteMetadata?.title || `Title`} /> }
      
      <SiteBorderStyles>
        <main>{children}</main>
        <Footer language={language}/>
      </SiteBorderStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
