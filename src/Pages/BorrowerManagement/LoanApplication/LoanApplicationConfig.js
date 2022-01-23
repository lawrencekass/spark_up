import LoanApplication from "./LoanApplication";

export const LoanApplicationConfig = {
  routes: [
    {
      path: "/spark_up/loan_application/",
      exact: true,
      component: LoanApplication,
    },
  ],
};
