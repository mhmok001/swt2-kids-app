"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

import DrawerMenu from '../../core/components/drawermenu';
import Footer from '../../core/components/footer';
import NewsCard from '../../core/components/newscard';
import Sidebar from '../../core/components/sidebar';
import Header from '../../core/components/header';


function getUserVeranstaltungen() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("meineVeranstaltungen");
    if (data) return JSON.parse(data);
  }
  //  Fallback data if localStorage is not available
  return [
    {
      title: "Atelier Créatif Enfants",
      description: "Un atelier de peinture et bricolage pour les enfants de 6 à 12 ans. Venez exprimer votre créativité !",
      date: "2025-08-01",
      adresse: "Maison de Quartier, 12 rue des Lilas, Herne",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      text: "Un atelier créatif pour enfants organisé par la ville de Herne. Tout le matériel est fourni.",
      link: "#"
    },
    {
      title: "Concert Jazz au Parc",
      description: "Soirée jazz en plein air avec le groupe Blue Note. Entrée gratuite, buvette sur place.",
      date: "2025-08-10",
      adresse: "Parc Central, Herne",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
      text: "Concert jazz sous les étoiles, venez nombreux !",
      link: "#"
    }
  ];
}

export default function MeineVeranstaltungPage() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [veranstaltungen, setVeranstaltungen] = useState<any[]>([]);

  useEffect(() => {
    const data = getUserVeranstaltungen();
    // Sort data by date descending
    data.sort((a: any, b: any) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    setVeranstaltungen(data);
    }, []);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '70px' }}>
      <Header onMenuClick={() => setShowDrawer(true)} />
      <DrawerMenu show={showDrawer} handleClose={() => setShowDrawer(false)} />
      <div style={{ padding: '20px 0 0 40px' }}>
        <h2 style={{ margin: 0, fontWeight: 700, color: '#333' }}>Meine Veranstaltung</h2>
      </div>
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <Row>
              {veranstaltungen.length === 0 ? (
                <Col xs={12} className="text-center mt-5">
                  <Card className="p-4">
                    <h5>Aucune annonce enregistrée pour le moment.</h5>
                  </Card>
                </Col>
              ) : (
                veranstaltungen.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <Col md={6}>
                      <NewsCard {...item} />
                    </Col>
                    {(idx % 2 === 1 && idx !== veranstaltungen.length - 1) && (
                      <Col xs={12}>
                        <hr className="separator" />
                      </Col>
                    )}
                  </React.Fragment>
                ))
              )}
            </Row>
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
