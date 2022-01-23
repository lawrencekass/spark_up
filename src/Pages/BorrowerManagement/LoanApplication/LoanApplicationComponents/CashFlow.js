import { Grid, Typography, TextField, Avatar, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperstyle: {
    padding: 20,
    height: 400,
    width: 450,
    margin: "auto",
    borderRadius: 30,
  },
}));

function CashFlow(props) {
  const { info } = props;
  const classes = useStyles();

  return (
    <Grid>
      <Paper elevation={3} className={classes.paperstyle}>
        <Grid container spacing={2}>
          <Grid
            direction="column"
            item
            spacing={3}
            alignContent="center"
            alignItems="center"
          >
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Previous Working Capital:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K2000</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Loan Capital:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K4000</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Gross Revenue:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K7250</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography variant="h6">Total Capital:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h6">K9250</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            direction="column"
            item
            spacing={3}
            alignContent="center"
            alignItems="center"
          >
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Inventory Cost:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K3900</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Operating Cost:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K90</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Living Expense/Take Home:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K1050</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography>Loan Repayment:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography>K150</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography variant="h6">Total Cost:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h6">K5190</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            direction="column"
            item
            spacing={3}
            alignContent="center"
            alignItems="center"
          >
            <Grid container item spacing={2}>
              <Grid item sm={10}>
                <Typography variant="h6">Net Operating Capital:</Typography>
              </Grid>
              <Grid item sm={2}>
                <Typography variant="h6" align="right">
                  K4060
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default CashFlow;
