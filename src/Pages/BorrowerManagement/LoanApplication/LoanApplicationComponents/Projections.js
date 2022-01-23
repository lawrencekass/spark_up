import { Grid, Typography, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function Projections(props) {
  const { info } = props;

  return (
    <Grid container spacing={4}>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container spacing={2}>
          <TextField
            id="benefits"
            variant="outlined"
            margin="normal"
            fullWidth
            label="How your business will benefit from the loan"
            name="benefits"
            type="text"
            multiline
            rows={5}
            //value={values.benefits}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="growth"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Areas of growth by product"
            name="growth"
            type="text"
            //value={values.growth}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container item spacing={1}>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="unit"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Unit Type"
              name="unit"
              type="text"
              //value={values.unit}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="margin"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Margin %"
              name="margin"
              type="text"
              //value={values.margin}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="expectedsales"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Expected Unit of Sales"
            name="expectedsales"
            type="text"
            //value={values.expectedsales}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="profit"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Profit Total"
            name="profit"
            type="text"
            //value={values.profit}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container spacing={1}>
          <TextField
            id="cost"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Unit Cost"
            name="cost"
            type="text"
            //value={values.cost}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="monthsale"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Expected Month Sales"
            name="monthsale"
            type="text"
            //value={values.monthsale}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="totalrevenue"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Total Revenue per month"
            name="totalrevenue"
            type="text"
            //value={values.totalrevenue}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projections;
