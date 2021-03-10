import React from "react";

import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={classes.navBar}>
      <NavigationItems />
    </nav>
  );
};

export default NavigationBar;
