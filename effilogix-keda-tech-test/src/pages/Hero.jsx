import CallToAction from "../layouts/CallToAction";
import HeroImages from "../layouts/HeroImages";

function Hero({ onRegisterClick, onAboutClick }) {
  return (
    <section className="hero-section">
      <CallToAction
        onRegisterClick={onRegisterClick}
        onAboutClick={onAboutClick}
      />
      <HeroImages />
    </section>
  );
}

export default Hero;
