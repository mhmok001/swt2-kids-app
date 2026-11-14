
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, FormControl, Offcanvas, ListGroup, Image } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-4">
    <Container>
      <Row>
        <Col md={4} className="mb-3 mb-md-0">
          <div className="mb-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Wappen_Herne.svg" alt="Logo" width="30" className="me-2" />
            Stadt Herne
          </div>
          <div>Friedrich-Ebert-Platz 2<br />44623 Herne</div>
          <div>Tel: 0 23 23 / 16 - 0</div>
          <div>Email: info@herne.de</div>
        </Col>
        <Col md={4} className="mb-3 mb-md-0">
          <div>Links</div>
          <ul className="list-unstyled">
            <li><a href="#" className="text-light">Impressum</a></li>
            <li><a href="#" className="text-light">Datenschutz</a></li>
            <li><a href="#" className="text-light">Kontakt</a></li>
          </ul>
        </Col>
        <Col md={4} className="text-md-end">
          <div>Folge uns:</div>
          <a href="#" className="me-2 text-light"><i className="bi bi-facebook"></i></a>
          <a href="#" className="me-2 text-light"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
