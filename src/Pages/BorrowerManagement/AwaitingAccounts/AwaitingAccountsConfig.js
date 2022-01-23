import AwaitingAccounts from "./AwaitingAccounts";

export const AwaitingAccountsConfig = {
  routes: [
    {
      path: "/awaiting_accounts",
      exact: true,
      component: AwaitingAccounts,
    },
  ],
};
