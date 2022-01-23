import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import Navigation from "../Components/Navigation/Navigation";
import NavigationContext from "../Context/NavigationContext";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (props) => props.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: (props) => props.drawerWidth,
    "& *": {
      color: "#ffffff",
    },
  },
}));

const AppDrawer = (props) => {
  const classes = useStyles(props);
  const { open } = React.useContext(NavigationContext);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Navigation />
    </Drawer>
  );
};

export default AppDrawer;
