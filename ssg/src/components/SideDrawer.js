import React, { useState } from 'react'

import { IconButton, Drawer, List, ListItem, ListItemText } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import LanguageSwitcher from './LanguageSwitcher'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    color: `black`,
  },
  drawer: {
    "& .MuiDrawer-paper": {
      padding: `1rem`,
    },
  }
})

export default function SideDrawer({ navLinks, language }) {
  const classes = useStyles();

  const [state, setState] = useState({ right: false })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
        <LanguageSwitcher language={language}/>
      </Drawer>
    </>
  )
}
