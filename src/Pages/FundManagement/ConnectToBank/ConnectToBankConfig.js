import ConnectToBank from "./ConnectToBank";

export const ConnectToBankConfig = {
  routes: [
    {
      path: "/connect_to_bank",
      exact: true,
      component: ConnectToBank,
    },
  ],
};
