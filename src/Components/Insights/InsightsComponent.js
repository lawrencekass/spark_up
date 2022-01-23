import { Grid } from "@mui/material";
import React from "react";
import CashInWidget from "../Widgets/CashInWidget";
import CashOutWidget from "../Widgets/CashOutWidget";

export default function InsightsComponent() {
  return (
    <>
      <div>
        <h4>Insights</h4>
      </div>
      <Grid container spacing={2}>
        <Grid item sm={5} xs={12} xl={5}>
          <CashInWidget />
        </Grid>
        <Grid sm={2}></Grid>
        <Grid item sm={5} xs={12} xl={5}>
          <CashOutWidget />
        </Grid>
      </Grid>
    </>
  );
}
