import React from "react";
import { navigate } from 'gatsby'
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { GrLanguage } from 'react-icons/gr'

const useStyles = makeStyles(() => ({
  formControl: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    background: `var(--off-white)`,
    width: `100%`,
    padding: `0.5rem`,
    borderRadius: `4px`,
    border: `1px solid var(--darker)`,
    "& .MuiInputBase-root": {
      width: `inherit`
    }
  },
  icon: {
    fontSize: `1.25rem`,
    marginRight: `0.5rem`,
    color: `var(--darker)`,
  }
}));

// using material-ui SimpleSelect
export default function LanguageSwitcher({ language }) {
  const classes = useStyles();
  const handleChange = (event) => {
    // redirect to corresponding home page
    navigate(`/${event.target.value}`)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <GrLanguage className={classes.icon} />
        <Select
          disableUnderline
          value={language || `fr`}
          onChange={handleChange}
        >
          <MenuItem value={"fr"}>Français</MenuItem>
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"es"}>Espagñol</MenuItem>
          <MenuItem value={"ar"}>عربى</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}