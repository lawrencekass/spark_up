import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import NavLinkAdapter from "../../NavLinkAdapter/NavLinkAdapter";
import AppNavBadge from "../AppNavBadge";
import "material-design-icons/iconfont/material-icons.css";

const useStyles = makeStyles((theme) => ({
  active: {
    background: "rgb(6,43,85)",
    color: "#fff",
    "&:hover": {
      background: "#1a4fab",
    },
    // // borderRadius: "10px 0 0 10px"
  },
}));

const AppNavItem = (props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <ListItem
      button
      component={NavLinkAdapter}
      to={item.url}
      activeClassName={classes.active}
      exact={item.exact}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
      {item.badge && <AppNavBadge className="mr-4" badge={item.badge} />}
    </ListItem>
  );
};

export default AppNavItem;
