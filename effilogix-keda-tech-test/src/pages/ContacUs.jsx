import ContactInfo from "../components/general/ContactInfo";
import ContactForm from "../components/general/ContactForm";

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <div className="header">
          <p className="title">Contact us</p>
          <h1>Chat to our friendly team</h1>
          <p className="description">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>
        <div className="content">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
