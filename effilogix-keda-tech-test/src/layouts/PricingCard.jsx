import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/Service.scss";

const PricingCard = ({ tier, features, isPopular }) => {
  return (
    <Card
      className={`rounded-0 shadow position-relative item-grid hover-bounce ${
        isPopular ? "popular-card" : ""
      }`}>
      {isPopular && (
        <div className="popular-badge position-absolute text-white px-3 py-2">
          Popular
        </div>
      )}
      <Card.Header as="h2" className="p-4 text-center">
        {tier.name}
      </Card.Header>
      <Card.Body className="p-5">
        <Card.Title as={"h3"}>{tier.price}</Card.Title>
        <div className="mb-5 mt-4">
          {features.map((feature, index) => (
            <Card.Text key={index} className="mb-2">
              {feature}
            </Card.Text>
          ))}
        </div>
        <Button variant="primary" size="lg" className="rounded-0">
          Choose Plan
        </Button>
      </Card.Body>
    </Card>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "TIER 1 / Basic",
      price: "Free",
      features: [
        "Track incoming goods",
        "Record outgoing goods",
        "Record profit earnings",
      ],
    },
    {
      name: "TIER 2 / Business",
      price: "$49/mo",
      features: [
        "Track goods in and out",
        "Record Profits",
        "Analyze sales results with CHARTS",
        "24/7 Support",
      ],
    },
    {
      name: "TIER 3 / Entrepreneur",
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
    <Container className="p-5 border-radius">
      <h1 className="main-title text-center">Our Services</h1>
      <div className="justify-content-center grid-service">
        {tiers.map((tier, index) => (
          <PricingCard
            key={index}
            tier={tier}
            features={tier.features}
            isPopular={index === popularTierIndex}
          />
        ))}
      </div>
    </Container>
  );
};

export default Pricing;
