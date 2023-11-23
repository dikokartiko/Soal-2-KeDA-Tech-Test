/* eslint-disable react/prop-types */
import { Modal, Button, Form } from "react-bootstrap";
import "../../../stylesheets/components/modal.scss";

const RegisterModal = ({ show, handleClose, handleLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process registration form data here
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Form field for Full Name */}
          <Form.Group className="mb-3" controlId="registerFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full name" required />
          </Form.Group>

          {/* Form field for Email */}
          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          {/* Form field for Password */}
          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              required
            />
          </Form.Group>

          {/* Form field for Confirm Password */}
          <Form.Group className="mb-3" controlId="registerConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              required
            />
          </Form.Group>

          {/* Button to submit the form */}
          <Button variant="primary" type="submit" className="mt-4 w-100">
            Register
          </Button>

          {/* Text for navigation to login */}
          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <a href="#" onClick={handleLogin}>
              Login
            </a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
