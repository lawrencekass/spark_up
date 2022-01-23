import ActiveLoans from "./ActiveLoans";

export const ActiveLoansConfig = {
  routes: [
    {
      path: "/spark_up/active_loans/",
      exact: true,
      component: ActiveLoans,
    },
  ],
};
