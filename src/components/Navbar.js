import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Finallogo from './finallogo.png'

function BasicExample() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Rohi-App">{/* <img   style={{marginLeft:"20px"}}width="90" height="90"  src={Finallogo} alt="Python" />  */}🌐Rohi-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/NewFeature">Learn</Nav.Link>
                  <Nav.Link href="/Help">Login</Nav.Link>
                  <Nav.Link style={{color:"red"}} href="https://ai-tutor-bujji.vercel.app/">Ai-Tutor</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                    <NavDropdown.Item href="/comingsoon">
                      Introduce Bujji
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/AboutUs">About </NavDropdown.Item>
                    <NavDropdown.Item href="/Yt">Yt</NavDropdown.Item>
                    <NavDropdown.Item href="/minigame">Mini Game </NavDropdown.Item>
                    <NavDropdown.Item href="/interviewguide">Interview Guide </NavDropdown.Item>
                    <NavDropdown.Item href="/Academic">Academic Guide </NavDropdown.Item>
                    <NavDropdown.Item href="/Todo">To-Do </NavDropdown.Item>
                    <NavDropdown.Item href="/NotesApp" style={{color:"red"}}>Notes-App </NavDropdown.Item>
                    <NavDropdown.Item href="/part2" style={{color:"red"}}>Attendance Analyzer </NavDropdown.Item>
                    <NavDropdown.Item href="/Timetable" style={{color:"red"}}>Ai-Mock Interview Ast.  </NavDropdown.Item>
                    <NavDropdown.Item href="/labai" style={{color:"red"}}>Lab AI </NavDropdown.Item>
                    <NavDropdown.Item href="https://ai-tutor-bujji.vercel.app/" style={{color:"red"}}>AI Tutor </NavDropdown.Item>
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
   
//     <Navbar expand="false" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
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

