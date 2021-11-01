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
import { SidebarVisibilityContextProvider } from "./store/sidebarVisibilityContext";

const heroData = {
  title: "Endless entertainment and knowledge",
  subtitle: "Read or listen anytime, anywhere.",
  ctaText: "Read free for 90 days",
  ctaSubText: "Only ₹299/month after. Cancel anytime."
}

function App() {
  return (
    <div className="App">
      <SidebarVisibilityContextProvider>
        <Header />
        <Backdrop />
        <Sidebar />
      </SidebarVisibilityContextProvider>
      <Hero {...heroData} />
      <FeaturedBoxList />
      <FeaturedTestimonial />
      <BestBooksGrid />
      <FeaturedDataList />
      <SectionHeading />
      <CardList />
      <SectionHeading />
      <BookDetail />
      <FooterPrimary />
      <FooterSecondary />
    </div>
  );
}

export default App;
