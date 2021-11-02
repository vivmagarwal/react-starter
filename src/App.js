import Backdrop from "./components/backdrop/backdrop";
import BestBooksGrid from "./components/bestBooksGrid/bestBooksGrid";
import BookDetail from "./components/bookDetail/bookDetail";
import CardList from "./components/cardList/cardList";
import FeaturedBoxList from "./components/featuredBoxList/featuredBoxList";
import FeaturedDataList from "./components/featuredDataList/featuredDataList";
import FeaturedTestimonial from "./components/featuredTestimonial/featuredTestimonial";
import FooterPrimary from "./components/footerPrimary/footerPrimary";
import FooterSecondary from "./components/footerSecondary/footerSecondary";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import SectionHeading from "./components/sectionHeading/sectionHeading";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import { SidebarVisibilityContextProvider } from "./store/sidebarVisibilityContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
