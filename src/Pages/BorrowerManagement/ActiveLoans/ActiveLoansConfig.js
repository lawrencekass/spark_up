import ActiveLoans from "./ActiveLoans";

export const ActiveLoansConfig = {
  routes: [
    {
      path: "/gh-pages/active_loans",
      exact: true,
      component: ActiveLoans,
    },
  ],
};
