import LoanApplication from "./LoanApplication";

export const LoanApplicationConfig = {
  routes: [
    {
      path: "https://lawrencekass.github.io/spark_up/loan_application",
      exact: true,
      component: LoanApplication,
    },
  ],
};
