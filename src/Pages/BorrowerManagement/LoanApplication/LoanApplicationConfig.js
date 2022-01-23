import LoanApplication from "./LoanApplication";

export const LoanApplicationConfig = {
  routes: [
    {
      path: "/gh-pages/loan_application",
      exact: true,
      component: LoanApplication,
    },
  ],
};
