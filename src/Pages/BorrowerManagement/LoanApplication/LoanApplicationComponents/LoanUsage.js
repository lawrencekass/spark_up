import { Grid, Typography, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function LoanUsage(props) {
  const { info } = props;

  return (
    <Grid container spacing={4}>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container item spacing={1}>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="infrastructure"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Infrastructure"
              name="infrastructure"
              type="text"
              //value={values.infrastructure}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="inventory"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Inventory"
              name="inventory"
              type="text"
              //value={values.inventory}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <TextField
            id="loanusage"
            variant="outlined"
            margin="normal"
            fullWidth
            label="How you will use the loan"
            name="loanusage"
            type="text"
            multiline
            rows={5}
            //value={values.loanusage}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="restockfrequency"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Restock Frequency"
            name="restockfrequency"
            type="text"
            //value={values.restockfrequency}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="product"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Product"
            name="product"
            type="text"
            //value={values.product}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container item spacing={1}>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="quantity"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Quantity"
              name="quantity"
              type="text"
              //value={values.quantity}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="unitofmeasure"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Unit of Measure"
              name="unitofmeasure"
              type="text"
              //value={values.unitofmeasure}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container spacing={1}>
          <TextField
            id="cost"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Cost/Unit"
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
            id="costtotal"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Cost Total"
            name="costtotal"
            type="text"
            //value={values.costtotal}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoanUsage;
