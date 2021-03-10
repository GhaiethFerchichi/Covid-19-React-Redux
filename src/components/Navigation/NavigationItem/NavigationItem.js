import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

function NavigationItem(props) {
  return (
    <li className={classes.li}>
      <NavLink to={`/${props.link}`} activeClassName={classes.active}>
        {props.link}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
