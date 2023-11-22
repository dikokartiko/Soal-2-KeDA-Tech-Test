import image from "../assets/images/customers/customer-1.jpg";
import image2 from "../assets/images/customers/customer-2.jpg";
import image3 from "../assets/images/customers/customer-3.jpg";
import image4 from "../assets/images/customers/customer-4.jpg";
import image5 from "../assets/images/customers/customer-5.jpg";
import image6 from "../assets/images/customers/customer-6.jpg";
import Button from "../components/general/Button";
import useNumberAnimation from "../hooks/useNumberAnimation";
function CallToAction() {
  useNumberAnimation(0, 250000, 7000, "customer-count");
  return (
    <div className="call-to-action">
      <h1>
        Streamlining Success - Revolutionizing Inventory and Profit Tracking for
        Today&apos;s Entrepreneurs.
      </h1>
      <p className="description">
        Our startup has developed a website resembling an ERP system, tailored
        to simplify inventory and profit tracking for entrepreneurs. This
        intuitive platform seamlessly records the flow of goods and daily
        earnings, offering crucial insights for business growth. By merging
        advanced technology with ease of use, we empower business owners to
        streamline operations and focus on their core objectives.
      </p>
      <div className="cta-buttons">
        <Button name={"Register"} style={"primary"} size={"sm"} />
        <Button name={"Learn More ⬇️"} style={"secondary"} size={"sm"} />
      </div>
      <div className="customers">
        <div className="customer-img">
          <img src={image} alt="Customer photo" />
          <img src={image2} alt="Customer photo" />
          <img src={image3} alt="Customer photo" />
          <img src={image4} alt="Customer photo" />
          <img src={image5} alt="Customer photo" />
          <img src={image6} alt="Customer photo" />
        </div>
        <p className="delivered_text">
          <span id="customer-count">0+</span> satisfied customers
        </p>
      </div>
    </div>
  );
}

export default CallToAction;
