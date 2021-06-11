import * as React from "react"
// import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "./Logo"
import SideDrawer from "./SideDrawer"

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
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    color: `black`
  }
});

const Header = ({language}) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityNavigation {
        nodes {
          language
          navItems {
            label
            pageLink {
              ... on SanityAboutPage {
                id
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

  const { navItems } = data.allSanityNavigation.nodes.find(node => node.language === language )
  const navLinks = navItems.map(({label, pageLink}) => ({ title: label, path: `/${language}/${pageLink.slug.current}`}))

  return (
    <AppBar position="static" style={{ background: `var(--off-white)`, boxShadow: `unset` }}>
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <Link to={`/${language}`}>
            <Logo />
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
            </List>
          </Hidden>

          <Hidden lgUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>

      </Toolbar>
    </AppBar>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
