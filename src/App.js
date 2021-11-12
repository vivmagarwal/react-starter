import Backdrop from "./components/backdrop/backdrop";
import FooterPrimary from "./components/footerPrimary/footerPrimary";
import FooterSecondary from "./components/footerSecondary/footerSecondary";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import { SidebarVisibilityContextProvider } from "./store/sidebarVisibilityContext";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from "./pages/detail";
import List from "./pages/list";
import Create from "./pages/create";


function App() {
  return (
    <div className="page">
      <Router>
        <SidebarVisibilityContextProvider>
          <Header />
          <Backdrop />
          <Sidebar />
        </SidebarVisibilityContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
      <FooterPrimary />
      <FooterSecondary />
    </div>
  );
}

export default App;
