import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import AppListItems from "../ListItems/AppListItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MsgList = [
  {
    id: 1,
    title: "Transaction approval",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    subTitle: "Tranaction Approval needed",
  },
];

const MessagesContainer = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <AppListItems type="ListItemAvatar" data={MsgList} />
    </List>
  );
};

export default MessagesContainer;
