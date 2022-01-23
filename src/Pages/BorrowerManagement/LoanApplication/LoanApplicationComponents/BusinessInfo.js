import { Grid, Typography, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function BusinessInfo(props) {
  const { info } = props;

  return (
    <Grid container spacing={4}>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container item spacing={1}>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="typeofbusiness"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Type of Business"
              name="typeofbusiness"
              type="text"
              //value={values.typeofbusiness}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item sm={6} xl={6} xs={12}>
            <TextField
              id="yearsinbusiness"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Years in business"
              name="yearsinbusiness"
              type="text"
              //value={values.yearsinbusiness}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <TextField
            id="businessdescription"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Business Description"
            name="businessdescription"
            type="text"
            multiline
            rows={5}
            //value={values.businessdescription}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="currentproductoffering"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Current Product Offering"
            name="currentproductoffering"
            type="text"
            //value={values.currentproductoffering}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="currentworkingcapital"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Current Working Capital"
            name="currentworkingcapital"
            type="text"
            //value={values.currentworkingcapital}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}>
          <TextField
            id="averageweeklyprofits"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Average Weekly Profits"
            name="averageweeklyprofits"
            type="text"
            //value={values.averageweeklyprofits}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid direction="column" item sm={6} xl={6} xs={12}>
        <Grid container spacing={1}>
          <TextField
            id="location"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Location"
            name="location"
            type="text"
            //value={values.location}
            inputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container spacing={1}></Grid>
        <Grid container spacing={1}>
          <Typography variant="body1">Picture</Typography>
          <Avatar
            alt="Remy Sharp"
            src=""
            variant="rounded"
            style={{
              width: 470,
              height: 200,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BusinessInfo;
