import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab, Nav, Card, Button, Accordion, Badge, ProgressBar, Row, Col, Form } from 'react-bootstrap';

const GatePreparationHub = () => {
  const [activeTab, setActiveTab] = useState('EEE');

  const branchData = {
    EEE: {
      gateTopics: [
        {
          name: 'Electric Circuits',
          importance: 'High (15-20 marks)',
          keyTopics: [
            'Network Theorems (Thevenin, Norton, Superposition)',
            'Three Phase Circuits',
            'Transient Analysis',
            'Two Port Networks',
            'Resonance'
          ],
          previousYearWeight: '16-18%'
        },
        {
          name: 'Electromagnetic Fields',
          importance: 'Medium (10-12 marks)',
          keyTopics: [
            'Coulombs Law and Electric Field Intensity',
            'Gausss Law',
            'Magnetic Fields',
            'Maxwell s Equations',
            'Wave Propagation'
          ],
          previousYearWeight: '10-12%'
        },
        {
          name: 'Power Systems',
          importance: 'High (15-18 marks)',
          keyTopics: [
            'Transmission Lines',
            'Power System Stability',
            'Load Flow Studies',
            'Circuit Breakers',
            'Protection Systems'
          ],
          previousYearWeight: '15-17%'
        }
      ],
      projects: [
        {
          title: 'Smart Grid Implementation',
          difficulty: 'Advanced',
          duration: '4 weeks',
          skills: ['Power Systems', 'IoT', 'SCADA'],
          description: 'Design and simulate a smart grid system with renewable energy integration and load management.'
        },
        {
          title: 'Motor Control System',
          difficulty: 'Intermediate',
          duration: '3 weeks',
          skills: ['Power Electronics', 'Control Systems', 'Microcontrollers'],
          description: 'Develop a variable frequency drive system for industrial motor control applications.'
        }
      ]
    },
    CSE: {
      gateTopics: [
        {
          name: 'Data Structures & Algorithms',
          importance: 'Very High (20-25 marks)',
          keyTopics: [
            'Arrays, Linked Lists, Trees, Graphs',
            'Sorting and Searching Algorithms',
            'Dynamic Programming',
            'Graph Algorithms',
            'Algorithm Analysis'
          ],
          previousYearWeight: '22-25%'
        },
        {
          name: 'Operating Systems',
          importance: 'High (15-18 marks)',
          keyTopics: [
            'Process Management',
            'Memory Management',
            'File Systems',
            'Deadlocks',
            'CPU Scheduling'
          ],
          previousYearWeight: '15-18%'
        },
        {
          name: 'Database Management',
          importance: 'Medium (12-15 marks)',
          keyTopics: [
            'SQL',
            'Normalization',
            'Transaction Processing',
            'Concurrency Control',
            'Recovery'
          ],
          previousYearWeight: '12-15%'
        }
      ],
      projects: [
        {
          title: 'Distributed Database System',
          difficulty: 'Advanced',
          duration: '4 weeks',
          skills: ['DBMS', 'Networking', 'System Design'],
          description: 'Create a distributed database system with transaction management and replication.'
        },
        {
          title: 'AI-based Code Analyzer',
          difficulty: 'Advanced',
          duration: '3 weeks',
          skills: ['Machine Learning', 'Python', 'NLP'],
          description: 'Build a tool that analyzes code quality and suggests improvements using AI.'
        }
      ]
    },
    ECE: {
      gateTopics: [
        {
          name: 'Signals and Systems',
          importance: 'High (15-20 marks)',
          keyTopics: [
            'Fourier Series and Transform',
            'Laplace Transform',
            'Z-Transform',
            'Sampling Theorem',
            'Filter Design'
          ],
          previousYearWeight: '18-20%'
        },
        {
          name: 'Digital Electronics',
          importance: 'High (15-18 marks)',
          keyTopics: [
            'Boolean Algebra',
            'Sequential Circuits',
            'Memory Elements',
            'Digital IC Applications',
            'HDL Programming'
          ],
          previousYearWeight: '15-18%'
        }
      ],
      projects: [
        {
          title: 'SDR Implementation',
          difficulty: 'Advanced',
          duration: '4 weeks',
          skills: ['DSP', 'RF', 'Python'],
          description: 'Build a Software Defined Radio system for digital communication.'
        },
        {
          title: 'FPGA-based Image Processing',
          difficulty: 'Advanced',
          duration: '3 weeks',
          skills: ['VHDL/Verilog', 'Image Processing', 'FPGA'],
          description: 'Implement real-time image processing algorithms on FPGA.'
        }
      ]
    },
    ME: {
      gateTopics: [
        {
          name: 'Thermodynamics',
          importance: 'High (15-20 marks)',
          keyTopics: [
            'Laws of Thermodynamics',
            'Heat Engines',
            'Refrigeration Cycles',
            'Gas Power Cycles',
            'Heat Transfer'
          ],
          previousYearWeight: '18-20%'
        },
        {
          name: 'Machine Design',
          importance: 'High (15-18 marks)',
          keyTopics: [
            'Design of Machine Elements',
            'Stress Analysis',
            'Bearings and Lubrication',
            'Gears and Gear Trains',
            'Strength of Materials'
          ],
          previousYearWeight: '15-17%'
        }
      ],
      projects: [
        {
          title: 'Smart Manufacturing System',
          difficulty: 'Advanced',
          duration: '4 weeks',
          skills: ['IoT', 'PLC', 'Industry 4.0'],
          description: 'Design an automated manufacturing cell with IoT integration.'
        },
        {
          title: 'Thermal Power Plant Simulation',
          difficulty: 'Advanced',
          duration: '3 weeks',
          skills: ['Thermodynamics', 'MATLAB', 'CFD'],
          description: 'Simulate a thermal power plant cycle with efficiency optimization.'
        }
      ]
    },
    Civil: {
      gateTopics: [
        {
          name: 'Structural Analysis',
          importance: 'High (18-22 marks)',
          keyTopics: [
            'Beam Analysis',
            'Truss Analysis',
            'Matrix Methods',
            'Structural Dynamics',
            'Design of Steel Structures'
          ],
          previousYearWeight: '20-22%'
        },
        {
          name: 'Geotechnical Engineering',
          importance: 'Medium (12-15 marks)',
          keyTopics: [
            'Soil Mechanics',
            'Foundation Design',
            'Earth Retaining Structures',
            'Soil Stabilization',
            'Ground Improvement'
          ],
          previousYearWeight: '12-15%'
        }
      ],
      projects: [
        {
          title: 'Smart Building Design',
          difficulty: 'Advanced',
          duration: '4 weeks',
          skills: ['AutoCAD', 'BIM', 'Structural Analysis'],
          description: 'Design a smart building with sustainable features and structural optimization.'
        },
        {
          title: 'Bridge Analysis System',
          difficulty: 'Advanced',
          duration: '3 weeks',
          skills: ['STAAD Pro', 'FEM', 'Structural Design'],
          description: 'Develop a comprehensive bridge analysis and design system.'
        }
      ]
    }
  };

  return (
    <Container fluid className="py-4">
      <h1 className="text-center mb-4">GATE Preparation & Projects Hub</h1>
      <Card className="mb-4 bg-light">
        <Card.Body>
          <h4>About GATE Exam</h4>
          <p>The Graduate Aptitude Test in Engineering (GATE) is a national-level examination that tests the comprehensive understanding of undergraduate subjects in engineering/technology.</p>
          <ul>
            <li>Duration: 3 hours</li>
            <li>Total Marks: 100</li>
            <li>Question Types: Multiple Choice Questions (MCQ) and Numerical Answer Type (NAT)</li>
            <li>Sections: General Aptitude (15 marks) + Subject Specific (85 marks)</li>
          </ul>
        </Card.Body>
      </Card>

      <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mb-4">
              {Object.keys(branchData).map(branch => (
                <Nav.Item key={branch}>
                  <Nav.Link eventKey={branch}>{branch}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              {Object.entries(branchData).map(([branch, data]) => (
                <Tab.Pane key={branch} eventKey={branch}>
                  <h2 className="mb-4">{branch} - GATE Preparation</h2>
                  
                  <Card className="mb-4">
                    <Card.Header className="bg-primary text-white">
                      <h3 className="mb-0">Important Topics</h3>
                    </Card.Header>
                    <Card.Body>
                      <Accordion>
                        {data.gateTopics.map((topic, index) => (
                          <Accordion.Item key={index} eventKey={index.toString()}>
                            <Accordion.Header>
                              {topic.name} - {topic.importance}
                            </Accordion.Header>
                            <Accordion.Body>
                              <h5>Key Topics to Focus:</h5>
                              <ul>
                                {topic.keyTopics.map((kt, i) => (
                                  <li key={i}>{kt}</li>
                                ))}
                              </ul>
                              <p className="mt-3">
                                <strong>Previous Year Weightage:</strong> {topic.previousYearWeight}
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Card.Body>
                  </Card>

                  <h3 className="mb-4">Recommended Projects</h3>
                  {data.projects.map((project, index) => (
                    <Card key={index} className="mb-4">
                      <Card.Header className="bg-success text-white">
                        <h4 className="mb-0">{project.title}</h4>
                      </Card.Header>
                      <Card.Body>
                        <Row>
                          <Col md={8}>
                            <p>{project.description}</p>
                            <h5>Required Skills:</h5>
                            <ul>
                              {project.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                              ))}
                            </ul>
                          </Col>
                          <Col md={4}>
                            <div className="mb-3">
                              <Badge bg="primary" className="me-2">{project.difficulty}</Badge>
                              <Badge bg="warning">{project.duration}</Badge>
                            </div>
                            <Button variant="primary" className="w-100 mb-2">View Details</Button>
                            <Button variant="success" className="w-100">Start Project</Button>
                          </Col>
                        </Row>
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

export default GatePreparationHub;


// // [Previous imports remain the same]
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Tab, Nav, Card, Button, Accordion, Badge, ProgressBar, Row, Col, Form, Table } from 'react-bootstrap';

// const GatePreparationHub = () => {
//   const [activeTab, setActiveTab] = useState('EEE');

//   // Add previous years' papers data
//   const previousYearsPapers = {
//     EEE: [
//       {
//         year: 2024,
//         papers: [
//           { session: 'Morning', totalQuestions: 65, difficulty: 'Moderate', topicsCovered: ['Control Systems', 'Power Electronics', 'Electric Circuits'] },
//           { session: 'Evening', totalQuestions: 65, difficulty: 'Hard', topicsCovered: ['Power Systems', 'Electromagnetic Fields', 'Signals'] }
//         ],
//         analysisPoints: [
//           'Increased focus on Power Electronics',
//           'New pattern in Control Systems questions',
//           'More numerical type questions'
//         ]
//       },
//       {
//         year: 2023,
//         papers: [
//           { session: 'Morning', totalQuestions: 65, difficulty: 'Moderate', topicsCovered: ['Electric Machines', 'Power Systems', 'Networks'] },
//           { session: 'Evening', totalQuestions: 65, difficulty: 'Moderate', topicsCovered: ['Control Systems', 'Digital Electronics', 'Fields'] }
//         ],
//         analysisPoints: [
//           'Equal weightage to core subjects',
//           'Application-based questions increased',
//           'More emphasis on numerical problems'
//         ]
//       }
//     ],
//     CSE: [
//       {
//         year: 2024,
//         papers: [
//           { session: 'Morning', totalQuestions: 65, difficulty: 'Hard', topicsCovered: ['Operating Systems', 'Algorithms', 'Database'] },
//           { session: 'Evening', totalQuestions: 65, difficulty: 'Moderate', topicsCovered: ['Computer Networks', 'Theory of Computation', 'Programming'] }
//         ],
//         analysisPoints: [
//           'Increased algorithm complexity questions',
//           'More system design problems',
//           'New pattern in programming questions'
//         ]
//       }
//     ],
//     // [Similar data structure for other branches...]
//   };

//   // Previous branchData object remains the same...

//   const renderPreviousYearSection = (branch) => (
//     <Card className="mb-4">
//       <Card.Header className="bg-info text-white">
//         <h3 className="mb-0">Previous Years' Papers Analysis</h3>
//       </Card.Header>
//       <Card.Body>
//         <Accordion>
//           {previousYearsPapers[branch]?.map((yearData, index) => (
//             <Accordion.Item key={index} eventKey={index.toString()}>
//               <Accordion.Header>
//                 GATE {yearData.year} Analysis
//               </Accordion.Header>
//               <Accordion.Body>
//                 <h5>Paper Details:</h5>
//                 <Table striped bordered hover className="mb-4">
//                   <thead>
//                     <tr>
//                       <th>Session</th>
//                       <th>Total Questions</th>
//                       <th>Difficulty Level</th>
//                       <th>Major Topics Covered</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {yearData.papers.map((paper, i) => (
//                       <tr key={i}>
//                         <td>{paper.session}</td>
//                         <td>{paper.totalQuestions}</td>
//                         <td>
//                           <Badge bg={paper.difficulty === 'Hard' ? 'danger' : 
//                                    paper.difficulty === 'Moderate' ? 'warning' : 'success'}>
//                             {paper.difficulty}
//                           </Badge>
//                         </td>
//                         <td>{paper.topicsCovered.join(', ')}</td>
//                         <td>
//                           <Button variant="primary" size="sm" className="me-2">
//                             View Paper
//                           </Button>
//                           <Button variant="success" size="sm">
//                             Solutions
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>

//                 <h5>Key Analysis Points:</h5>
//                 <ul>
//                   {yearData.analysisPoints.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>

//                 <div className="mt-4">
//                   <Button variant="outline-primary" className="me-2">
//                     Download Question Paper
//                   </Button>
//                   <Button variant="outline-success" className="me-2">
//                     View Detailed Solutions
//                   </Button>
//                   <Button variant="outline-info">
//                     Topic-wise Analysis
//                   </Button>
//                 </div>
//               </Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>

//         <Card className="mt-4">
//           <Card.Body>
//             <h5>Quick Statistics (Last 5 Years)</h5>
//             <Row>
//               <Col md={4}>
//                 <Card className="text-center p-3">
//                   <h3>75%</h3>
//                   <p>Questions from Core Subjects</p>
//                 </Card>
//               </Col>
//               <Col md={4}>
//                 <Card className="text-center p-3">
//                   <h3>25%</h3>
//                   <p>Numerical Answer Type</p>
//                 </Card>
//               </Col>
//               <Col md={4}>
//                 <Card className="text-center p-3">
//                   <h3>60%</h3>
//                   <p>Application Based Questions</p>
//                 </Card>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//       </Card.Body>
//     </Card>
//   );

//   return (
//     <Container fluid className="py-4">
//       {/* Previous content remains the same until Tab.Content */}
//       <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
//         <Row>
//           <Col sm={3}>
//             <Nav variant="pills" className="flex-column mb-4">
//               {Object.keys(branchData).map(branch => (
//                 <Nav.Item key={branch}>
//                   <Nav.Link eventKey={branch}>{branch}</Nav.Link>
//                 </Nav.Item>
//               ))}
//             </Nav>
//           </Col>

//           <Col sm={9}>
//             <Tab.Content>
//               {Object.entries(branchData).map(([branch, data]) => (
//                 <Tab.Pane key={branch} eventKey={branch}>
//                   <h2 className="mb-4">{branch} - GATE Preparation</h2>
                  
//                   {/* Previous years section */}
//                   {renderPreviousYearSection(branch)}

//                   {/* Existing Important Topics section */}
//                   <Card className="mb-4">
//                     {/* ... [Rest of the existing content remains the same] ... */}
//                   </Card>

//                   {/* Existing Projects section */}
//                   <h3 className="mb-4">Recommended Projects</h3>
//                   {/* ... [Rest of the existing content remains the same] ... */}
//                 </Tab.Pane>
//               ))}
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>
//     </Container>
//   );
// };

// export default GatePreparationHub;