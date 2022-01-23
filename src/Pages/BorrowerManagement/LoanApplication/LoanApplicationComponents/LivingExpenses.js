import { Grid, Typography, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function LivingExpenses(props) {
  const { info } = props;

  return (
    <Grid container spacing={4}>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container spacing={1}>
          <TextField
            id="food"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Food"
            name="food"
            type="text"
            //value={values.food}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="shelter"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Shelter"
            name="shelter"
            type="text"
            //value={values.shelter}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="gas"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Gas"
            name="gas"
            type="text"
            //value={values.gas}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LivingExpenses;
