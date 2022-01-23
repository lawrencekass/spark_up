import ActiveLoans from "./ActiveLoans";

export const ActiveLoansConfig = {
  routes: [
    {
      path: "/active_loans",
      exact: true,
      component: ActiveLoans,
    },
  ],
};
