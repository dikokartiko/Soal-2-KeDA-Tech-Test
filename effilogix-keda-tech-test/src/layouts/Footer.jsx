import '../styles/footer.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/images/logo.png";

function Footer() {
    const menu = [
        {"name": 'About'},
        {"name": 'Pricing'},
        {"name": 'Contact'}
    ];
    return (
        <div className="footer-sec">
            <Container>
                <Row className="content">
                    <Col>
                        <Row className='right-footer'>
                            <Col md="auto">
                                <img src={logo} alt="Effilogix logo" height={"100%"} />
                            </Col>
                            <Col md="auto">
                                <h2 className='mb-0'>EffiLogix</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Row className='float-end'>
                            {Object(menu).map((item, i) => {
                                return(
                                    <Col md="auto" key={i}>
                                        <a className='mb-0'>{item.name}</a>
                                    </Col>
                                )})
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer