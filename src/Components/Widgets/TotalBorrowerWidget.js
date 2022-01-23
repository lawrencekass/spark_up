import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";

export default function TotalBorrowerWidget(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}
          style={{ justifyContent: "space-between" }}
        >
          <Grid item>
            <Avatar
              style={{
                backgroundColor: "white",
                height: 60,
                width: 60,
              }}
            >
              <PaymentsRoundedIcon
                style={{ color: "black", width: 50, height: 50 }}
              />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography color="inherit" gutterBottom variant="h7">
              Total Borrowers
            </Typography>
            <Typography
              color="primary"
              variant="h6"
              style={{ fontWeight: 600 }}
            >
              235
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
