import Dashboard from "./Dashboard";

export const DashboardConfig = {
  routes: [
    {
      path: "/gh-pages/home",
      exact: true,
      component: Dashboard,
    },
  ],
};
