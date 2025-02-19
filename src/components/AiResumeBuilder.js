// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Form, Button, Card, Nav, Alert } from 'react-bootstrap';

// const AIResumeBuilder = () => {
//   const [activeSection, setActiveSection] = useState('personal');
//   const [formData, setFormData] = useState({
//     personal: {
//       fullName: '',
//       email: '',
//       phone: '',
//       address: '',
//       summary: ''
//     },
//     education: [{
//       degree: '',
//       school: '',
//       year: '',
//       gpa: ''
//     }],
//     experience: [{
//       title: '',
//       company: '',
//       duration: '',
//       description: ''
//     }],
//     skills: {
//       technical: '',
//       soft: '',
//       languages: ''
//     }
//   });
//   const [showPreview, setShowPreview] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

//   const handleInputChange = (section, field, value, index = null) => {
//     setFormData(prev => {
//       if (Array.isArray(prev[section])) {
//         const newArray = [...prev[section]];
//         newArray[index] = { ...newArray[index], [field]: value };
//         return { ...prev, [section]: newArray };
//       }
//       return {
//         ...prev,
//         [section]: {
//           ...prev[section],
//           [field]: value
//         }
//       };
//     });
//   };

//   const addNewItem = (section) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: [...prev[section], section === 'education' ? {
//         degree: '',
//         school: '',
//         year: '',
//         gpa: ''
//       } : {
//         title: '',
//         company: '',
//         duration: '',
//         description: ''
//       }]
//     }));
//   };

//   const removeItem = (section, index) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: prev[section].filter((_, i) => i !== index)
//     }));
//   };

//   const generateResume = () => {
//     // Simulate AI processing
//     setAlert({
//       show: true,
//       message: 'Resume generated successfully! You can now download it.',
//       variant: 'success'
//     });
//     setShowPreview(true);
//   };

//   const ResumePreview = () => (
//     <Card className="mt-4">
//       <Card.Body>
//         <h2 className="text-center mb-4">{formData.personal.fullName}</h2>
//         <p className="text-center">
//           {formData.personal.email} | {formData.personal.phone} | {formData.personal.address}
//         </p>
//         <hr />
        
//         <h4>Professional Summary</h4>
//         <p>{formData.personal.summary}</p>
        
//         <h4>Education</h4>
//         {formData.education.map((edu, index) => (
//           <div key={index}>
//             <p><strong>{edu.degree}</strong> - {edu.school}</p>
//             <p>Year: {edu.year} | GPA: {edu.gpa}</p>
//           </div>
//         ))}
        
//         <h4>Experience</h4>
//         {formData.experience.map((exp, index) => (
//           <div key={index}>
//             <p><strong>{exp.title}</strong> at {exp.company}</p>
//             <p>Duration: {exp.duration}</p>
//             <p>{exp.description}</p>
//           </div>
//         ))}
        
//         <h4>Skills</h4>
//         <p><strong>Technical Skills:</strong> {formData.skills.technical}</p>
//         <p><strong>Soft Skills:</strong> {formData.skills.soft}</p>
//         <p><strong>Languages:</strong> {formData.skills.languages}</p>
//       </Card.Body>
//     </Card>
//   );

//   return (
//     <Container fluid className="py-4">
//       <h1 className="text-center mb-4">AI Resume Builder</h1>
      
//       {alert.show && (
//         <Alert 
//           variant={alert.variant} 
//           onClose={() => setAlert({ ...alert, show: false })} 
//           dismissible
//         >
//           {alert.message}
//         </Alert>
//       )}

//       <Row>
//         <Col md={3}>
//           <Nav className="flex-column">
//             <Nav.Link 
//               active={activeSection === 'personal'}
//               onClick={() => setActiveSection('personal')}
//             >
//               Personal Information
//             </Nav.Link>
//             <Nav.Link 
//               active={activeSection === 'education'}
//               onClick={() => setActiveSection('education')}
//             >
//               Education
//             </Nav.Link>
//             <Nav.Link 
//               active={activeSection === 'experience'}
//               onClick={() => setActiveSection('experience')}
//             >
//               Experience
//             </Nav.Link>
//             <Nav.Link 
//               active={activeSection === 'skills'}
//               onClick={() => setActiveSection('skills')}
//             >
//               Skills
//             </Nav.Link>
//           </Nav>
//         </Col>

//         <Col md={9}>
//           <Card>
//             <Card.Body>
//               {activeSection === 'personal' && (
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={formData.personal.fullName}
//                       onChange={(e) => handleInputChange('personal', 'fullName', e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       value={formData.personal.email}
//                       onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control
//                       type="tel"
//                       value={formData.personal.phone}
//                       onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={formData.personal.address}
//                       onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Professional Summary</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       value={formData.personal.summary}
//                       onChange={(e) => handleInputChange('personal', 'summary', e.target.value)}
//                     />
//                   </Form.Group>
//                 </Form>
//               )}

//               {activeSection === 'education' && (
//                 <>
//                   {formData.education.map((edu, index) => (
//                     <Form key={index} className="mb-4">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h5>Education #{index + 1}</h5>
//                         {index > 0 && (
//                           <Button 
//                             variant="danger" 
//                             size="sm"
//                             onClick={() => removeItem('education', index)}
//                           >
//                             Remove
//                           </Button>
//                         )}
//                       </div>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Degree</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.degree}
//                           onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>School</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.school}
//                           onChange={(e) => handleInputChange('education', 'school', e.target.value, index)}
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Year</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.year}
//                           onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>GPA</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.gpa}
//                           onChange={(e) => handleInputChange('education', 'gpa', e.target.value, index)}
//                         />
//                       </Form.Group>
//                     </Form>
//                   ))}
//                   <Button onClick={() => addNewItem('education')}>Add Education</Button>
//                 </>
//               )}

//               {activeSection === 'experience' && (
//                 <>
//                   {formData.experience.map((exp, index) => (
//                     <Form key={index} className="mb-4">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h5>Experience #{index + 1}</h5>
//                         {index > 0 && (
//                           <Button 
//                             variant="danger" 
//                             size="sm"
//                             onClick={() => removeItem('experience', index)}
//                           >
//                             Remove
//                           </Button>
//                         )}
//                       </div>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Job Title</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={exp.title}
//                           onChange={(e) => handleInputChange('experience', 'title', e.target.value, index)}
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Company</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={exp.company}
//                           onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Duration</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={exp.duration}
//                           onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
//                         />
//                       </Form.Group>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control
//                           as="textarea"
//                           rows={3}
//                           value={exp.description}
//                           onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
//                         />
//                       </Form.Group>
//                     </Form>
//                   ))}
//                   <Button onClick={() => addNewItem('experience')}>Add Experience</Button>
//                 </>
//               )}

//               {activeSection === 'skills' && (
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Technical Skills</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       value={formData.skills.technical}
//                       onChange={(e) => handleInputChange('skills', 'technical', e.target.value)}
//                       placeholder="e.g., JavaScript, React, Python..."
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Soft Skills</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       value={formData.skills.soft}
//                       onChange={(e) => handleInputChange('skills', 'soft', e.target.value)}
//                       placeholder="e.g., Leadership, Communication, Team Work..."
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Languages</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={2}
//                       value={formData.skills.languages}
//                       onChange={(e) => handleInputChange('skills', 'languages', e.target.value)}
//                       placeholder="e.g., English (Native), Spanish (Fluent)..."
//                     />
//                   </Form.Group>
//                 </Form>
//               )}
//             </Card.Body>
//           </Card>

//           <div className="mt-4 d-flex justify-content-between">
//             <Button 
//               variant="primary" 
//               onClick={generateResume}
//             >
//               Generate Resume
//             </Button>
//             <Button 
//               variant="secondary" 
//               onClick={() => setShowPreview(!showPreview)}
//             >
//               {showPreview ? 'Hide Preview' : 'Show Preview'}
//             </Button>
//           </div>

//           {showPreview && <ResumePreview />}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AIResumeBuilder;


//2


// import React, { useState } from 'react';
// import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
// import html2pdf from 'html2pdf.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ResumeBuilder = () => {
//   const [personalInfo, setPersonalInfo] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     location: '',
//     linkedIn: '',
//     objective: ''
//   });

//   const [education, setEducation] = useState([{
//     degree: '',
//     institution: '',
//     year: '',
//     grade: ''
//   }]);

//   const [experience, setExperience] = useState([{
//     company: '',
//     position: '',
//     duration: '',
//     description: ''
//   }]);

//   const [achievements, setAchievements] = useState([{
//     title: '',
//     description: ''
//   }]);

//   const [projects, setProjects] = useState([{
//     name: '',
//     description: '',
//     technologies: ''
//   }]);

//   const [certifications, setCertifications] = useState([{
//     name: '',
//     issuer: '',
//     year: ''
//   }]);

//   const [skills, setSkills] = useState([{
//     name: ''
//   }]);

//   const [showResume, setShowResume] = useState(false);

//   const handlePersonalInfoChange = (e) => {
//     setPersonalInfo({
//       ...personalInfo,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleArrayChange = (index, field, value, stateSetter, stateArray) => {
//     const newArray = [...stateArray];
//     newArray[index] = { ...newArray[index], [field]: value };
//     stateSetter(newArray);
//   };

//   const addArrayItem = (stateSetter, stateArray, emptyItem) => {
//     stateSetter([...stateArray, emptyItem]);
//   };

//   const removeArrayItem = (index, stateSetter, stateArray) => {
//     const newArray = stateArray.filter((_, i) => i !== index);
//     stateSetter(newArray);
//   };

//   const generateResume = () => {
//     setShowResume(true);
//   };

//   const downloadPDF = () => {
//     const element = document.getElementById('resume');
//     const opt = {
//       margin: 1,
//       filename: `${personalInfo.fullName.replace(' ', '_')}_resume.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <Container className="my-5">
//       {!showResume ? (
//         <div>
//           <h1 className="text-center mb-4">AI Resume Builder</h1>
          
//           {/* Personal Information */}
//           <Card className="mb-4">
//             <Card.Header>
//               <h3>Personal Information</h3>
//             </Card.Header>
//             <Card.Body>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="fullName"
//                       value={personalInfo.fullName}
//                       onChange={handlePersonalInfoChange}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       name="email"
//                       value={personalInfo.email}
//                       onChange={handlePersonalInfoChange}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control
//                       type="tel"
//                       name="phone"
//                       value={personalInfo.phone}
//                       onChange={handlePersonalInfoChange}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Location</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="location"
//                       value={personalInfo.location}
//                       onChange={handlePersonalInfoChange}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Form.Group className="mb-3">
//                 <Form.Label>LinkedIn</Form.Label>
//                 <Form.Control
//                   type="url"
//                   name="linkedIn"
//                   value={personalInfo.linkedIn}
//                   onChange={handlePersonalInfoChange}
//                 />
//               </Form.Group>
//               <Form.Group className="mb-3">
//                 <Form.Label>Professional Objective</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   name="objective"
//                   value={personalInfo.objective}
//                   onChange={handlePersonalInfoChange}
//                 />
//               </Form.Group>
//             </Card.Body>
//           </Card>

//           {/* Education */}
//           <Card className="mb-4">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <h3>Education</h3>
//               <Button 
//                 variant="success" 
//                 size="sm"
//                 onClick={() => addArrayItem(setEducation, education, { degree: '', institution: '', year: '', grade: '' })}
//               >
//                 Add Education
//               </Button>
//             </Card.Header>
//             <Card.Body>
//               {education.map((edu, index) => (
//                 <div key={index} className="mb-4 border-bottom pb-3">
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Degree</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.degree}
//                           onChange={(e) => handleArrayChange(index, 'degree', e.target.value, setEducation, education)}
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Institution</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.institution}
//                           onChange={(e) => handleArrayChange(index, 'institution', e.target.value, setEducation, education)}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Year</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.year}
//                           onChange={(e) => handleArrayChange(index, 'year', e.target.value, setEducation, education)}
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Grade</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={edu.grade}
//                           onChange={(e) => handleArrayChange(index, 'grade', e.target.value, setEducation, education)}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   {education.length > 1 && (
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={() => removeArrayItem(index, setEducation, education)}
//                     >
//                       Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>

//           {/* Experience */}
//           <Card className="mb-4">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <h3>Experience</h3>
//               <Button 
//                 variant="success" 
//                 size="sm"
//                 onClick={() => addArrayItem(setExperience, experience, { company: '', position: '', duration: '', description: '' })}
//               >
//                 Add Experience
//               </Button>
//             </Card.Header>
//             <Card.Body>
//               {experience.map((exp, index) => (
//                 <div key={index} className="mb-4 border-bottom pb-3">
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Company</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={exp.company}
//                           onChange={(e) => handleArrayChange(index, 'company', e.target.value, setExperience, experience)}
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Position</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={exp.position}
//                           onChange={(e) => handleArrayChange(index, 'position', e.target.value, setExperience, experience)}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Duration</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={exp.duration}
//                       onChange={(e) => handleArrayChange(index, 'duration', e.target.value, setExperience, experience)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       value={exp.description}
//                       onChange={(e) => handleArrayChange(index, 'description', e.target.value, setExperience, experience)}
//                     />
//                   </Form.Group>
//                   {experience.length > 1 && (
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={() => removeArrayItem(index, setExperience, experience)}
//                     >
//                       Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>

//           {/* Projects */}
//           <Card className="mb-4">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <h3>Projects</h3>
//               <Button 
//                 variant="success" 
//                 size="sm"
//                 onClick={() => addArrayItem(setProjects, projects, { name: '', description: '', technologies: '' })}
//               >
//                 Add Project
//               </Button>
//             </Card.Header>
//             <Card.Body>
//               {projects.map((project, index) => (
//                 <div key={index} className="mb-4 border-bottom pb-3">
//                   <Form.Group className="mb-3">
//                     <Form.Label>Project Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={project.name}
//                       onChange={(e) => handleArrayChange(index, 'name', e.target.value, setProjects, projects)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       value={project.description}
//                       onChange={(e) => handleArrayChange(index, 'description', e.target.value, setProjects, projects)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Technologies Used</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={project.technologies}
//                       onChange={(e) => handleArrayChange(index, 'technologies', e.target.value, setProjects, projects)}
//                     />
//                   </Form.Group>
//                   {projects.length > 1 && (
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={() => removeArrayItem(index, setProjects, projects)}
//                     >
//                       Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>

//           {/* Achievements */}
//           <Card className="mb-4">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <h3>Achievements</h3>
//               <Button 
//                 variant="success" 
//                 size="sm"
//                 onClick={() => addArrayItem(setAchievements, achievements, { title: '', description: '' })}
//               >
//                 Add Achievement
//               </Button>
//             </Card.Header>
//             <Card.Body>
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="mb-4 border-bottom pb-3">
//                   <Form.Group className="mb-3">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={achievement.title}
//                       onChange={(e) => handleArrayChange(index, 'title', e.target.value, setAchievements, achievements)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       value={achievement.description}
//                       onChange={(e) => handleArrayChange(index, 'description', e.target.value, setAchievements, achievements)}
//                     />
//                   </Form.Group>
//                   {achievements.length > 1 && (
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={() => removeArrayItem(index, setAchievements, achievements)}
//                     >
//                       Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>

//           {/* Certifications */}
//           <Card className="mb-4">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <h3>Certifications</h3>
//               <Button 
//                 variant="success" 
//                 size="sm"
//                 onClick={() => addArrayItem(setCertifications, certifications, { name: '', issuer: '', year: '' })}
//               >
//                 Add Certification
//               </Button>
//             </Card.Header>
//             <Card.Body>
//             {certifications.map((cert, index) => (
//                 <div key={index} className="mb-4 border-bottom pb-3">
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Certification Name</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={cert.name}
//                           onChange={(e) => handleArrayChange(index, 'name', e.target.value, setCertifications, certifications)}
//                         />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Issuer</Form.Label>
//                         <Form.Control
//                           type="text"
//                           value={cert.issuer}
//                           onChange={(e) => handleArrayChange(index, 'issuer', e.target.value, setCertifications, certifications)}
//                         />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Year</Form.Label>
//                     <Form.Control
//                       type="text"
//                       value={cert.year}
//                       onChange={(e) => handleArrayChange(index, 'year', e.target.value, setCertifications, certifications)}
//                     />
//                   </Form.Group>
//                   {certifications.length > 1 && (
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={() => removeArrayItem(index, setCertifications, certifications)}
//                     >
//                       Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>

//           {/* Skills */}
//           <Card className="mb-4">
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <h3>Skills</h3>
//               <Button 
//                 variant="success" 
//                 size="sm"
//                 onClick={() => addArrayItem(setSkills, skills, { name: '' })}
//               >
//                 Add Skill
//               </Button>
//             </Card.Header>
//             <Card.Body>
//               {skills.map((skill, index) => (
//                 <div key={index} className="mb-3 d-flex align-items-center">
//                   <Form.Group className="flex-grow-1 me-2">
//                     <Form.Control
//                       type="text"
//                       value={skill.name}
//                       onChange={(e) => handleArrayChange(index, 'name', e.target.value, setSkills, skills)}
//                       placeholder="Enter skill"
//                     />
//                   </Form.Group>
//                   {skills.length > 1 && (
//                     <Button 
//                       variant="danger" 
//                       size="sm"
//                       onClick={() => removeArrayItem(index, setSkills, skills)}
//                     >
//                       Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//             </Card.Body>
//           </Card>

//           <div className="text-center mt-4">
//             <Button variant="primary" size="lg" onClick={generateResume}>
//               Generate Resume
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="mb-3">
//             <Button variant="secondary" onClick={() => setShowResume(false)} className="me-2">
//               Back to Edit
//             </Button>
//             <Button variant="success" onClick={downloadPDF}>
//               Download PDF
//             </Button>
//           </div>

//           {/* Resume Preview */}
//           <div id="resume" className="bg-white p-4">
//             <div className="text-center mb-4">
//               <h1>{personalInfo.fullName}</h1>
//               <p className="mb-1">{personalInfo.email} | {personalInfo.phone}</p>
//               <p className="mb-1">{personalInfo.location}</p>
//               <p>{personalInfo.linkedIn}</p>
//             </div>

//             {personalInfo.objective && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Professional Objective</h2>
//                 <p>{personalInfo.objective}</p>
//               </div>
//             )}

//             {education.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Education</h2>
//                 {education.map((edu, index) => (
//                   <div key={index} className="mb-3">
//                     <h4>{edu.degree}</h4>
//                     <p className="mb-1">{edu.institution}</p>
//                     <p className="mb-1">Year: {edu.year}</p>
//                     <p>Grade: {edu.grade}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {experience.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Experience</h2>
//                 {experience.map((exp, index) => (
//                   <div key={index} className="mb-3">
//                     <h4>{exp.position}</h4>
//                     <p className="mb-1">{exp.company}</p>
//                     <p className="mb-1">{exp.duration}</p>
//                     <p>{exp.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {projects.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Projects</h2>
//                 {projects.map((project, index) => (
//                   <div key={index} className="mb-3">
//                     <h4>{project.name}</h4>
//                     <p className="mb-1">{project.description}</p>
//                     <p>Technologies: {project.technologies}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {achievements.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Achievements</h2>
//                 {achievements.map((achievement, index) => (
//                   <div key={index} className="mb-3">
//                     <h4>{achievement.title}</h4>
//                     <p>{achievement.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {certifications.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Certifications</h2>
//                 {certifications.map((cert, index) => (
//                   <div key={index} className="mb-3">
//                     <h4>{cert.name}</h4>
//                     <p className="mb-1">Issuer: {cert.issuer}</p>
//                     <p>Year: {cert.year}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {skills.length > 0 && (
//               <div className="mb-4">
//                 <h2 className="border-bottom pb-2">Skills</h2>
//                 <p>{skills.map(skill => skill.name).join(', ')}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default ResumeBuilder;



//3


// import React, { useState } from 'react';
// import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import html2pdf from 'html2pdf.js';

// const ResumeBuilder = () => {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//     linkedin: ''
//   });

//   const [experience, setExperience] = useState([{
//     company: '',
//     position: '',
//     duration: '',
//     achievements: ''
//   }]);

//   const [education, setEducation] = useState([{
//     school: '',
//     degree: '',
//     year: '',
//     gpa: ''
//   }]);

//   const [projects, setProjects] = useState([{
//     title: '',
//     description: '',
//     technologies: ''
//   }]);

//   const [certifications, setCertifications] = useState([{
//     name: '',
//     issuer: '',
//     year: ''
//   }]);

//   const [skills, setSkills] = useState('');

//   const handlePersonalInfoChange = (e) => {
//     setPersonalInfo({
//       ...personalInfo,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleExperienceChange = (index, e) => {
//     const newExperience = [...experience];
//     newExperience[index] = {
//       ...newExperience[index],
//       [e.target.name]: e.target.value
//     };
//     setExperience(newExperience);
//   };

//   const addExperience = () => {
//     setExperience([...experience, {
//       company: '',
//       position: '',
//       duration: '',
//       achievements: ''
//     }]);
//   };

//   const handleEducationChange = (index, e) => {
//     const newEducation = [...education];
//     newEducation[index] = {
//       ...newEducation[index],
//       [e.target.name]: e.target.value
//     };
//     setEducation(newEducation);
//   };

//   const addEducation = () => {
//     setEducation([...education, {
//       school: '',
//       degree: '',
//       year: '',
//       gpa: ''
//     }]);
//   };

//   const handleProjectChange = (index, e) => {
//     const newProjects = [...projects];
//     newProjects[index] = {
//       ...newProjects[index],
//       [e.target.name]: e.target.value
//     };
//     setProjects(newProjects);
//   };

//   const addProject = () => {
//     setProjects([...projects, {
//       title: '',
//       description: '',
//       technologies: ''
//     }]);
//   };

//   const handleCertificationChange = (index, e) => {
//     const newCertifications = [...certifications];
//     newCertifications[index] = {
//       ...newCertifications[index],
//       [e.target.name]: e.target.value
//     };
//     setCertifications(newCertifications);
//   };

//   const addCertification = () => {
//     setCertifications([...certifications, {
//       name: '',
//       issuer: '',
//       year: ''
//     }]);
//   };

//   const downloadPDF = () => {
//     const element = document.getElementById('resume-preview');
//     const opt = {
//       margin: 1,
//       filename: 'resume.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <Container fluid className="p-4">
//       <Row>
//         <Col md={6}>
//           <Card className="mb-4">
//             <Card.Body>
//               <h3>Personal Information</h3>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={personalInfo.name}
//                     onChange={handlePersonalInfoChange}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={personalInfo.email}
//                     onChange={handlePersonalInfoChange}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Phone</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     name="phone"
//                     value={personalInfo.phone}
//                     onChange={handlePersonalInfoChange}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Location</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="location"
//                     value={personalInfo.location}
//                     onChange={handlePersonalInfoChange}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>LinkedIn</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="linkedin"
//                     value={personalInfo.linkedin}
//                     onChange={handlePersonalInfoChange}
//                   />
//                 </Form.Group>
//               </Form>

//               <h3 className="mt-4">Experience</h3>
//               {experience.map((exp, index) => (
//                 <Form key={index} className="mb-3">
//                   <Form.Group className="mb-3">
//                     <Form.Label>Company</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="company"
//                       value={exp.company}
//                       onChange={(e) => handleExperienceChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Position</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="position"
//                       value={exp.position}
//                       onChange={(e) => handleExperienceChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Duration</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="duration"
//                       value={exp.duration}
//                       onChange={(e) => handleExperienceChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Achievements</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       name="achievements"
//                       value={exp.achievements}
//                       onChange={(e) => handleExperienceChange(index, e)}
//                     />
//                   </Form.Group>
//                 </Form>
//               ))}
//               <Button variant="secondary" onClick={addExperience}>Add Experience</Button>

//               <h3 className="mt-4">Education</h3>
//               {education.map((edu, index) => (
//                 <Form key={index} className="mb-3">
//                   <Form.Group className="mb-3">
//                     <Form.Label>School</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="school"
//                       value={edu.school}
//                       onChange={(e) => handleEducationChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Degree</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="degree"
//                       value={edu.degree}
//                       onChange={(e) => handleEducationChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Year</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="year"
//                       value={edu.year}
//                       onChange={(e) => handleEducationChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>GPA</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="gpa"
//                       value={edu.gpa}
//                       onChange={(e) => handleEducationChange(index, e)}
//                     />
//                   </Form.Group>
//                 </Form>
//               ))}
//               <Button variant="secondary" onClick={addEducation}>Add Education</Button>

//               <h3 className="mt-4">Projects</h3>
//               {projects.map((project, index) => (
//                 <Form key={index} className="mb-3">
//                   <Form.Group className="mb-3">
//                     <Form.Label>Project Title</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="title"
//                       value={project.title}
//                       onChange={(e) => handleProjectChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       name="description"
//                       value={project.description}
//                       onChange={(e) => handleProjectChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Technologies Used</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="technologies"
//                       value={project.technologies}
//                       onChange={(e) => handleProjectChange(index, e)}
//                     />
//                   </Form.Group>
//                 </Form>
//               ))}
//               <Button variant="secondary" onClick={addProject}>Add Project</Button>

//               <h3 className="mt-4">Certifications</h3>
//               {certifications.map((cert, index) => (
//                 <Form key={index} className="mb-3">
//                   <Form.Group className="mb-3">
//                     <Form.Label>Certification Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       value={cert.name}
//                       onChange={(e) => handleCertificationChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Issuing Organization</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="issuer"
//                       value={cert.issuer}
//                       onChange={(e) => handleCertificationChange(index, e)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Year</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="year"
//                       value={cert.year}
//                       onChange={(e) => handleCertificationChange(index, e)}
//                     />
//                   </Form.Group>
//                 </Form>
//               ))}
//               <Button variant="secondary" onClick={addCertification}>Add Certification</Button>

//               <h3 className="mt-4">Skills</h3>
//               <Form.Group className="mb-3">
//                 <Form.Label>Skills (comma-separated)</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   value={skills}
//                   onChange={(e) => setSkills(e.target.value)}
//                 />
//               </Form.Group>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h3>Resume Preview</h3>
//                 <Button variant="primary" onClick={downloadPDF}>Download PDF</Button>
//               </div>
//               <div id="resume-preview" className="p-4" style={{ backgroundColor: 'white' }}>
//                 <div className="text-center mb-4">
//                   <h2>{personalInfo.name}</h2>
//                   <p>
//                     {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
//                     <br />
//                     {personalInfo.linkedin}
//                   </p>
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="border-bottom pb-2">Professional Experience</h4>
//                   {experience.map((exp, index) => (
//                     <div key={index} className="mb-3">
//                       <h5>{exp.position}</h5>
//                       <h6>{exp.company} | {exp.duration}</h6>
//                       <p>{exp.achievements}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="border-bottom pb-2">Education</h4>
//                   {education.map((edu, index) => (
//                     <div key={index} className="mb-3">
//                       <h5>{edu.school}</h5>
//                       <h6>{edu.degree} | {edu.year}</h6>
//                       {edu.gpa && <p>GPA: {edu.gpa}</p>}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="border-bottom pb-2">Projects</h4>
//                   {projects.map((project, index) => (
//                     <div key={index} className="mb-3">
//                       <h5>{project.title}</h5>
//                       <p>{project.description}</p>
//                       <p><strong>Technologies:</strong> {project.technologies}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="border-bottom pb-2">Certifications</h4>
//                   {certifications.map((cert, index) => (
//                     <div key={index} className="mb-3">
//                       <h5>{cert.name}</h5>
//                       <p>{cert.issuer} | {cert.year}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <h4 className="border-bottom pb-2">Skills</h4>
//                   <p>{skills}</p>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ResumeBuilder;




//4

import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2pdf from 'html2pdf.js';

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: ''
  });

  const [experience, setExperience] = useState([{
    company: '',
    position: '',
    duration: '',
    achievements: ''
  }]);

  const [achievements, setAchievements] = useState([{
    title: '',
    description: ''
  }]);

  const [certifications, setCertifications] = useState([{
    name: '',
    issuer: '',
    year: ''
  }]);

  const [education, setEducation] = useState([{
    school: '',
    degree: '',
    year: '',
    gpa: ''
  }]);

  const [skills, setSkills] = useState('');
  const [showError, setShowError] = useState(false);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleExperienceChange = (index, e) => {
    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      [e.target.name]: e.target.value
    };
    setExperience(newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, {
      company: '',
      position: '',
      duration: '',
      achievements: ''
    }]);
  };

  const removeExperience = (index) => {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
  };

  const handleAchievementChange = (index, e) => {
    const newAchievements = [...achievements];
    newAchievements[index] = {
      ...newAchievements[index],
      [e.target.name]: e.target.value
    };
    setAchievements(newAchievements);
  };

  const addAchievement = () => {
    setAchievements([...achievements, {
      title: '',
      description: ''
    }]);
  };

  const removeAchievement = (index) => {
    const newAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(newAchievements);
  };

  const handleCertificationChange = (index, e) => {
    const newCertifications = [...certifications];
    newCertifications[index] = {
      ...newCertifications[index],
      [e.target.name]: e.target.value
    };
    setCertifications(newCertifications);
  };

  const addCertification = () => {
    setCertifications([...certifications, {
      name: '',
      issuer: '',
      year: ''
    }]);
  };

  const removeCertification = (index) => {
    const newCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(newCertifications);
  };

  const handleEducationChange = (index, e) => {
    const newEducation = [...education];
    newEducation[index] = {
      ...newEducation[index],
      [e.target.name]: e.target.value
    };
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, {
      school: '',
      degree: '',
      year: '',
      gpa: ''
    }]);
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  const validateExperience = () => {
    if (experience.length === 0) {
      setShowError(true);
      return false;
    }
    const hasValidExperience = experience.some(exp => 
      exp.company.trim() && exp.position.trim() && exp.duration.trim()
    );
    setShowError(!hasValidExperience);
    return hasValidExperience;
  };

  const downloadPDF = () => {
    if (!validateExperience()) {
      window.scrollTo(0, 0);
      return;
    }
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              {showError && (
                <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                  Please add at least one valid work experience entry before downloading.
                </Alert>
              )}

              <h3>Personal Information</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handlePersonalInfoChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={personalInfo.location}
                    onChange={handlePersonalInfoChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control
                    type="text"
                    name="linkedin"
                    value={personalInfo.linkedin}
                    onChange={handlePersonalInfoChange}
                  />
                </Form.Group>
              </Form>

              <h3 className="mt-4">Experience</h3>
              {experience.map((exp, index) => (
                <Form key={index} className="mb-3 border p-3 rounded">
                  <div className="d-flex justify-content-end">
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => removeExperience(index)}
                    >
                      Remove
                    </Button>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      type="text"
                      name="position"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                      type="text"
                      name="duration"
                      value={exp.duration}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Achievements</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="achievements"
                      value={exp.achievements}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </Form.Group>
                </Form>
              ))}
              <Button variant="secondary" onClick={addExperience}>Add Experience</Button>

              <h3 className="mt-4">Achievements</h3>
              {achievements.map((achievement, index) => (
                <Form key={index} className="mb-3 border p-3 rounded">
                  <div className="d-flex justify-content-end">
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => removeAchievement(index)}
                    >
                      Remove
                    </Button>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={achievement.title}
                      onChange={(e) => handleAchievementChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      value={achievement.description}
                      onChange={(e) => handleAchievementChange(index, e)}
                    />
                  </Form.Group>
                </Form>
              ))}
              <Button variant="secondary" onClick={addAchievement}>Add Achievement</Button>

              <h3 className="mt-4">Certifications</h3>
              {certifications.map((cert, index) => (
                <Form key={index} className="mb-3 border p-3 rounded">
                  <div className="d-flex justify-content-end">
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => removeCertification(index)}
                    >
                      Remove
                    </Button>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>Certification Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={cert.name}
                      onChange={(e) => handleCertificationChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Issuing Organization</Form.Label>
                    <Form.Control
                      type="text"
                      name="issuer"
                      value={cert.issuer}
                      onChange={(e) => handleCertificationChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      name="year"
                      value={cert.year}
                      onChange={(e) => handleCertificationChange(index, e)}
                    />
                  </Form.Group>
                </Form>
              ))}
              <Button variant="secondary" onClick={addCertification}>Add Certification</Button>

              <h3 className="mt-4">Skills</h3>
              <Form.Group className="mb-3">
                <Form.Label>Skills (comma-separated)</Form.Label>
                <Form.Control
                  as="textarea"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </Form.Group>

              <h3 className="mt-4">Education</h3>
              {education.map((edu, index) => (
                <Form key={index} className="mb-3 border p-3 rounded">
                  <div className="d-flex justify-content-end">
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => removeEducation(index)}
                    >
                      Remove
                    </Button>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>School</Form.Label>
                    <Form.Control
                      type="text"
                      name="school"
                      value={edu.school}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control
                      type="text"
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      name="year"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control
                      type="text"
                      name="gpa"
                      value={edu.gpa}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </Form.Group>
                </Form>
              ))}
              <Button variant="secondary" onClick={addEducation}>Add Education</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Resume Preview</h3>
                <Button variant="primary" onClick={downloadPDF}>Download PDF</Button>
              </div>
              <div id="resume-preview" className="p-4" style={{ backgroundColor: 'white' }}>
                <div className="text-center mb-4">
                  <h2>{personalInfo.name}</h2>
                  <p>
                    {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
                    <br />
                    {personalInfo.linkedin}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="border-bottom pb-2">Professional Experience</h4>
                  {experience.map((exp, index) => (
                    <div key={index} className="mb-3">
                      <h5>{exp.position}</h5>
                      <h6>{exp.company} | {exp.duration}</h6>
                      <p>{exp.achievements}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="border-bottom pb-2">Achievements</h4>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="mb-3">
                      <h5>{achievement.title}</h5>
                      <p>{achievement.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="border-bottom pb-2">Certifications</h4>
                  {certifications.map((cert, index) => (
                    <div key={index} className="mb-3">
                      <h5>{cert.name}</h5>
                      <p>{cert.issuer} | {cert.year}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="border-bottom pb-2">Skills</h4>
                  <p>{skills}</p>
                </div>

                <div className="mb-4">
                  <h4 className="border-bottom pb-2">Education</h4>
                  {education.map((edu, index) => (
                    <div key={index} className="mb-3">
                      <h5>{edu.school}</h5>
                      <h6>{edu.degree} | {edu.year}</h6>
                      {edu.gpa && <p>GPA: {edu.gpa}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeBuilder;