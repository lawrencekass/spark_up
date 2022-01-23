import { Grid, Typography, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function BusinessCosts(props) {
  const { info } = props;

  return (
    <Grid container spacing={4}>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container spacing={1}>
          <TextField
            id="expensename"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Expense Name"
            name="expensename"
            type="text"
            //value={values.expensename}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="totalweeklycost"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Total Weekly Cost"
            name="totalweeklycost"
            type="text"
            //value={values.totalweeklycost}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BusinessCosts;
