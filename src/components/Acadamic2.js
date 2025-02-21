import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Tab, Row, Col, Card, Button, Accordion } from 'react-bootstrap';

const LearningHub = () => {
  const [key, setKey] = useState('EEE');

  const courses = {
    EEE: {
      subjects: [
        {
          name: 'Circuit Theory',
          notes: ['Basic Circuit Analysis', 'Network Theorems', 'Three Phase Systems'],
          videos: ['Introduction to Circuits', 'Kirchhoff\'s Laws', 'AC Analysis'],
          roadmap: 'Start with basic circuit concepts, move to network analysis, then advanced topics.'
        },
        {
          name: 'Power Systems',
          notes: ['Power Generation', 'Transmission Lines', 'Power Distribution'],
          videos: ['Power System Basics', 'Transmission Fundamentals', 'Distribution Networks'],
          roadmap: 'Begin with generation concepts, understand transmission, finally distribution systems.'
        }
      ]
    },
    CSE: {
      subjects: [
        {
          name: 'Data Structures',
          notes: ['Arrays & Linked Lists', 'Trees & Graphs', 'Algorithms'],
          videos: ['DS Introduction', 'Tree Traversals', 'Graph Algorithms'],
          roadmap: 'Master basic data structures before moving to advanced concepts.'
        },
        {
          name: 'Operating Systems',
          notes: ['Process Management', 'Memory Management', 'File Systems'],
          videos: ['OS Fundamentals', 'Process Scheduling', 'Memory Allocation'],
          roadmap: 'Start with process concepts, then memory, finally file systems.'
        }
      ]
    },
    ECE: {
      subjects: [
        {
          name: 'Digital Electronics',
          notes: ['Boolean Algebra', 'Logic Gates', 'Sequential Circuits'],
          videos: ['Digital Basics', 'Combinational Circuits', 'Flip Flops'],
          roadmap: 'Begin with boolean logic, move to combinational and sequential design.'
        },
        {
          name: 'Communication Systems',
          notes: ['Analog Communication', 'Digital Communication', 'Information Theory'],
          videos: ['Communication Basics', 'Modulation Techniques', 'Digital Protocols'],
          roadmap: 'Start with analog basics, then digital concepts, finally advanced topics.'
        }
      ]
    },
    ME: {
      subjects: [
        {
          name: 'Thermodynamics',
          notes: ['Laws of Thermodynamics', 'Heat Transfer', 'Power Cycles'],
          videos: ['Thermo Basics', 'Heat Exchange', 'Engine Cycles'],
          roadmap: 'Master fundamental laws, then applications and cycles.'
        },
        {
          name: 'Machine Design',
          notes: ['Machine Elements', 'Design Principles', 'CAD Fundamentals'],
          videos: ['Design Basics', 'Element Analysis', 'CAD Tutorial'],
          roadmap: 'Learn basic elements, then design principles, finally CAD tools.'
        }
      ]
    },
    Civil: {
      subjects: [
        {
          name: 'Structural Analysis',
          notes: ['Force Systems', 'Beams & Frames', 'Structure Design'],
          videos: ['Structure Basics', 'Beam Analysis', 'Frame Design'],
          roadmap: 'Start with force concepts, then beam analysis, finally complete structures.'
        },
        {
          name: 'Geotechnical Engineering',
          notes: ['Soil Mechanics', 'Foundation Design', 'Earth Structures'],
          videos: ['Soil Properties', 'Foundation Types', 'Earth Retaining Structures'],
          roadmap: 'Begin with soil mechanics, move to foundations, then earth structures.'
        }
      ]
    }
  };

  return (
    <Container fluid className="py-4">
      <h1 className="text-center mb-4">Engineering Learning Hub</h1>
      
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {Object.keys(courses).map((branch) => (
                <Nav.Item key={branch}>
                  <Nav.Link eventKey={branch} className="mb-2">
                    {branch}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          
          <Col sm={9}>
            <Tab.Content>
              {Object.entries(courses).map(([branch, data]) => (
                <Tab.Pane key={branch} eventKey={branch}>
                  <h2 className="mb-4">{branch} Engineering</h2>
                  
                  {data.subjects.map((subject, index) => (
                    <Card key={index} className="mb-4">
                      <Card.Header className="bg-primary text-white">
                        <h3 className="mb-0">{subject.name}</h3>
                      </Card.Header>
                      
                      <Card.Body>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Digital Notes & PDFs</Accordion.Header>
                            <Accordion.Body>
                              <ul>
                                {subject.notes.map((note, i) => (
                                  <li key={i}>
                                    {note}
                                    <Button variant="link" className="ms-2">Download PDF</Button>
                                  </li>
                                ))}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Video Lectures</Accordion.Header>
                            <Accordion.Body>
                              <ul>
                                {subject.videos.map((video, i) => (
                                  <li key={i}>
                                    {video}
                                    <Button variant="link" className="ms-2">Watch Video</Button>
                                  </li>
                                ))}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                          
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Learning Roadmap</Accordion.Header>
                            <Accordion.Body>
                              <p>{subject.roadmap}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Card.Body>
                    </Card>
                  ))}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default LearningHub;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Tab, Nav, Card, Button, Accordion, Badge, ProgressBar, Row, Col, Form } from 'react-bootstrap';

// const ExamPrepHub = () => {
//   const [activeTab, setActiveTab] = useState('GATE');
//   const [searchTerm, setSearchTerm] = useState('');

//   const examData = {
//     GATE: {
//       subjects: [
//         {
//           name: 'Digital Electronics',
//           topics: ['Boolean Algebra', 'Sequential Circuits', 'Microprocessors'],
//           tests: [
//             { name: 'Mock Test 1', questions: 65, duration: '3 hours' },
//             { name: 'Subject Test - Digital Logic', questions: 30, duration: '1 hour' }
//           ],
//           previousYears: [
//             { year: '2023', questions: 15, solved: true },
//             { year: '2022', questions: 12, solved: true }
//           ]
//         },
//         {
//           name: 'Computer Networks',
//           topics: ['OSI Model', 'TCP/IP', 'Network Security'],
//           tests: [
//             { name: 'Full Length Paper', questions: 65, duration: '3 hours' },
//             { name: 'Topic Test - Protocols', questions: 25, duration: '45 mins' }
//           ],
//           previousYears: [
//             { year: '2023', questions: 10, solved: true },
//             { year: '2022', questions: 13, solved: true }
//           ]
//         }
//       ]
//     },
//     ESE: {
//       subjects: [
//         {
//           name: 'Engineering Mathematics',
//           topics: ['Calculus', 'Differential Equations', 'Linear Algebra'],
//           tests: [
//             { name: 'Prelims Mock', questions: 100, duration: '2 hours' },
//             { name: 'Mains Practice', questions: 75, duration: '3 hours' }
//           ],
//           previousYears: [
//             { year: '2023', questions: 20, solved: true },
//             { year: '2022', questions: 18, solved: true }
//           ]
//         }
//       ]
//     },
//     PSU: {
//       subjects: [
//         {
//           name: 'General Awareness',
//           topics: ['Current Affairs', 'Technical Aptitude', 'Company Specifics'],
//           tests: [
//             { name: 'BHEL Mock', questions: 100, duration: '2 hours' },
//             { name: 'NTPC Practice', questions: 100, duration: '2 hours' }
//           ],
//           previousYears: [
//             { year: '2023', questions: 25, solved: true },
//             { year: '2022', questions: 25, solved: true }
//           ]
//         }
//       ]
//     }
//   };

//   const projects = [
//     {
//       title: 'Smart Home Automation',
//       domain: 'IoT',
//       difficulty: 'Intermediate',
//       duration: '2 weeks',
//       description: 'Build a home automation system using Arduino/Raspberry Pi to control lights, fans, and appliances.',
//       skills: ['Arduino', 'Sensors', 'Mobile App Development'],
//       progress: 75
//     },
//     {
//       title: 'Traffic Management System',
//       domain: 'Computer Vision',
//       difficulty: 'Advanced',
//       duration: '3 weeks',
//       description: 'Develop an AI-based traffic management system using computer vision techniques.',
//       skills: ['Python', 'OpenCV', 'Machine Learning'],
//       progress: 60
//     }
//   ];

//   const filteredProjects = projects.filter(project =>
//     project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     project.domain.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container fluid className="py-4">
//       <h1 className="text-center mb-4">Exam Preparation & Projects Hub</h1>

//       <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
//         <Row>
//           <Col sm={3}>
//             <Nav variant="pills" className="flex-column mb-4">
//               <Nav.Item>
//                 <Nav.Link eventKey="GATE">GATE Preparation</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="ESE">ESE Preparation</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="PSU">PSU Preparation</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="PROJECTS">Mini Projects</Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>

//           <Col sm={9}>
//             <Tab.Content>
//               {Object.entries(examData).map(([exam, data]) => (
//                 <Tab.Pane key={exam} eventKey={exam}>
//                   <h2 className="mb-4">{exam} Preparation</h2>
                  
//                   {data.subjects.map((subject, index) => (
//                     <Card key={index} className="mb-4">
//                       <Card.Header className="bg-primary text-white">
//                         <h3 className="mb-0">{subject.name}</h3>
//                       </Card.Header>
                      
//                       <Card.Body>
//                         <Accordion>
//                           <Accordion.Item eventKey="0">
//                             <Accordion.Header>Topics Covered</Accordion.Header>
//                             <Accordion.Body>
//                               <ul>
//                                 {subject.topics.map((topic, i) => (
//                                   <li key={i}>{topic}</li>
//                                 ))}
//                               </ul>
//                             </Accordion.Body>
//                           </Accordion.Item>

//                           <Accordion.Item eventKey="1">
//                             <Accordion.Header>Practice Tests</Accordion.Header>
//                             <Accordion.Body>
//                               {subject.tests.map((test, i) => (
//                                 <Card key={i} className="mb-2">
//                                   <Card.Body>
//                                     <h5>{test.name}</h5>
//                                     <p className="mb-2">
//                                       Questions: {test.questions} | Duration: {test.duration}
//                                     </p>
//                                     <Button variant="primary">Start Test</Button>
//                                   </Card.Body>
//                                 </Card>
//                               ))}
//                             </Accordion.Body>
//                           </Accordion.Item>

//                           <Accordion.Item eventKey="2">
//                             <Accordion.Header>Previous Year Questions</Accordion.Header>
//                             <Accordion.Body>
//                               {subject.previousYears.map((paper, i) => (
//                                 <Card key={i} className="mb-2">
//                                   <Card.Body>
//                                     <h5>{paper.year} Paper</h5>
//                                     <p className="mb-2">Questions: {paper.questions}</p>
//                                     <Button variant="success">View Solutions</Button>
//                                   </Card.Body>
//                                 </Card>
//                               ))}
//                             </Accordion.Body>
//                           </Accordion.Item>
//                         </Accordion>
//                       </Card.Body>
//                     </Card>
//                   ))}
//                 </Tab.Pane>
//               ))}

//               <Tab.Pane eventKey="PROJECTS">
//                 <h2 className="mb-4">Mini Projects</h2>
                
//                 <Form.Group className="mb-4">
//                   <Form.Control
//                     type="text"
//                     placeholder="Search projects by title or domain..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </Form.Group>

//                 {filteredProjects.map((project, index) => (
//                   <Card key={index} className="mb-4">
//                     <Card.Header className="bg-success text-white">
//                       <h3 className="mb-0">{project.title}</h3>
//                     </Card.Header>
                    
//                     <Card.Body>
//                       <Row>
//                         <Col md={8}>
//                           <p>{project.description}</p>
//                           <div className="mb-3">
//                             <Badge bg="primary" className="me-2">{project.domain}</Badge>
//                             <Badge bg="info" className="me-2">{project.difficulty}</Badge>
//                             <Badge bg="warning">{project.duration}</Badge>
//                           </div>
//                           <h5>Required Skills:</h5>
//                           <ul>
//                             {project.skills.map((skill, i) => (
//                               <li key={i}>{skill}</li>
//                             ))}
//                           </ul>
//                         </Col>
//                         <Col md={4}>
//                           <h5>Progress</h5>
//                           <ProgressBar now={project.progress} label={`${project.progress}%`} />
//                           <div className="mt-3">
//                             <Button variant="primary" className="w-100 mb-2">View Details</Button>
//                             <Button variant="success" className="w-100">Start Project</Button>
//                           </div>
//                         </Col>
//                       </Row>
//                     </Card.Body>
//                   </Card>
//                 ))}
//               </Tab.Pane>
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>
//     </Container>
//   );
// };

// export default ExamPrepHub;


