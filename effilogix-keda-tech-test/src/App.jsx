import Header from "./layouts/header";
import Hero from "./pages/Hero";
import "./styles/styles.scss";
import useLoginModal from "./hooks/useLoginModal";
import LoginModal from "./components/general/modals/LoginModals";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import useSmoothScroll from "./hooks/smoothScroll";
import useStickyHeader from "./hooks/useStickyHeader";
const App = () => {
  const [showLoginModal, toggleLoginModal] = useLoginModal();
  const smoothScroll = useSmoothScroll();
  const isSticky = useStickyHeader(".hero-section");
  const handleAboutClick = (event) => {
    event.preventDefault();
    smoothScroll("about-us");
  };
  const handlePricingClick = (event) => {
    event.preventDefault();
    smoothScroll("pricing");
  };
  const handleContactClick = (event) => {
    event.preventDefault();
    smoothScroll("contact");
  };
  return (
    <>
      <Header
        onLoginClick={toggleLoginModal}
        onAboutClick={handleAboutClick}
        onPricingClick={handlePricingClick}
        onContactClick={handleContactClick}
        isSticky={isSticky}
      />
      <LoginModal show={showLoginModal} handleClose={toggleLoginModal} />
      <Hero />
      <AboutUs />
      <Pricing />
    </>
  );
};

export default App;
