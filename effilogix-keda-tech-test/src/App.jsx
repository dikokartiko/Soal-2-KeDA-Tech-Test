import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./pages/Hero";
import useLoginModal from "./hooks/useLoginModal";
import useRegisterModal from "./hooks/useRegisterModal";
import LoginModal from "./components/general/modals/LoginModals";
import RegisterModal from "./components/general/modals/RegisterModal";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import useSmoothScroll from "./hooks/smoothScroll";
import useStickyHeader from "./hooks/useStickyHeader";
import "./stylesheets/main.scss";

const App = () => {
  const [showLoginModal, toggleLoginModal] = useLoginModal();
  const [showRegisterModal, toggleRegisterModal] = useRegisterModal();
  const smoothScroll = useSmoothScroll();
  const isSticky = useStickyHeader("#startHeaderFixed");

  const handleAboutClick = (event) => {
    event.preventDefault();
    smoothScroll("about-us");
    document.getElementById('about-us').style.paddingTop = "240px";
  };
  const handlePricingClick = (event) => {
    event.preventDefault();
    smoothScroll("pricing");
    document.getElementById('pricing').style.paddingTop = "240px";
  };
  const handleContactClick = (event) => {
    event.preventDefault();
    smoothScroll("contact");
    document.getElementById('contact').style.paddingTop = "240px";
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
        <RegisterModal
          show={showRegisterModal}
          handleClose={toggleRegisterModal}
        />
        <div>
          <div id="startHeaderFixed"></div>
          <Hero
            onRegisterClick={toggleRegisterModal}
            onAboutClick={handleAboutClick}
          />
          <AboutUs />
          <Pricing />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
