import Header from "./layouts/header";
import Hero from "./pages/Hero";
import "./styles/styles.scss";
import useLoginModal from "./hooks/useLoginModal";
import LoginModal from "./components/general/modals/LoginModals";
const App = () => {
  const [showLoginModal, toggleLoginModal] = useLoginModal();
  return (
    <div>
      <Header onLoginClick={toggleLoginModal} />
      <LoginModal show={showLoginModal} handleClose={toggleLoginModal} />
      <Hero />
    </div>
  );
};

export default App;
