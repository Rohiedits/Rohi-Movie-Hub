import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Finallogo from './finallogo.png'

function BasicExample() {
  return (
    <Navbar expand="" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Rohi-App">{/* <img   style={{marginLeft:"20px"}}width="90" height="90"  src={Finallogo} alt="Python" />  */}Rohi-App</Navbar.Brand>
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
              <NavDropdown.Item href="/login2">Login</NavDropdown.Item>
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

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useHistory } from 'react-router-dom';

// const NavScrollExample =({searchText,setSearchText}) =>{
//   const history = useHistory()
//   const updateSearchText =(e)=> {
//     history.push('/search')
//     setSearchText(e.target.value)
//     }
//   return (
//     <Navbar expand="" className="bg-body-tertiary">
//       <Container fluid>
//        <Navbar.Brand href="/Rohi-App">Rohi-App</Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/AboutUs">About Us</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="/comingsoon">Action</NavDropdown.Item>
//               <NavDropdown.Item href="/comingsoon">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/login2">
//                 Login
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/" disabled>
//               Close
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search for Movie"
//               className="me-2"
//               aria-label="Search"
//               value={searchText}
//               onChange={updateSearchText}
//             />
//             <Button variant="outline-success" type='submit'>Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;