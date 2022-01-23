import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BusinessInfo from "../LoanApplicationComponents/BusinessInfo";
import LoanUsage from "../LoanApplicationComponents/LoanUsage";
import Projections from "../LoanApplicationComponents/Projections";
import BusinessCosts from "../LoanApplicationComponents/BusinessCost";
import LivingExpenses from "../LoanApplicationComponents/LivingExpenses";
import CashFlow from "../LoanApplicationComponents/CashFlow";
import { Button, Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function LoanApplicationDetails() {
  const [value, setValue] = React.useState(0);
  const approveUser = (data) => {
    //   console.log(data);
    //   firebase
    //     .firestore()
    //     .collection("users")
    //     .doc(data)
    //     .update({ accountStatus: 200 })
    //     .then(() => {
    //       toast.info("Approval Successful", {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });
    //     })
    //     .catch((err) => {
    //       toast.error(err.message, {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });
    //     });
  };
  const rejectUser = (data) => {
    //   console.log(data);
    //   firebase
    //     .firestore()
    //     .collection("users")
    //     .doc(data)
    //     .update({ accountStatus: 406 })
    //     .then(() => {
    //       toast.info("Reject Successful", {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });
    //     })
    //     .catch((err) => {
    //       toast.error(err.message, {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });
    //     });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2} direction="column">
      <Grid>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="loan application details"
            >
              <Tab label="Business Info" {...a11yProps(0)} />
              <Tab label="Loan Usage" {...a11yProps(1)} />
              <Tab label="Projections" {...a11yProps(2)} />
              <Tab label="Business Costs" {...a11yProps(3)} />
              <Tab label="Living Expenses" {...a11yProps(4)} />
              <Tab label="CashFlow" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <BusinessInfo />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LoanUsage />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Projections />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <BusinessCosts />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <LivingExpenses />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <CashFlow />
          </TabPanel>
        </Box>
      </Grid>
      <Grid>
        <Grid container spacing={1}>
          <Grid item sm={6} xl={6} xs={12}>
            <Button
              type="Submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => approveUser("values.id")}
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
              onClick={() => rejectUser("values.id")}
              style={{ borderRadius: 20 }}
            >
              Deny
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoanApplicationDetails;
