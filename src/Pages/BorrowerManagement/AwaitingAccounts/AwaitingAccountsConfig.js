import AwaitingAccounts from "./AwaitingAccounts";

export const AwaitingAccountsConfig = {
  routes: [
    {
      path: "/spark_up/awaiting_accounts/",
      exact: true,
      component: AwaitingAccounts,
    },
  ],
};
