import DefaultLoans from "./DefaultLoans";

export const DefaultLoansConfig = {
  routes: [
    {
      path: "/spark_up/default_borrowers",
      exact: true,
      component: DefaultLoans,
    },
  ],
};
