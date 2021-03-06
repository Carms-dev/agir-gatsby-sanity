import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "./Logo"
import SideDrawer from "./SideDrawer"
import LanguageSwitcher from './LanguageSwitcher'

import { AppBar, Toolbar } from "@material-ui/core"
import { List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    whiteSpace: `nowrap`,
  },
  linkText: {
    textDecoration: `none`,
    color: `black`
  }
});

const Header = ({ language }) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allSanityNavigation {
        nodes {
          language
          navItems {
            label
            pageLink {
              ... on SanityAboutPage {
                templateKey
                slug {
                  current
                }
                language
              }
              ... on SanityGetSupportPage {
                templateKey
                slug {
                  current
                }
                language
              }
              ... on SanityGetInvolvedPage {
                templateKey
                slug {
                  current
                }
                language
              }
              ... on SanityDonatePage {
                templateKey
                slug {
                  current
                }
                language
              }
              ... on SanityContactPage {
                templateKey
                slug {
                  current
                }
                language
              }
            }
          }
        }
      }
    }
  `)

  const { navItems } = data.allSanityNavigation.nodes.find(node => node.language === language) || []
  const navLinks = navItems.map(({label, pageLink}) => (
    {
      title: label,
      path: `/${language}/${pageLink.slug.current}`
    }
  ))

  return (
    <AppBar position="static" style={{ background: `var(--off-white)`, boxShadow: `unset` }}>
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <Link to={`/${language}`}>
            <Logo style={{width: `80px`}} />
          </Link>
          <Hidden mdDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
              <LanguageSwitcher language={language} />
            </List>
          </Hidden>

          <Hidden lgUp>
            <SideDrawer navLinks={navLinks} language={language} />
          </Hidden>
        </Container>

      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  language: PropTypes.string,
}

Header.defaultProps = {
  language: `fr`,
}

export default Header
