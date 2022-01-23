import React, { useState } from "react";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import AppBreadcrumbs from "../../../Components/BreadCrumbs/AppBreadCrumbs";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Mail from "@material-ui/icons/Mail";
import { Lock } from "@material-ui/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paperstyle: {
    padding: 20,
    height: "auto",
    width: 500,
    margin: "auto",
    borderRadius: 30,
  },
  textHeader: {
    color: "#fdcc40",
    fontWeight: 500,
    marginTop: "10px",
    marginBottom: "20px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  icon: {
    height: "20px",
  },
  button: {
    borderRadius: 22,
    height: "45px",
    marginTop: 10,
  },
}));
toast.configure();

function Connect(props) {
  const { history } = props;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const classes = useStyles();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setLoading(true);
  };
  return (
    <AppLayout>
      <AppBreadcrumbs path={history} />
      <Typography variant="h2" className={classes.textHeader}>
        Connect with 543
      </Typography>
      <Paper elevation={3} className={classes.paperstyle}>
        <Grid
          alignItems="center"
          justifyContent="center"
          direction="column"
          container
        >
          <Grid align="center">
            <Avatar
              src="/543-pay.svg"
              variant="rounded"
              style={{ width: 250, height: 120 }}
            />
          </Grid>
          <Grid item xl={8} xs={8} sm={8}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="email"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                {...register("email", { required: true })}
                error={!!errors.email}
                helperText={errors.email ? "Email is required" : ""}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors.password ? "Password is required" : ""}
              />
              {!loading && (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={!!errors.email || !!errors.password}
                >
                  Sign In
                </Button>
              )}
              {loading && <BeatLoader size={15} color="blue" />}
            </form>
            <Grid container direction="row" style={{ marginTop: 10 }}>
              <Grid style={{ marginRight: 10 }}>
                <Typography component="p">Forgot Password?</Typography>
              </Grid>
              <Grid>
                <Link href="#" variant="body2">
                  Rest password
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </AppLayout>
  );
}

export default Connect;
