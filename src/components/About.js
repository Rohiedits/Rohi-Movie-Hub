// import React from 'react'
// import Hero from './Hero';
// import Spline from '@splinetool/react-spline';

// // import Quiz from './quize';





// const About = () => {
//   return (
//     <div>
//         <Hero text = "👨‍💻About Us"/>
//           {/* <div className='container'>
//                 <div className='row'>
//                     <div className='col-lg-8 offset-lg-2 my-5'>
//                         <p className='lead'>
//                             I'm <div style={{color:"green"}}>Rohit</div> Developer of this Project 👨‍💻 <br/>
                        
//                             I'm not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
//                             <br/>
//                             <div style={{color:"red"}}>© All Copyrights Clims Belongs to Rohith Bhojanapu ..</div>
                             
                
                 
//                         </p>
                        
//                     </div>    
//                 </div>        
//            </div>
//            {/* <Quiz/> */}
//            {/* <ChatBox/> */}
//            {/* <Home2/> */}
//            <div>
//         <center>
            
//               <div className='container'>
//                 <div className='row'>
//                     <div className='col-lg-8 offset-lg-2 my-5'>
//                         <p className='lead'>
                        
//                         I'm Welcome to All my Users This is a Movie-browser & Learning-Hub to Know All Details About Movies Stories & Learning New Technologys Like Python,JavaScript,Ruby,React Etc..
//                          <br/>To Get any Details Search movie Name in Search bar 

//     <br/>In Learning-Hub They are Courses Would you Like 👨‍💻Enroll the Cource ! <br/><br/><div style={{color:"blue"}}>Features In Learn-Hub</div><hr/>
//     <div style={{color:"green"}}>
//     <span>1.Lot Of Courses & FREE Lifetime Access</span><br/>
//     <span>2.Coding Mood Available W.r.t Compilers</span><br/>
//     <sapn>3.Includes video lectures, quizzes, assignments, coding exercises, and downloadable resources.</sapn><br/>
//     <span>4.Learn at your own pace with no deadlines.</span><br/>
//     <span>5.Access courses anytime and anywhere through the website or the Udemy app (available on iOS and Android).</span><br/>
//     <span>6.Courses are created and taught by industry professionals and subject-matter experts.</span><br/>
//     <span>7.Compatible with various devices, including smartphones, tablets, and desktops..</span><br/>
//     <span>8.Courses are available in English languages</span><br/>
//     <span>9.Every Coure Have Indivisual Hand Written Notes & Road Map For the Course</span><br/>
//     <span>10.Download Hand Written Notes , Road-Maps and Other Resourses.</span><br/>
//     </div>
//     <hr/>
    
//                                 <div>
//                                 <p className='lead'>Introduce My Bujji 🤖</p>
//                                 <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js"></script>
//                                 <spline-viewer url="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode"></spline-viewer>
//                                 </div>
//                         </p>
//                     </div>
//                 </div>
//               </div>
//               <Spline scene="https://prod.spline.design/Ed6urtr6EHAOVjYK/scene.splinecode" />
//         </center>
        
//     </div>
      
//     */



    
//     </div>
   
     
//   )
// }


//part-2


// export default About
// import Spline from '@splinetool/react-spline';



// export default function App() {
//   return (
  

//     <Spline style={{position:"fixed"}} scene="https://prod.spline.design/pIn4LUxLMWdlOpPZ/scene.splinecode" />
   
//   );
// }


//part-3


import React, { useState } from 'react';
import CV from './Cv.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Nav, Modal, Form, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showContact, setShowContact] = useState(false);
  const [contactStatus, setContactStatus] = useState(null);

  // Mock data - Replace with your information
  const personalInfo = {
    name: "Bhojanapu Venkata Rohith",
    title: "Full Stack Web-Developer",
    description: "Passionate developer with 2+ years of experience in building modern web applications. Specialized in React, Node.js, and Ethical-Hacking with Kali-linux Etc..",
    location: "Tirupathi,Ap",
    email: "bhojanapuvenkatarohith@gmail.com"
  };

  const skills = [
    { name: "Frontend", items: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    { name: "Backend", items: ["Node.js", "Python", "Java", "SQL", "MongoDB"] },
    { name: "Tools", items: ["Git", "Git-Hub", "VS Code", ] },
    { name: "Soft Skills", items: ["Team Leadership", "Communication", "Problem Solving"] }
  ];

  const projects = [
    {
      title: "AssignMent-Helper",
      description: "Built a full-stack AssignMent-Helper platform using React, Api's,etc..",
      image: "https://media-hosting.imagekit.io//ab27df4bf9af42b9/Screenshot%202025-02-18%20231832.png?Expires=1834508943&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=drSg1S2HWWEr9UEgQK~xz89jhosh75ZqDUEq9eVzkB3ToJznorggG027gQNtpFm7vf4WaSKkGrJWIEYX-3jlckSFSuyBF9YQr8rREOQelBoZoqnWXFm-9Hal63fuylhtC1t94cmiPfwX16u5Gg-hWdA28UUBzxd1O~a30COyW3ilCg-SPKFKBGR39FFBPA-TXXW4-tPnTF2SiGgWBmhdfQzJEyeexJiwcFXHYpytrAob-nrCkHI-Vkor3HrSO9l0SWx18Z3yvLJfb9hmcgiQrm51RNmEd1fSREVb-Hj3dQfjJvihCB88QDiT3igNXck8HuuBLubLl-Ce6T8AnilrKw__",
      technologies: ["React", "Node.js", "Bootstrap", "Api's"],
      link: "https://rohi-assignmenthelper.vercel.app/"
    },
    {
      title: "Code-Charge FullStack Website",
      description: "Developed a real-time Learning Hub & entertainment application with team collaboration features",
      image: "https://media-hosting.imagekit.io//725b31472bbd486e/Screenshot%202025-02-18%20231613.png?Expires=1834508841&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dhF~LFcHZ88qQYL8vsaTx1RRaDQwiBcLdJOu2J-AMweuGQUjWX3o~3SmERQ2ygHh1n28OL5nCXo0kkNMreeuPBrs~P2WbkRRPmGzXOy8JXWSKt-qRrpPrCuZGI7H6j9XaIWNolEzydetnsyquGmtS2cC0atL4m8JpfQd5oCIM75Zm4z5bcJBpGClu9FN5gKCce4--udaWfpaAdhXcP5UxzNIo794UQ9RWe76~8GD1TGODaHuVGIIqOskVKQ4heiSCF0z4~Jx6yUeDa7LZvUaHBywfTKbot~5p9BRU9WEipY4qMgBhf0A21lrAFWPubxE7J3BtLWhFfI9ZHqKhWGNEQ__",
      technologies: ["React", "Firebase", "Bootstrap","Api's","Gemini-Api"],
      link: "https://rohi-movie-hub.vercel.app/"
    },
    // {
    //   title: "Portfolio Website",
    //   description: "Designed and developed a responsive portfolio website using modern technologies",
    //   image: "https://via.placeholder.com/300x200",
    //   technologies: ["React", "Bootstrap", "CSS3"],
    //   link: "#"
    // }
  ];

  const experience = [
    // {
    //   company: "Tech Corp Inc.",
    //   position: "Senior Full Stack Developer",
    //   period: "2020 - Present",
    //   description: "Leading a team of developers in building enterprise-level web applications.",
    //   achievements: [
    //     "Improved application performance by 40%",
    //     "Implemented CI/CD pipeline",
    //     "Mentored junior developers"
    //   ]
    // },
    // {
    //   company: "StartUp Co.",
    //   position: "Frontend Developer",
    //   period: "2018 - 2020",
    //   description: "Developed responsive web applications using React and modern JavaScript.",
    //   achievements: [
    //     "Built company's main product interface",
    //     "Reduced load time by 60%",
    //     "Implemented automated testing"
    //   ]
    // }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Implement your contact form logic here
    setContactStatus({ type: 'success', message: 'Message sent successfully!' });
    setTimeout(() => setShowContact(false), 2000);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* Navigation */}
      <Nav 
        className="justify-content-center py-3 sticky-top"
        style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
      >
        <Nav.Item>
          <Nav.Link 
            href="#home" 
            onClick={() => setActiveSection('home')}
            className={activeSection === 'home' ? 'text-primary' : ''}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            href="#projects"
            onClick={() => setActiveSection('projects')}
            className={activeSection === 'projects' ? 'text-primary' : ''}
          >
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            href="#experience"
            onClick={() => setActiveSection('experience')}
            className={activeSection === 'experience' ? 'text-primary' : ''}
          >
           
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            href="#skills"
            onClick={() => setActiveSection('skills')}
            className={activeSection === 'skills' ? 'text-primary' : ''}
          >
            Skills
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Hero Section */}
      <section id="home" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="display-4 fw-bold mb-3">{personalInfo.name}</h1>
              <h2 className="h3 text-primary mb-4">{personalInfo.title}</h2>
              <p className="lead mb-4">{personalInfo.description}</p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <Button variant="primary" onClick={() => setShowContact(true)}>
                  Contact Me
                </Button>
                <Button variant="outline-primary">
                <a href={CV} style={{}} download="Cv">
                  <FaDownload className="me-2" />
                   Download Cv</a>
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              {/* <img 
                src="https://media-hosting.imagekit.io//dc1ca424bcb44c5c/ph1.jpg?Expires=1834509315&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yGZz1WUE7Viszt0KsN6Hkhdm57u5SNfYtYdm-uy-uP269nADg7rHVcia7CTHGpy6AqwJnt4Nm3jSH-QPRMnnwT2o~3tBzTCiKSNqUfa8~XFEK9BKA3XfAOEpE5qwS5jF93Od5WbS3hlD1AfFP0t68ttr1lJhtngvWK8z2aY2Fw4DtNkS7Xw2ekn-88R2SvSC-ysqH5eUdDsYWh-mJ3DGKtbfLUgp8SbQ-BEyZWTvqQ6cKo3y3HvP19dLw2nSmDPr5aBt3OVkXyeX4whFfpwP7tOgJjFzFRlW7FzMVMK-ztg4VedqmEn-RW~YRUq6eh7QRwoPC6AKHwBVD-h34PsRMA__" 
                alt="Profile" 
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '300px' }}
              /> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">Featured Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm hover-shadow">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="badge bg-light text-dark me-2 mb-2"
                          style={{ border: '1px solid #dee2e6' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline-primary" href={project.link}>
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5">
        <Container>
          <h2 className="text-center mb-5"></h2>
          {experience.map((exp, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <h5 className="text-primary">{exp.company}</h5>
                    <p className="text-muted">{exp.period}</p>
                  </Col>
                  <Col md={9}>
                    <h5>{exp.position}</h5>
                    <p>{exp.description}</p>
                    <ul className="list-unstyled">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="mb-2">
                          <span className="text-primary me-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">Skills & Expertise</h2>
          <Row>
            {skills.map((skillGroup, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <h5 className="text-primary mb-3">{skillGroup.name}</h5>
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="badge bg-light text-dark me-2 mb-2"
                        style={{ border: '1px solid #dee2e6' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white">
        <Container className="text-center">
          <div className="mb-4">
            <a href="#" className="text-white mx-3">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhojanapu-venkata-rohith-3a64672b6/" className="text-white mx-3">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white mx-3">
              <FaTwitter size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-white mx-3">
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="mb-0">© 2024 {personalInfo.name}. All rights reserved.</p>
        </Container>
      </footer>

      {/* Contact Modal */}
      <Modal show={showContact} onHide={() => setShowContact(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contactStatus && (
            <Alert variant={contactStatus.type}>
              {contactStatus.message}
            </Alert>
          )}
          <Form onSubmit={handleContactSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Send Message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Portfolio;

// import React from 'react'

// function About() {
//   return (
//     <div>
//       <h1>About Me</h1>
      
//     </div>
//   )
// }

// export default About
