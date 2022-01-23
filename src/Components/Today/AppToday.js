import React from "react";
import moment from "moment";
import { Typography, Divider, makeStyles } from "@material-ui/core";

import EventsContainer from "../Events/EventsContainer";
import NotesContainer from "../Notes/NotesContainer";

const useStyles = makeStyles(theme => ({
  dividerMargin: {
    margin: "20px 0"
  } 
}));

const AppToday = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5">{moment().format("dddd")}</Typography>
      <Typography variant="subtitle1">{moment().format("LL")}</Typography>
      <Divider
        classes={{
          root: classes.dividerMargin
        }}
      />
      <Typography variant="h6">Events</Typography>
      <EventsContainer />
      <Divider
        classes={{
          root: classes.dividerMargin
        }}
      />
      <Typography variant="h6">Notes</Typography>
      <NotesContainer />
    </div>
  );
};

export default AppToday;