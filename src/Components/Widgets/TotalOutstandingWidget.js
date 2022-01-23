import React from "react";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";

export default function TotalOutstandingWidget(props) {
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
              <ReceiptRoundedIcon
                style={{ color: "black", width: 50, height: 50 }}
              />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography color="inherit" gutterBottom variant="h7">
              Total Outstanding Payments
            </Typography>
            <Typography
              color="primary"
              variant="h6"
              style={{ fontWeight: 600 }}
            >
              200,000 KWA
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
