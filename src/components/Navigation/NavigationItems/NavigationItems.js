import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

function NavigationItems() {
  const linkPaths = ["Summary", "ByCountry"];
  let navigationItemsWithLinks = null;
  navigationItemsWithLinks = linkPaths.map((el) => (
    <NavigationItem key={el} link={el} />
  ));
  return <ul className={classes.ul}>{navigationItemsWithLinks}</ul>;
}

export default NavigationItems;
