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
        url: "/home",
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
            url: "/awaiting_accounts",
            exact: true,
          },
          {
            id: "loan",
            title: "Loan Application",
            type: "item",
            url: "/loan_application",
            exact: true,
          },
          {
            id: "funds",
            title: "Awaiting Funds",
            type: "item",
            url: "/awaiting_funds",
            exact: true,
          },
          {
            id: "active",
            title: "Active Loans",
            type: "item",
            url: "/active_loans",
            exact: true,
          },
          {
            id: "default",
            title: "Default Borrowers",
            type: "item",
            url: "/default_borrowers",
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
            url: "/connect_to_bank",
            exact: true,
          },
          {
            id: "capital",
            title: "Capital Distribution",
            type: "item",
            url: "/capital_distribution",
            exact: true,
          },
        ],
      },
      // {
      //   id: "reports",
      //   title: "Reports",
      //   type: "collapse",
      //   icon: "report",
      //   children: [
      //     {
      //       id: "motalityreport",
      //       title: "Motality Report",
      //       type: "item",
      //       url: "/pages/motalityreport",
      //       exact: true,
      //     },
      //     {
      //       id: "salesreport",
      //       title: "Sales Reports",
      //       type: "item",
      //       url: "/pages/salesreport",
      //       exact: true,
      //     },
      //   ],
      // },
    ],
  },
];

export default navigationConfig;
