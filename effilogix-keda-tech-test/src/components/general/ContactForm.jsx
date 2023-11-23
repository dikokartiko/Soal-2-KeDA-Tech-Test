const ContactForm = () => {
    return (
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="form-control"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="form-control"
              />
            </div>
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="form-control"
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              className="form-control"></textarea>
          </div>
  
          <button type="submit" className="submit-btn">
            Send message
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;