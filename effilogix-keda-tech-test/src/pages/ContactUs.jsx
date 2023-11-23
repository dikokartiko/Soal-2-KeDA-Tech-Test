import ContactInfo from "../components/general/ContactInfo";
import ContactForm from "../components/general/ContactForm";

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us section-cnt">
      <div className="container">
        <div className="header">
          <p className="main-title">Contact us</p>
          <h1 className="title">Chat to our friendly team</h1>
          <p className="description">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>
        <div className="content shadow">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
