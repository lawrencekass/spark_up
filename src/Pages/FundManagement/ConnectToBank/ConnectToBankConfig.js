import ConnectToBank from "./ConnectToBank";

export const ConnectToBankConfig = {
  routes: [
    {
      path: "/spark_up/connect_to_bank",
      exact: true,
      component: ConnectToBank,
    },
  ],
};
