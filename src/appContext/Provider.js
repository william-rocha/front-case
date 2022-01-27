import React, { useState } from "react";
import AppContext from "./Context";

const defaultShowSidebar = true;
const AppProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(defaultShowSidebar);
  const [scrollPositon, setScrollPositon] = useState("up");

  const ToggleSideBarView = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        showSideBar,
        ToggleSideBarView,
        scrollPositon,
        setScrollPositon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
