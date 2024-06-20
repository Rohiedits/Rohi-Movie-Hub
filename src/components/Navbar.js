import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Hero from './Hero';

function BasicExample() {
  return (
    <Navbar expand="" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Rohi-App">Rohi-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/comingsoon">Action</NavDropdown.Item>
              <NavDropdown.Item href="/comingsoon">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/comingsoon">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Close
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;