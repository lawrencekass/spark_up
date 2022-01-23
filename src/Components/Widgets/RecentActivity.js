import { Paper } from "@material-ui/core";
import { List } from "@mui/material";
import React from "react";
import AppListItems from "../ListItems/AppListItems";

const recentActivity = [
  {
    id: 1,
    title: "You lent 200 KWA to Sharon",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    subTitle: "25 May 2021",
  },
  {
    id: 2,
    title: "Tanya repaid 200 KWA on loan",
    avatar:
      "https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328",
    subTitle: "24 May 2021",
  },
  //   {
  //     id: 3,
  //     title: "You lent 200 KWA to Sharon",
  //     avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  //     subTitle: "25 May 2021",
  //   },
  //   {
  //     id: 4,
  //     title: "Tanya repaid 200 KWA on loan",
  //     avatar:
  //       "https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328",
  //     subTitle: "24 May 2021",
  //   },
  //   {
  //     id: 5,
  //     title: "You lent 200 KWA to Sharon",
  //     avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  //     subTitle: "25 May 2021",
  //   },
  //   {
  //     id: 6,
  //     title: "Tanya repaid 200 KWA on loan",
  //     avatar:
  //       "https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328",
  //     subTitle: "24 May 2021",
  //   },
  //   {
  //     id: 7,
  //     title: "Tanya repaid 200 KWA on loan",
  //     avatar:
  //       "https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328",
  //     subTitle: "24 May 2021",
  //   },
];
export default function RecentActivity(props) {
  return (
    <>
      <div className="header">
        <h1 className="title">Recent Activities</h1>
      </div>
      <Paper elevation={4} style={{ maxHeight: 355, overflow: "auto" }}>
        <List>
          <AppListItems type="ListItemAvatar" data={recentActivity} />
        </List>
      </Paper>
    </>
  );
}
