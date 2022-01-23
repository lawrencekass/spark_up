import LoanApplication from "./LoanApplication";

export const LoanApplicationConfig = {
  routes: [
    {
      path: "/loan_application",
      exact: true,
      component: LoanApplication,
    },
  ],
};
