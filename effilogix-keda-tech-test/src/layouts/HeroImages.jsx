import image from "../assets/images/hero-images/hero1.jpg";
import image2 from "../assets/images/hero-images/hero2.jpg";
import image3 from "../assets/images/hero-images/hero3.jpg";

function HeroImages() {
  return (
    <div className="hero-images">
      <img className="img-1" src={image} alt="hero image1" loading="lazy" />
      <img className="img-2" src={image2} alt="hero image2" loading="lazy" />
      <img className="img-3" src={image3} alt="hero image3" loading="lazy" />
    </div>
  );
}

export default HeroImages;
