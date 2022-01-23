import Connect from "./Connect";

export const ConnectConfig = {
  routes: [
    {
      path: "/spark_up/awaiting_funds/connect/",
      exact: true,
      component: Connect,
    },
  ],
};
