const ContactInfo = () => {
    return (
      <div className="contact-info">
        <div className="info-block">
          <span className="icon"> {/* SVG icon for Email */} </span>
          <h2>Email</h2>
          <p>Our friendly team is here to help.</p>
          <p>hello@merakiui.com</p>
        </div>
  
        <div className="info-block">
          <span className="icon"> {/* SVG icon for Live Chat */} </span>
          <h2>Live Chat</h2>
          <p>Our friendly team is here to help.</p>
          <p>Start new chat</p>
        </div>
  
        <div className="info-block">
          <span className="icon"> {/* SVG icon for Office */} </span>
          <h2>Office</h2>
          <p>Come say hello at our office HQ.</p>
          <p>100 Smith Street Collingwood VIC 3066 AU</p>
        </div>
  
        <div className="info-block">
          <span className="icon"> {/* SVG icon for Phone */} </span>
          <h2>Phone</h2>
          <p>Mon-Fri from 8am to 5pm.</p>
          <p>+1 (555) 000-0000</p>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;