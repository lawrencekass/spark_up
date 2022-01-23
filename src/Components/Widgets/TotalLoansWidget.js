import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";

export default function TotalLoansWidget(props) {
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
              <MoneyRoundedIcon
                style={{ color: "black", width: 50, height: 50 }}
              />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography color="inherit" gutterBottom variant="h7">
              Total Loans YTD
            </Typography>
            <Typography
              color="primary"
              variant="h6"
              style={{ fontWeight: 600 }}
            >
              450,000 KWA
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
