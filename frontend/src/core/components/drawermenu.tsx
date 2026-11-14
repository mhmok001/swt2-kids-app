import React from 'react';
import {  Offcanvas, ListGroup} from 'react-bootstrap';
import { useRouter } from 'next/navigation';



interface DrawerMenuProps {
  show: boolean;
  handleClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ show, handleClose }) => {
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
};
export default DrawerMenu;