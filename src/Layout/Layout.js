import React from "react";

import NavigationContext from "../Context/NavigationContext";
import AppDrawer from "./AppDrawer";

import Main from "./Main";
import Header from "./Header";
import RightPanel from "../Components/RightPanel/RightPanel";

const handleDrawerResponsive = () => {
  if (window.innerWidth < 900) {
    return false;
  }

  return true;
};

const Layout = (props) => {
  const [open, setOpen] = React.useState(() => handleDrawerResponsive());

  React.useEffect(() => {
    window.addEventListener("resize", resizeChecker);

    return () => {
      window.addEventListener("resize", resizeChecker);
    };
  }, []);

  const resizeChecker = () => {
    if (handleDrawerResponsive()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openRightPanel, setOpenRightPanel] = React.useState(false);
  const handleRightPanelOpen = (event, newValue) => {
    setOpenRightPanel(!openRightPanel);
    handleChange(event, newValue);
  };

  return (
    <NavigationContext.Provider
      value={{
        open,
        handleDrawerToggle,
        value,
        handleChange,
        handleRightPanelOpen,
        openRightPanel,
        setOpenRightPanel,
      }}
    >
      <Header />
      <AppDrawer drawerWidth={240} />
      <RightPanel />
      <Main drawerWidth={240} />
    </NavigationContext.Provider>
  );
};

export default Layout;
