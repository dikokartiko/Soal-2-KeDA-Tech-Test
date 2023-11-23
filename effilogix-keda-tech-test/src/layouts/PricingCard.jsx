import { Card, Button, Container, Row, Col } from "react-bootstrap";

const PricingCard = ({ tier, features, isPopular }) => {
  return (
    <Card
      className={`mb-4 shadow p-5 position-relative hover-bounce ${
        isPopular ? "popular-card" : ""
      }`}>
      {isPopular && (
        <div className="popular-badge position-absolute text-white px-3 py-1">
          Popular
        </div>
      )}
      <Card.Header as="h2" className="text-center">
        {tier.name}
      </Card.Header>
      <Card.Body>
        <Card.Title as={"h3"}>{tier.price}</Card.Title>
        <Card.Text>
          {features.map((feature, index) => (
            <div key={index} className="mb-2">
              {feature}
            </div>
          ))}
        </Card.Text>
        <Button variant="primary" size="lg">
          Choose Plan
        </Button>
      </Card.Body>
    </Card>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "TIER 1/Basic",
      price: "Free",
      features: [
        "Track incoming goods",
        "Record outgoing goods",
        "Record profit earnings",
      ],
    },
    {
      name: "TIER 2/Business",
      price: "$49/mo",
      features: [
        "Track goods in and out",
        "Record Profits",
        "Analyze sales results with CHARTS",
        "24/7 Support",
      ],
    },
    {
      name: "TIER 3/Entrepreneur",
      price: "$99/mo",
      features: [
        "Track goods in and out",
        "Record Profits",
        "Analyze sales results with CHARTS",
        "24/7 Support",
        "Export data to Excel",
        "AI for income prediction",
      ],
    },
  ];

  const popularTierIndex = 1;

  return (
    <Container className="bg-light p-5 border-radius">
      <h2 className="mb-5">Our Services</h2>
      <Row className="justify-content-center">
        {tiers.map((tier, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-3">
            <PricingCard
              tier={tier}
              features={tier.features}
              isPopular={index === popularTierIndex}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pricing;
