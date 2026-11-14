"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, FormControl, Offcanvas, ListGroup, Image } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/src/core/constants/routes';

// Header Component
const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <Navbar bg="light" expand="lg" className="mb-3 fixed-header">
    <Container fluid>
      <Navbar.Brand href="#">
        <img src="https://www.herne.de/media/template/images/stadt_herne_logo_header.svg" alt="Logo" width="200" height="200" className="d-inline-block align-top me-2" />
      </Navbar.Brand>
      <Form className="d-flex ms-auto me-3">
        <FormControl type="search" placeholder="Suche" className="me-2" aria-label="Search" />
      </Form>
      <Button variant="outline-secondary" className="me-2" onClick={onMenuClick}>
        <span className="navbar-toggler-icon" />
      </Button>
    </Container>
  </Navbar>
);

// Drawer Menu


const DrawerMenu = ({ show, handleClose }: { show: boolean, handleClose: () => void }) => {
  const router = useRouter();
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Herne.de</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup variant="flush">
          <ListGroup.Item action onClick={() => { handleClose(); router.push('/profile'); }}>Mein Profil</ListGroup.Item>
          <ListGroup.Item action onClick={() => { handleClose(); router.push('/meineVeranst'); }}>Meine Veranstaltung</ListGroup.Item>
          <ListGroup.Item action onClick={() => { handleClose(); router.push('/neueVeranst'); }}>Neue Veranstaltung</ListGroup.Item>
          <ListGroup.Item action>Logout</ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

// News Card
const NewsCard = ({ title, date, img, text, link }: { title: string, date: string, img: string, text: string, link: string }) => (
  <Card className="mb-4 news-card">
    <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      <Card.Title>{title}</Card.Title>
      {img && <Card.Img variant="top" src={img} style={{ objectFit: 'cover', height: '160px' }} />}
      <Card.Text>{text}</Card.Text>
      <Card.Link href={link}>Mehr zur Meldung</Card.Link>
    </Card.Body>
  </Card>
);

// Sidebar
const Sidebar = () => {
  const router = useRouter();

  return (
    <div>
      <Card className="mb-3">
        <Card.Body className="d-flex flex-col justify-content-center align-items-center">
          <Image src="https://www.herne.de/media/template/images/stadt_herne_logo_header.svg" width={200} className="" />
          <Card.Subtitle className='text-center m-3'>Online-Dienstleistungen</Card.Subtitle>
        </Card.Body>
      </Card>
      <ListGroup className="mb-3">
        <ListGroup.Item action onClick={() => router.push(ROUTES.MAP)}>Karte</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// Footer
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



// Fake news data
const newsList = [
  {
    title: 'Sommerferienprogramm der städtischen Einrichtungen ist online',
    date: '16. Juni 2025',
    img: 'https://www.herne.de/Bilder/News/07042025/sommerferienprogramm_Beitragsbild.jpg',
    text: 'Wenn die Sommerferien da sind, beginnt für viele Kinder und Jugendliche die schönste Zeit des Jahres. Die Teams der Jugendförderung haben sich in den Stadtbezirken mit den jungen Menschen ausgetauscht und ein abwechslungsreiches Ferienprogramm für die sechs kommunalen Einrichtungen auf die Beine gestellt.',
    link: 'https://www.herne.de/Familie-und-Bildung/Kinderbetreuung/Sommerferienprogramm/'
  },
  {
    title: 'Herner Gartentag lädt zum Entdecken und Verweilen ein',
    date: '27. Mai 2025',
    img: 'https://image.halloherne.de/photos/lg/3eb15209e12b1f3067b0a3b12bbb40c9.jpg',
    text: 'Der Gartentag der Stadt Herne bietet am Samstag, 14. Juni 2025, viele Aktionen und Inspirationen rund um das Thema Garten und Natur.',
    link: '#'
  },
  {
    title: 'Herne neuer Landschaftsplan: Die Ideen der Bürger*innen sind gefragt',
    date: '21. Juni 2025',
    img: 'https://www.herne.de/Bilder/Stadtplanung/lp1e_Beitragsbild_Beitragsbild.jpg',
    text: 'Die Stadt Herne stellt ihren Landschaftsplan neu auf. In den Planungsprozess sollen die Bürger*innen bereits in einem sehr frühen Stadium eingebunden werden...',
    link: 'https://www.herne.de/Meldungen/News-Detailansicht_270337.html'
  },
  {
    title: 'Stadt Herne startet Haushaltsbefragung zur Mobilität',
    date: '21. Juni 2025',
    img: 'https://www.herne.de/Bilder/News/07042025/hhb_quer3_beitragsbild_Beitragsbild.jpg',
    text: 'Wie bewegen sich die Menschen in Herne fort? Wie zufrieden sind sie mit dem öffentlichen Nahverkehr? Die Stadt Herne startet eine Haushaltsbefragung...',
    link: 'https://www.herne.de/Meldungen/News-Detailansicht_269379.html'
  },
  {
    title: 'Achtung: Stadtteilputz muss abgesagt werden',
    date: '14. Juli 2025',
    img: 'https://image.halloherne.de/photos/lg/993654a2125f290a3fc4aa0a79d11bf4.jpg',
    text: 'Der für Samstag, 14. Juli 2025, geplante Stadtteilputz in Herne muss leider abgesagt werden. Wegen der Wetterlage kann die Aktion nicht stattfinden...',
    link: 'https://www.herne.de/Meldungen/News-Detailansicht_267969.html'
  },
  {
    title: 'HERKULES FESTIVAL 2025: Buntes Kulturprogramm für Kinder in Herne',
    date: '15. Juli 2025',
    img: 'https://www.herne.de/Bilder/Kultur-und-Freizeit/Stadtbibliothek/Beitragsbild/herkules_header_3_Beitragsbild.png',
    text: 'Acht Wochen Kreativität, Musik und Spiel erwarten Kinder und Jugendliche beim HERKULES-FESTIVAL 2025...',
    link: 'https://www.halloherne.de/artikel/entfaellt-stadtteilputz-in-den-vier-bezirken-74020'
  }
];

// Main Page Component
export default function Homepage() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '70px' }}>
      <Header onMenuClick={() => setShowDrawer(true)} />
      <DrawerMenu show={showDrawer} handleClose={() => setShowDrawer(false)} />
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <Row>
              {newsList.map((news, idx) => (
                <React.Fragment key={idx}>
                  <Col md={6}>
                    <NewsCard {...news} />
                  </Col>
                  {(idx % 2 === 1 && idx !== newsList.length - 1) && (
                    // separator after each row
                    <Col xs={12}>
                      <hr className="separator" />
                    </Col>
                  )}
                </React.Fragment>
              ))}
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
};