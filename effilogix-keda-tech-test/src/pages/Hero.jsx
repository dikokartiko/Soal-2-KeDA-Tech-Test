/* eslint-disable react/prop-types */
import CallToAction from "../layouts/CallToAction";
import HeroImages from "../layouts/HeroImages";

function Hero({ onRegisterClick, onAboutClick }) {
  return (
    <section className="hero-section section-cnt">
      <CallToAction
        onRegisterClick={onRegisterClick}
        onAboutClick={onAboutClick}
      />
      <HeroImages />
    </section>
  );
}

export default Hero;
