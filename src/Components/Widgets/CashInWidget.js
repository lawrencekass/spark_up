import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

export default function CashInWidget(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          style={{ justifyContent: "space-between" }}
        >
          <Grid item>
            <Typography
              color="inherit"
              gutterBottom
              variant="h6"
              style={{ fontWeight: 600 }}
            >
              Cash In
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="inherit"
              variant="h6"
              style={{ fontWeight: 500 }}
            >
              0.00 KWA
            </Typography>
            <Typography color="inherit" variant="caption">
              Total received
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="primary"
              variant="h7"
              style={{ fontWeight: 600 }}
            >
              Request money
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
