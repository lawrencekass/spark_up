import Connect from "./Connect";

export const ConnectConfig = {
  routes: [
    {
      path: "/awaiting_funds/connect",
      exact: true,
      component: Connect,
    },
  ],
};
