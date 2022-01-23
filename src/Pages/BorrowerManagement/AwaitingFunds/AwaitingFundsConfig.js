import AwaitingFunds from "./AwaitingFunds";

export const AwaitingFundsConfig = {
  routes: [
    {
      path: "/spark_up/awaiting_funds",
      exact: true,
      component: AwaitingFunds,
    },
  ],
};
