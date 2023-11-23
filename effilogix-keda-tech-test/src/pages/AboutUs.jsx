import image from ".././assets/images/about/about.svg";
import "../stylesheets/pages/about.scss";
function AboutUs() {
  return (
    <section id="about-us" className="section-cnt">
      <div className="about-us">
        <div className="about-us-logo">
          <img src={image} alt="vector" />
        </div>
        <div className="about-us-description shadow">
          <h2 className="main-title">About Us</h2>
          <p>
            EffiLogix is pioneering a new horizon in business management,
            offering a bespoke ERP-like platform that transforms inventory and
            profit tracking for entrepreneurs. Our solution is engineered to
            streamline the complexities of daily transactions and insights,
            empowering you with the clarity and control needed to nurture and
            grow your business. With EffiLogix, simplicity meets sophistication.
            Our system effortlessly captures the ebb and flow of your products
            and profits, providing you with a comprehensive toolkit to make
            informed decisions and focus on what truly matters—your business
            vision and customer satisfaction. Join us and experience the
            efficiency of EffiLogix, where your entrepreneurial journey scales
            new heights.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
