import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, FormControl, Offcanvas, ListGroup, Image } from 'react-bootstrap';

const Sidebar = () => (
  <div>
    <Card className="mb-3">
      <Card.Body className="d-flex flex-col justify-content-center align-items-center">
        <Image src="https://www.herne.de/media/template/images/stadt_herne_logo_header.svg" width={200} className="" />
         <Card.Subtitle className='text-center m-3'>Online-Dienstleistungen</Card.Subtitle>
      </Card.Body>
    </Card>
    <ListGroup className="mb-3">
      <ListGroup.Item action>Map</ListGroup.Item>
     
    </ListGroup>
  </div>
);

export default  Sidebar;