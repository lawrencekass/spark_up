import DefaultLoans from "./DefaultLoans";

export const DefaultLoansConfig = {
  routes: [
    {
      path: "https://lawrencekass.github.io/spark_up/default_borrowers",
      exact: true,
      component: DefaultLoans,
    },
  ],
};
