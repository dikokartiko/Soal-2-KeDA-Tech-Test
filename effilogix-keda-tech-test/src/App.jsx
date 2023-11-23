import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./pages/Hero";
import "./stylesheets/base/base.scss";
import useLoginModal from "./hooks/useLoginModal";
import useRegisterModal from "./hooks/useRegisterModal";
import LoginModal from "./components/general/modals/LoginModals";
import RegisterModal from "./components/general/modals/RegisterModal";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import useSmoothScroll from "./hooks/smoothScroll";
import useStickyHeader from "./hooks/useStickyHeader";

const App = () => {
  const [showLoginModal, toggleLoginModal] = useLoginModal();
  const [showRegisterModal, toggleRegisterModal] = useRegisterModal();
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
      <div className="body-content-custom">
        <Header
          onLoginClick={toggleLoginModal}
          onAboutClick={handleAboutClick}
          onPricingClick={handlePricingClick}
          onContactClick={handleContactClick}
          isSticky={isSticky}
        />
        <LoginModal show={showLoginModal} handleClose={toggleLoginModal} />
        <Hero
          onRegisterClick={toggleRegisterModal}
          onAboutClick={handleAboutClick}
        />
        <RegisterModal
          show={showRegisterModal}
          handleClose={toggleRegisterModal}
        />
        <AboutUs />
        <Pricing />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default App;
