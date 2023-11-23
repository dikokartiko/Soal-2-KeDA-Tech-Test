import CallToAction from "../layouts/CallToAction";
import HeroImages from "../layouts/HeroImages";

function Hero({ onRegisterClick }) {
  return (
    <section className="hero-section">
      <CallToAction onRegisterClick={onRegisterClick} />
      <HeroImages />
    </section>
  );
}

export default Hero;