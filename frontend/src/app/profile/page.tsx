"use client";
import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col, ToggleButtonGroup, ToggleButton, Navbar, Nav, FormControl, Offcanvas, ListGroup, Image } from "react-bootstrap";
import { useRouter } from "next/navigation";

  import DrawerMenu from '../../core/components/drawermenu';
  import Footer from '../../core/components/footer';
  import NewsCard from '../../core/components/newscard';
  import Sidebar from '../../core/components/sidebar';
  import Header from '../../core/components/header';


const initialData = {
  nom: "Dupont",
  adresse: "123 Rue de Paris, 75000 Paris",
  email: "jean.dupont@email.com",
  profil: "utilisateur",
  interets: [1, 3], // by default, user is interested in 1 and 3
};

const allInterets = [1, 2, 3, 4];

export default function ProfilePage() {
  const [form, setForm] = useState(initialData);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggleInteret = (val: number) => {
    setForm((prev) => ({
      ...prev,
      interets: prev.interets.includes(val)
        ? prev.interets.filter((i) => i !== val)
        : [...prev.interets, val],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profil mis à jour ! (simulation)");
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '70px' }}>
      <Header onMenuClick={() => setShowDrawer(true)} />
      <DrawerMenu show={showDrawer} handleClose={() => setShowDrawer(false)} />  
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <Card className="p-4 mt-4 position-relative">
              {/* Button gear in the top right corner */}
              {!isEditing && (
                <Button
                  variant="link"
                  style={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}
                  onClick={() => setIsEditing(true)}
                  aria-label="Modifier"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                  </svg>
                </Button>
              )}
              <h3 className="mb-4">My Profile</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="nom" value={form.nom} onChange={handleChange} readOnly={!isEditing} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control name="adresse" value={form.adresse} onChange={handleChange} readOnly={!isEditing} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" value={form.email} type="email" onChange={handleChange} readOnly={!isEditing} />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Interest</Form.Label>
                  <div>
                    {allInterets.map((i) => (
                      <Button
                        key={i}
                        variant={form.interets.includes(i) ? "primary" : "outline-secondary"}
                        className="me-2 mb-2"
                        onClick={() => isEditing && handleToggleInteret(i)}
                        type="button"
                        disabled={!isEditing}
                      >
                        Interest {i}
                      </Button>
                    ))}
                  </div>
                </Form.Group>
                {isEditing && (
                  <div className="d-flex justify-content-end">
                    <Button type="submit" variant="success">
                      Speichern
                    </Button>
                  </div>
                )}
              </Form>
            </Card>
          </Col>
          <Col lg={4} md={12}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
