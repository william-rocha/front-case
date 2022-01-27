import { createContext } from "react";

const AppContext = createContext({
  showSideBar: false,
  ToggleSideBarView: () => {},
  scrollPositon: null,
});

export default AppContext;
