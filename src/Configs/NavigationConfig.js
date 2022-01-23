const navigationConfig = [
  {
    id: "Main",
    title: "MAIN",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Home",
        type: "item",
        icon: "home",
        url: "/spark_up/home/",
        exact: true,
      },
      {
        id: "Manage",
        title: "Borrower Management",
        type: "collapse",
        icon: "people",

        children: [
          {
            id: "awaiting",
            title: "Awaiting Accounts",
            type: "item",
            url: "/spark_up/awaiting_accounts/",
            exact: true,
          },
          {
            id: "loan",
            title: "Loan Application",
            type: "item",
            url: "/spark_up/loan_application/",
            exact: true,
          },
          {
            id: "funds",
            title: "Awaiting Funds",
            type: "item",
            url: "/spark_up/awaiting_funds/",
            exact: true,
          },
          {
            id: "active",
            title: "Active Loans",
            type: "item",
            url: "/spark_up/active_loans/",
            exact: true,
          },
          {
            id: "default",
            title: "Default Borrowers",
            type: "item",
            url: "/spark_up/default_borrowers/",
            exact: true,
          },
        ],
      },
      {
        id: "fundmanagement",
        title: "Fund Management",
        type: "collapse",
        icon: "local_atm",

        children: [
          {
            id: "connect",
            title: "Connect Bank Account",
            type: "item",
            url: "/spark_up/connect_to_bank/",
            exact: true,
          },
          {
            id: "capital",
            title: "Capital Distribution",
            type: "item",
            url: "/spark_up/capital_distribution/",
            exact: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
