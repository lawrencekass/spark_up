import DefaultLoans from "./DefaultLoans";

export const DefaultLoansConfig = {
  routes: [
    {
      path: "/default_borrowers",
      exact: true,
      component: DefaultLoans,
    },
  ],
};
