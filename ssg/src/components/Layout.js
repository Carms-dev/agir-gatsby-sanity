import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../styles/GlobalStyles"
import SiteBorderStyles from "../styles/SiteBorderStyles"
import AnnouncementBars from "./AnnouncementBars"
import Header from "./Header"
import Footer from "./Footer"
import Typography from "../styles/Typography"

const Layout = ({ language, isLanding, children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <AnnouncementBars />

    {/* Do not display Header on landing page */}
    {!isLanding && <Header language={language} />}

    <SiteBorderStyles>
      <main>{children}</main>
    </SiteBorderStyles>

    <Footer language={language} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
