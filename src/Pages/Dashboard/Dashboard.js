import React from "react";
import AppLayout from "../../Components/AppLayout/AppLayout";
import { Grid } from "@material-ui/core";
import TotalBorrowerWidget from "../../Components/Widgets/TotalBorrowerWidget";
import TotalLoansWidget from "../../Components/Widgets/TotalLoansWidget";
import TotalCollectedWidget from "../../Components/Widgets/TotalCollectedWidget";
import TotalOutstandingWidget from "../../Components/Widgets/TotalOutstandingWidget";
import SummaryChart from "../../Components/Charts/SummaryChart";
import RecentActivity from "../../Components/Widgets/RecentActivity";
import InsightsComponent from "../../Components/Insights/InsightsComponent";
import CashFlowChart from "../../Components/Charts/CashFlowChart";

const Dashboard = (props) => {
  return (
    <AppLayout>
      <Grid container direction="row" spacing={1}>
        <Grid item sm={3} xl={3} xs={12}>
          <TotalBorrowerWidget />
        </Grid>
        <Grid item sm={3} xl={3} xs={12}>
          <TotalLoansWidget />
        </Grid>
        <Grid item sm={3} xl={3} xs={12}>
          <TotalCollectedWidget />
        </Grid>
        <Grid item sm={3} xl={3} xs={12}>
          <TotalOutstandingWidget />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={7} xl={7}>
          <SummaryChart />
        </Grid>
        <Grid item xs={12} sm={5} xl={5}>
          <RecentActivity />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <InsightsComponent />
      </Grid>
      <Grid container>
        <CashFlowChart />
      </Grid>
    </AppLayout>
  );
};

export default Dashboard;
