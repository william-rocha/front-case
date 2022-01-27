import PageContainer from "./components/pageContainer";

import Header from "./components/header";
import AppRoutes from "./routes";
import Sidebar from "./components/sidebar";
import AppProvider from "./appContext/Provider";
import AppContext from "./appContext/Context";
import "./App.css";

function App() {
  return (
    <main className="App">
      <AppProvider>
        <Header />
        <Sidebar />
        <AppContext.Consumer>
          {({ showSidebar }) => (showSidebar ? "foi" : "não")}
        </AppContext.Consumer>
        <PageContainer>
          <AppRoutes />
        </PageContainer>
      </AppProvider>
    </main>
  );
}

export default App;
