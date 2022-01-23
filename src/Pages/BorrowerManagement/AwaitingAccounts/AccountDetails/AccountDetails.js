import { Grid, Typography, TextField, Avatar, Button } from "@material-ui/core";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function AccountDetails(props) {
  const [married, setMarried] = useState("yes");
  const [widow, setWidow] = useState("yes");
  const [divorced, setDivorced] = useState("yes");
  const [values, setValues] = useState("");
  const { info } = props;

  useEffect(() => {
    if (info != null) {
      if (info.married === false) {
        setMarried("no");
      } else {
        setMarried("yes");
      }
      if (info.divorced === false) {
        setDivorced("no");
      } else {
        setDivorced("yes");
      }
      if (info.widow === false) {
        setWidow("no");
      } else {
        setWidow("yes");
      }
      setValues(info);
    }
  }, [info]);

  const approveUser = (data) => {
    console.log(data);
    firebase
      .firestore()
      .collection("users")
      .doc(data)
      .update({ accountStatus: 200 })
      .then(() => {
        toast.info("Approval Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  const rejectUser = (data) => {
    console.log(data);
    firebase
      .firestore()
      .collection("users")
      .doc(data)
      .update({ accountStatus: 406 })
      .then(() => {
        toast.info("Reject Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <Grid container spacing={4}>
      <Grid spacing={2} direction="column" item sm={4} xl={4} xs={12}>
        <TextField
          id="fullname"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Full Name"
          name="fullname"
          type="text"
          value={values.name}
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="bio"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Short Bio"
          name="bio"
          type="text"
          multiline
          rows={5}
          value={values.shortBio}
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="birthcity"
          variant="outlined"
          margin="normal"
          fullWidth
          label="City of Birth"
          name="birthcity"
          type="text"
          value={values.cityYouWereBorn}
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="province"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Province"
          name="province"
          type="text"
          value={values.province}
          inputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="country"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Country"
          name="country"
          type="text"
          value="Zambia"
        />
      </Grid>
      <Grid direction="column" item sm={4} xl={4} xs={12}>
        <Grid container spacing={1}>
          <Grid item sm={5} xl={5} xs={12}>
            <TextField
              id="children"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Number of Children"
              name="children"
              type="text"
              value={values.numberOfChildren}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item sm={5} xl={5} xs={12}>
            <TextField
              id="birthdate"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Date of Birth"
              name="birthdate"
              type="text"
              value={values.dob}
              inputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid spacing={1} item direction="column" sm={4} xl={4} xs={4}>
            <Typography variant="body1">Married</Typography>
            <ToggleButtonGroup
              color="info"
              size="small"
              value={married}
              exclusive
            >
              <ToggleButton value="no">No</ToggleButton>
              <ToggleButton value="yes">Yes</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid spacing={1} item direction="column" sm={4} xl={4} xs={4}>
            <Typography variant="body1">Widow</Typography>
            <ToggleButtonGroup
              color="info"
              size="small"
              value={widow}
              exclusive
            >
              <ToggleButton value="no">No</ToggleButton>
              <ToggleButton value="yes">Yes</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid spacing={1} item direction="column" sm={4} xl={4} xs={4}>
            <Typography variant="body1">Divorced</Typography>
            <ToggleButtonGroup
              color="info"
              size="small"
              value={divorced}
              exclusive
            >
              <ToggleButton value="no">No</ToggleButton>
              <ToggleButton value="yes">Yes</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item direction="column">
            <Typography variant="body1">Photo</Typography>
            <Avatar
              alt="Remy Sharp"
              src={values.photo}
              variant="rounded"
              style={{
                width: "100%",
                height: 300,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid direction="column" item sm={4} xl={4} xs={12}>
        <Grid container spacing={3}>
          <Grid item direction="column">
            <Typography variant="body1">Front side of ID</Typography>
            <Avatar
              alt="Remy Sharp"
              src={values.idFront}
              variant="rounded"
              style={{
                width: 400,
                height: 200,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item direction="column">
            <Typography variant="body1">Back side of ID</Typography>
            <Avatar
              alt="Remy Sharp"
              src={values.idBack}
              variant="rounded"
              style={{
                width: 400,
                height: 200,
              }}
            />
          </Grid>
          <Grid container spacing={1}>
            <Grid item sm={6} xl={6} xs={12}>
              <Button
                type="Submit"
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => approveUser(values.id)}
                style={{ borderRadius: 20 }}
              >
                Approve
              </Button>
            </Grid>
            <Grid item sm={6} xl={6} xs={12}>
              <Button
                type="Submit"
                color="secondary"
                variant="contained"
                fullWidth
                onClick={() => rejectUser(values.id)}
                style={{ borderRadius: 20 }}
              >
                Deny
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AccountDetails;
