import React from "react";
import { Redirect } from "react-router-dom";

import { LoginConfig } from "../Pages/Login/LoginConfig";
import { DashboardConfig } from "../Pages/Dashboard/DashboardConfig";
import { AwaitingAccountsConfig } from "../Pages/BorrowerManagement/AwaitingAccounts/AwaitingAccountsConfig";
import { LoanApplicationConfig } from "../Pages/BorrowerManagement/LoanApplication/LoanApplicationConfig";
import { AwaitingFundsConfig } from "../Pages/BorrowerManagement/AwaitingFunds/AwaitingFundsConfig";
import { ActiveLoansConfig } from "../Pages/BorrowerManagement/ActiveLoans/ActiveLoansConfig";
import { ConnectConfig } from "../Pages/BorrowerManagement/Connect/ConnectConfig";
import { DefaultLoansConfig } from "../Pages/BorrowerManagement/DefaultLoans/DefaultLoansConfig";
import { ConnectToBankConfig } from "../Pages/FundManagement/ConnectToBank/ConnectToBankConfig";
import { CapitalDistributionConfig } from "../Pages/FundManagement/CapitalDistribution/CapitalDistributionConfig";
import { Error404PageConfig } from "../Pages/Errors/404/Error404PageConfig";
import { Error500PageConfig } from "../Pages/Errors/500/Error500PageConfig";
import { Error600PageConfig } from "../Pages/Errors/600/Error600PageConfig";

const routeConfigs = [
  ...LoginConfig.routes,
  ...DashboardConfig.routes,
  ...AwaitingAccountsConfig.routes,
  ...LoanApplicationConfig.routes,
  ...AwaitingFundsConfig.routes,
  ...ActiveLoansConfig.routes,
  ...ConnectConfig.routes,
  ...DefaultLoansConfig.routes,
  ...ConnectToBankConfig.routes,
  ...CapitalDistributionConfig.routes,
  ...Error404PageConfig.routes,
  ...Error500PageConfig.routes,
  ...Error600PageConfig.routes,
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/spark_up/pages/errors/error-404" />,
  },
];

export default routes;
