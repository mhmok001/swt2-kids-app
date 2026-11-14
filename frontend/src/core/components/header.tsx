import React, { useEffect, useState } from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if the user is logged in when the component loads
  useEffect(() => {
    // In this example  we check using localStorage
    // In a real application, you might check a JWT token, a session, etc.
    //modify here to check for a valid token or session
    const token = localStorage.getItem('token') || localStorage.getItem('alreadyVisited');
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginClick = () => {
    router.push('/'); // Redirection to the login page
  };
  
  return (
    <Navbar bg="light" expand="lg" className="mb-3 fixed-header">
      <Container fluid>
        <Navbar.Brand onClick={() => router.push('/home')} style={{ cursor: 'pointer' }}>
          <img 
            src="https://www.herne.de/media/template/images/stadt_herne_logo_header.svg" 
            alt="Logo" 
            width="200" 
            height="200" 
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <Form className="d-flex ms-auto me-3">
          <FormControl type="search" placeholder="Suche" className="me-2" aria-label="Search" />
        </Form>

        {/* User icon + login status */}
        <div className="d-flex align-items-center me-3">
          <span className="me-2" style={{ fontSize: 22 , color : "#000000" }}>
            <i className="bi bi-person-circle"></i>
          </span>
          {isLoggedIn ? (
            <span className="text-success" style={{ fontWeight: 500 }}>Angemeldet</span>
          ) : (
            <Button variant="link" style={{ padding: 0, fontWeight: 500 }} onClick={handleLoginClick}>
              Log in
            </Button>
          )}
        </div>
        
        <Button variant="outline-secondary" className="me-2" onClick={onMenuClick}>
          <span className="navbar-toggler-icon" />
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;