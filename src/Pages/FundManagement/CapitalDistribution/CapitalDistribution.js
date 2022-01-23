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
import CapitalDistributionChart from "../../../Components/Charts/CapitalDistributionChart";

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

function CapitalDistribution(props) {
  const { history } = props;

  const classes = useStyles();
  return (
    <AppLayout>
      <AppBreadcrumbs path={history} />
      <Typography variant="h5" className={classes.textHeader}>
        Capital Distribution
      </Typography>
      <CapitalDistributionChart />
    </AppLayout>
  );
}

export default CapitalDistribution;
