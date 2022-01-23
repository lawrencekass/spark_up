import DefaultLoans from "./DefaultLoans";

export const DefaultLoansConfig = {
  routes: [
    {
      path: "/gh-pages/default_borrowers",
      exact: true,
      component: DefaultLoans,
    },
  ],
};
