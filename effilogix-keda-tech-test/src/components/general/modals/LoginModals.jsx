// File: LoginModal.jsx

import { Modal, Button, Form } from "react-bootstrap";
import "../../.././styles/LoginModal.scss"; // Pastikan Anda telah membuat file SCSS ini

const LoginModal = ({ show, handleClose, handleRegister }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Proses data form di sini
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Form field untuk Email */}
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          {/* Form field untuk Password */}
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          {/* Tombol untuk submit form */}
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          {/* Teks untuk navigasi ke pendaftaran */}
          <div className="text-center mt-3">
            <span>Didn't have an account? </span>
            <a href="#" onClick={handleRegister}>
              Register
            </a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
