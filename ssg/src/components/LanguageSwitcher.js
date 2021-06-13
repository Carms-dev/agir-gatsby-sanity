import React from "react";
import { navigate } from 'gatsby'
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import LanguageIcon from '@material-ui/icons/Language'

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 160,
    width: `100%`,
  },
}));

// using material-ui SimpleSelect
export default function LanguageSwitcher({ language }) {
  const classes = useStyles();
  const handleChange = (event) => {
    // redirect to corresponding home page
    navigate(`/${event.target.value}`)
  };

  return (
    <FormControl
      variant={`outlined`}
      className={classes.formControl}
    >
      <Select
        disableUnderline
        value={language}
        onChange={handleChange}
        IconComponent={LanguageIcon}
      >
        <MenuItem value={"fr"}>Français</MenuItem>
        <MenuItem value={"en"}>English</MenuItem>
        <MenuItem value={"es"}>Espagñol</MenuItem>
        <MenuItem value={"ar"}>عربى</MenuItem>
      </Select>
    </FormControl>
  );
}
