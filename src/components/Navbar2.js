import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useHistory } from 'react-router-dom';

const OffcanvasExample =({searchText,setSearchText}) =>{
  const history = useHistory()
  const updateSearchText =(e)=> {
    history.push('/search')
    setSearchText(e.target.value)
    }
  return (
    <>
      {[true ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">💡Charge Your Skills</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Rohi-App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                
                  {/* <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/NewFeature">Learn</Nav.Link>
                  <Nav.Link href="/Help">Login</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link> */}
           
                </Nav>
                <form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search for Movie"
                    className="me-2"
                    aria-label="Search"
                    value={searchText}
                    onChange={updateSearchText}
                  
                  />
                  <Button variant="outline-success" type='submit'>Search</Button>
                </form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;