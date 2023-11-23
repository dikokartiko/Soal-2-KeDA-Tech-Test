import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/images/logo.png";

function Footer() {
  const menu = [{ name: "About" }, { name: "Pricing" }, { name: "Contact" }];
  return (
    <div className="footer-sec">
      <Container>
        <Row className="content">
          <Col>
            <div className="grid-footer-logo">
              <div>
                <img src={logo} alt="Effilogix logo" height={"100%"} />
              </div>
              <div>
                <h2 className="mb-0">EffiLogix</h2>
              </div>
            </div>
          </Col>
          <Col>
            <div className="grid-footer">
              {Object(menu).map((item, i) => {
                return (
                  <a
                    key={i}
                    href={
                      item.name === "Pricing"
                        ? "#pricing"
                        : item.name === "Contact"
                        ? "#contact"
                        : item.name === "About"
                        ? "#about-us"
                        : ""
                    }>
                    <button className="btn button-footer">{item.name}</button>
                  </a>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
