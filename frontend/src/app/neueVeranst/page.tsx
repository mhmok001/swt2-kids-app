"use client";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

import DrawerMenu from '../../core/components/drawermenu';
import Footer from '../../core/components/footer';
import Sidebar from '../../core/components/sidebar';
import Header from '../../core/components/header';



export default function NeueVeranstaltungPage() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    adresse: "",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    if (type === "file" && files && files.length > 0) {
      setForm((prev) => ({ ...prev, image: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the data to an API or store it in a global state
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '70px' }}>
      <Header onMenuClick={() => setShowDrawer(true)} />
      <DrawerMenu show={showDrawer} handleClose={() => setShowDrawer(false)} />
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <Card className="p-4 mt-4">
              <h3 className="mb-4">Neue Veranstaltung </h3>
              {submitted && (
                <Alert variant="success">Veranstaltung erstellt ! (simulation)</Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Titel der Veranstaltung</Form.Label>
                  <Form.Control
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Titel der Veranstaltung"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Beschreibung</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Beschreibe deine Veranstaltung hier..."
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Datum</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Adresse / Ort</Form.Label>
                  <Form.Control
                    name="adresse"
                    value={form.adresse}
                    onChange={handleChange}
                    placeholder="Adresse der Veranstaltung"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Bild</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {imagePreview && (
                    <div className="mt-3">
                      <img src={imagePreview} alt="Preview" style={{ maxWidth: "100%", maxHeight: 200 }} />
                    </div>
                  )}
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Button type="submit" variant="success">
                    Veranstaltung erstellen
                  </Button>
                </div>
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
