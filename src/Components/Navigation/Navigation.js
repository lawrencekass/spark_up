import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import navigationConfig from "../../Configs/NavigationConfig";

import AppNavGroup from "./Sections/AppNavGroup";
import AppNavCollapse from "./Sections/AppNavCollapse";
import AppNavItem from "./Sections/AppNavItem";
import AppNavLink from "./Sections/AppNavLink";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

import { SystemName } from "../../Constants/Constants";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  logoBg: {
    backgroundColor: theme.palette.type !== "dark" && "rgb(253,204,64)",
    // backgroundColor: "#18202c"
  },
  logo: {
    padding: "1rem",
    "& span": {
      display: "block",
      color: "#fff",
    },
  },
  navCustom: {
    "& .MuiTypography-root": {
      fontSize: ".85rem",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "50px",
    },
  },
}));

const Navigation = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <div className={clsx(classes.toolbar, classes.logoBg)}>
        <Typography
          className={classes.logo}
          variant="h6"
          component="h1"
          align="center"
        >
          <span>{SystemName}</span>
        </Typography>
      </div>
      <Divider />
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <AppNavGroup item={item} />}

            {item.type === "collapse" && <AppNavCollapse item={item} />}

            {item.type === "item" && <AppNavItem item={item} />}

            {item.type === "link" && <AppNavLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Navigation;
