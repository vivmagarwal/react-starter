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

const cardData = [
  {
    id: 1,
    title: 'The Chronicles of Narnia',
    image: 'https://source.unsplash.com/xG5VJW-7Bio/108x108',
    description:
      'Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book.',
    authorName: 'C.S. Lewis',
    authorURL: '#',
  },
  {
    id: 2,
    title: 'The Two Towers',
    image: 'https://source.unsplash.com/O7ygzpAL4Mc/108x108',
    description:
      'Epic fantasy adventure film directed by Peter Jackson, based on the second volume of J. R. R. Tolkiens The Lord of the Rings.',
    authorName: 'J.J.R. TOLKIEN',
    authorURL: '#',
  },
  {
    id: 3,
    title: 'Change the way you Think',
    image: 'https://source.unsplash.com/V5BGaJ0VaLU/108x108',
    description:
      'Seeing the wisdom in daily routine, and becoming aware of the cognitive biases that are creating the way you see your life.',
    authorName: 'BRIANNA WIEST',
    authorURL: '#',
  },
];

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
      <CardList cards={cardData} />
      <SectionHeading />
      <BookDetail />
      <FooterPrimary />
      <FooterSecondary />
    </div>
  );
}

export default App;
