import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from 'react-html-parser';

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {},
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent"
    },
    background: `transparent`,
    boxShadow: `none`,
    border: `none`,
    borderBottom: `1px solid var(--darker)`,
  },
  MuiAccordionSummaryroot: {
    fontWeight: `700`,
    padding: `0`,
  },
}));

export default function ControlledAccordions({ items }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={item.heading}
          className={classes.MuiAccordionroot}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            className={classes.MuiAccordionSummaryroot}
          >
            <Typography className={classes.heading}>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {ReactHtmlParser(item.description)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}


