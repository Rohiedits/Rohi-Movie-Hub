// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline style={{position:"fixed"}} scene="https://prod.spline.design/PcLXkb69XQxRhqp9/scene.splinecode" />
//   );
// }


// import React, { useState } from "react";

// function AttendanceAnalyzer() {
//   const [totalClasses, setTotalClasses] = useState("");
//   const [attendedClasses, setAttendedClasses] = useState("");
//   const [attendancePercentage, setAttendancePercentage] = useState(null);
//   const [letterReason, setLetterReason] = useState("");

//   const calculateAttendance = () => {
//     if (totalClasses === "" || attendedClasses === "" || totalClasses <= 0) {
//       alert("Please enter valid inputs.");
//       return;
//     }

//     const percentage = (attendedClasses / totalClasses) * 100;
//     setAttendancePercentage(percentage.toFixed(2));

//     if (percentage < 75) {
//       setLetterReason(
//         "I would like to request consideration for my low attendance due to health issues/personal emergencies."
//       );
//     } else {
//       setLetterReason("");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Attendance Analyzer</h1>
//       <div>
//         <label>
//           Total Classes:{" "}
//           <input
//             type="number"
//             value={totalClasses}
//             onChange={(e) => setTotalClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <label>
//           Attended Classes:{" "}
//           <input
//             type="number"
//             value={attendedClasses}
//             onChange={(e) => setAttendedClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateAttendance} style={{ marginTop: "20px" }}>
//         Submit
//       </button>

//       {attendancePercentage !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Attendance: {attendancePercentage}%</h2>
//           {attendancePercentage < 75 ? (
//             <div>
//               <h3 style={{ color: "red" }}>Below 75% Attendance</h3>
//               <p>{letterReason}</p>
//             </div>
//           ) : (
//             <h3 style={{ color: "green" }}>Good Attendance!</h3>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AttendanceAnalyzer;


// import React, { useState } from "react";

// function AttendanceAnalyzer() {
//   const [totalClasses, setTotalClasses] = useState("");
//   const [attendedClasses, setAttendedClasses] = useState("");
//   const [attendancePercentage, setAttendancePercentage] = useState(null);
//   const [letter, setLetter] = useState("");

//   const calculateAttendance = () => {
//     if (totalClasses === "" || attendedClasses === "" || totalClasses <= 0) {
//       alert("Please enter valid inputs.");
//       return;
//     }

//     const percentage = (attendedClasses / totalClasses) * 100;
//     setAttendancePercentage(percentage.toFixed(2));

//     if (percentage < 75) {
//       setLetter(
//         `To,\nThe Head of the Department,\n[Your College Name]\n\nSubject: Request for Consideration of Low Attendance\n\nRespected Sir/Madam,\n\nI hope this letter finds you well. I am [Your Name], a student of [Your Branch] in [Your Year]. Due to unforeseen circumstances, my attendance has fallen below the required 75%.\n\nThe reason for my low attendance is due to [mention your reason, e.g., health issues, personal emergencies, or other valid reasons]. I sincerely regret this situation and assure you that I am taking all necessary steps to catch up with my studies.\n\nI kindly request you to consider my situation and grant me permission to attend further classes. I assure you that I will maintain my attendance and performance diligently in the future.\n\nThank you for your time and consideration.\n\nSincerely,\n[Your Name]\n[Your Roll Number]\n[Your Department]`
//       );
//     } else {
//       setLetter("");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Attendance Analyzer</h1>
//       <div>
//         <label>
//           Total Classes:{" "}
//           <input
//             type="number"
//             value={totalClasses}
//             onChange={(e) => setTotalClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <label>
//           Attended Classes:{" "}
//           <input
//             type="number"
//             value={attendedClasses}
//             onChange={(e) => setAttendedClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateAttendance} style={{ marginTop: "20px" }}>
//         Submit
//       </button>

//       {attendancePercentage !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Attendance: {attendancePercentage}%</h2>
//           {attendancePercentage < 75 ? (
//             <div>
//               <h3 style={{ color: "red" }}>Below 75% Attendance</h3>
//               <h3>Generated Letter to HOD:</h3>
//               <pre
//                 style={{
//                   textAlign: "left",
//                   backgroundColor: "#f4f4f4",
//                   padding: "10px",
//                   borderRadius: "5px",
//                   whiteSpace: "pre-wrap",
//                 }}
//               >
//                 {letter}
//               </pre>
//             </div>
//           ) : (
//             <h3 style={{ color: "green" }}>Good Attendance!</h3>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AttendanceAnalyzer;


// type-3
// import React, { useState } from "react";

// function AttendanceAnalyzer() {
//   const [totalClasses, setTotalClasses] = useState("");
//   const [attendedClasses, setAttendedClasses] = useState("");
//   const [attendancePercentage, setAttendancePercentage] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [studentName, setStudentName] = useState("");
//   const [collegeName, setCollegeName] = useState("");
//   const [letter, setLetter] = useState("");

//   const calculateAttendance = () => {
//     if (totalClasses === "" || attendedClasses === "" || totalClasses <= 0) {
//       alert("Please enter valid inputs.");
//       return;
//     }

//     const percentage = (attendedClasses / totalClasses) * 100;
//     setAttendancePercentage(percentage.toFixed(2));

//     if (percentage < 75) {
//       setShowForm(true);
//     } else {
//       setShowForm(false);
//       setLetter("");
//     }
//   };

//   const generateLetter = () => {
//     if (!studentName || !collegeName) {
//       alert("Please enter your name and college name.");
//       return;
//     }

//     const generatedLetter = `To,\nThe Head of the Department,\n${collegeName}\n\nSubject: Request for Consideration of Low Attendance\n\nRespected Sir/Madam,\n\nI hope this letter finds you well. I am ${studentName}, a student of [Your Branch] in [Your Year]. Due to unforeseen circumstances, my attendance has fallen below the required 75%.\n\nThe reason for my low attendance is due to [mention your reason, e.g., health issues, personal emergencies, or other valid reasons]. I sincerely regret this situation and assure you that I will make every effort to improve my attendance in the future.\n\nI kindly request your consideration in this matter. I would be grateful for any opportunity to compensate for my missed classes.\n\nThank you for your time and understanding.\n\nSincerely,\n${studentName}`;

//     setLetter(generatedLetter);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Attendance Analyzer</h1>
//       <div>
//         <label>
//           Total Classes:{" "}
//           <input
//             type="number"
//             value={totalClasses}
//             onChange={(e) => setTotalClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <label>
//           Attended Classes:{" "}
//           <input
//             type="number"
//             value={attendedClasses}
//             onChange={(e) => setAttendedClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateAttendance} style={{ marginTop: "20px" }}>
//         Submit
//       </button>

//       {attendancePercentage !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Attendance: {attendancePercentage}%</h2>
//           {attendancePercentage < 75 ? (
//             <div>
//               <h3 style={{ color: "red" }}>Below 75% Attendance</h3>
//               <p>Please enter your details to generate the letter.</p>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Your Name:{" "}
//                   <input
//                     type="text"
//                     value={studentName}
//                     onChange={(e) => setStudentName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   College Name:{" "}
//                   <input
//                     type="text"
//                     value={collegeName}
//                     onChange={(e) => setCollegeName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <button onClick={generateLetter} style={{ marginTop: "20px" }}>
//                 Generate Letter
//               </button>
//             </div>
//           ) : (
//             <h3 style={{ color: "green" }}>Good Attendance!</h3>
//           )}
//         </div>
//       )}

//       {letter && (
//         <div style={{ marginTop: "30px", textAlign: "left", padding: "20px", border: "1px solid black", display: "inline-block" }}>
//           <h3>Generated Letter</h3>
//           <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{letter}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AttendanceAnalyzer;

//4th
// import React, { useState } from "react";

// function AttendanceAnalyzer() {
//   const [totalClasses, setTotalClasses] = useState("");
//   const [attendedClasses, setAttendedClasses] = useState("");
//   const [attendancePercentage, setAttendancePercentage] = useState(null);
//   const [studentName, setStudentName] = useState("");
//   const [collegeName, setCollegeName] = useState("");
//   const [branch, setBranch] = useState("");
//   const [date, setDate] = useState("");
//   const [letter, setLetter] = useState("");

//   const calculateAttendance = () => {
//     if (totalClasses === "" || attendedClasses === "" || totalClasses <= 0) {
//       alert("Please enter valid inputs.");
//       return;
//     }

//     const percentage = (attendedClasses / totalClasses) * 100;
//     setAttendancePercentage(percentage.toFixed(2));

//     if (percentage < 75) {
//       setLetter(""); // Reset letter when attendance is recalculated
//     }
//   };

//   const generateLetter = () => {
//     if (!studentName || !collegeName || !branch || !date) {
//       alert("Please enter all details (Name, College Name, Branch, and Date).");
//       return;
//     }

//     const generatedLetter = `To,\nThe Head of the Department,\n${collegeName}\n\nDate: ${date}\n\nSubject: Request for Consideration of Low Attendance\n\nRespected Sir/Madam,\n\nI hope this letter finds you well. I am ${studentName}, a student of ${branch} in [Your Year]. Due to unforeseen circumstances, my attendance has fallen below the required 75%.\n\nThe reason for my low attendance is due to [mention your reason, e.g., health issues, personal emergencies, or other valid reasons]. I sincerely regret this situation and assure you that I will make every effort to improve my attendance in the future.\n\nI kindly request your consideration in this matter. I would be grateful for any opportunity to compensate for my missed classes.\n\nThank you for your time and understanding.\n\nSincerely,\n${studentName}`;

//     setLetter(generatedLetter);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Attendance Analyzer</h1>
//       <div>
//         <label>
//           Total Classes:{" "}
//           <input
//             type="number"
//             value={totalClasses}
//             onChange={(e) => setTotalClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <label>
//           Attended Classes:{" "}
//           <input
//             type="number"
//             value={attendedClasses}
//             onChange={(e) => setAttendedClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateAttendance} style={{ marginTop: "20px" }}>
//         Submit
//       </button>

//       {attendancePercentage !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Attendance: {attendancePercentage}%</h2>
//           {attendancePercentage < 75 ? (
//             <div>
//               <h3 style={{ color: "red" }}>Below 75% Attendance</h3>
//               <p>Please enter your details to generate the letter.</p>

//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Your Name:{" "}
//                   <input
//                     type="text"
//                     value={studentName}
//                     onChange={(e) => setStudentName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   College Name:{" "}
//                   <input
//                     type="text"
//                     value={collegeName}
//                     onChange={(e) => setCollegeName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Branch:{" "}
//                   <input
//                     type="text"
//                     value={branch}
//                     onChange={(e) => setBranch(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Date:{" "}
//                   <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                   />
//                 </label>
//               </div>

//               <button onClick={generateLetter} style={{ marginTop: "20px" }}>
//                 Generate Letter
//               </button>
//             </div>
//           ) : (
//             <h3 style={{ color: "green" }}>Good Attendance!</h3>
//           )}
//         </div>
//       )}

//       {letter && (
//         <div
//           style={{
//             marginTop: "30px",
//             textAlign: "left",
//             padding: "20px",
//             border: "1px solid black",
//             display: "inline-block",
//             width: "80%",
//           }}
//         >
//           <h3>Generated Letter</h3>
//           <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
//             {letter}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AttendanceAnalyzer;

// import React, { useState } from "react";

// function AttendanceAnalyzer() {
//   const [totalClasses, setTotalClasses] = useState("");
//   const [attendedClasses, setAttendedClasses] = useState("");
//   const [attendancePercentage, setAttendancePercentage] = useState(null);
//   const [studentName, setStudentName] = useState("");
//   const [collegeName, setCollegeName] = useState("");
//   const [branch, setBranch] = useState("");
//   const [year, setYear] = useState("");
//   const [date, setDate] = useState("");
//   const [letter, setLetter] = useState("");

//   const calculateAttendance = () => {
//     if (totalClasses === "" || attendedClasses === "" || totalClasses <= 0) {
//       alert("Please enter valid inputs.");
//       return;
//     }

//     const percentage = (attendedClasses / totalClasses) * 100;
//     setAttendancePercentage(percentage.toFixed(2));

//     if (percentage < 75) {
//       setLetter(""); // Reset letter when attendance is recalculated
//     }
//   };

//   const generateLetter = () => {
//     if (!studentName || !collegeName || !branch || !year || !date) {
//       alert("Please enter all details (Name, College Name, Branch, Year, and Date).");
//       return;
//     }

//     const generatedLetter = `To,\nThe Head of the Department,\n${collegeName}\n\nDate: ${date}\n\nSubject: Request for Consideration of Low Attendance\n\nRespected Sir/Madam,\n\nI hope this letter finds you well. I am ${studentName}, a student of ${branch} in ${year} year. Due to unforeseen circumstances, my attendance has fallen below the required 75%.\n\nThe reason for my low attendance is due to [mention your reason, e.g., health issues, personal emergencies, or other valid reasons]. I sincerely regret this situation and assure you that I will make every effort to improve my attendance in the future.\n\nI kindly request your consideration in this matter. I would be grateful for any opportunity to compensate for my missed classes.\n\nThank you for your time and understanding.\n\nSincerely,\n${studentName}`;

//     setLetter(generatedLetter);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Attendance Analyzer</h1>
//       <div>
//         <label>
//           Total Classes:{" "}
//           <input
//             type="number"
//             value={totalClasses}
//             onChange={(e) => setTotalClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <label>
//           Attended Classes:{" "}
//           <input
//             type="number"
//             value={attendedClasses}
//             onChange={(e) => setAttendedClasses(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={calculateAttendance} style={{ marginTop: "20px" }}>
//         Submit
//       </button>

//       {attendancePercentage !== null && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Attendance: {attendancePercentage}%</h2>
//           {attendancePercentage < 75 ? (
//             <div>
//               <h3 style={{ color: "red" }}>Below 75% Attendance</h3>
//               <p>Please enter your details to generate the letter.</p>

//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Your Name:{" "}
//                   <input
//                     type="text"
//                     value={studentName}
//                     onChange={(e) => setStudentName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   College Name:{" "}
//                   <input
//                     type="text"
//                     value={collegeName}
//                     onChange={(e) => setCollegeName(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Branch:{" "}
//                   <input
//                     type="text"
//                     value={branch}
//                     onChange={(e) => setBranch(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Year of Study:{" "}
//                   <input
//                     type="text"
//                     value={year}
//                     onChange={(e) => setYear(e.target.value)}
//                   />
//                 </label>
//               </div>
//               <div style={{ marginTop: "10px" }}>
//                 <label>
//                   Date:{" "}
//                   <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                   />
//                 </label>
//               </div>

//               <button onClick={generateLetter} style={{ marginTop: "20px" }}>
//                 Generate Letter
//               </button>
//             </div>
//           ) : (
//             <h3 style={{ color: "green" }}>Good Attendance!</h3>
//           )}
//         </div>
//       )}

//       {letter && (
//         <div
//           style={{
//             marginTop: "30px",
//             textAlign: "left",
//             padding: "20px",
//             border: "1px solid black",
//             display: "inline-block",
//             width: "80%",
//           }}
//         >
//           <h3>Generated Letter</h3>
//           <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
//             {letter}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AttendanceAnalyzer;


//new 
import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsPDF } from 'jspdf';

function LowAttendanceForm({ percentage }) {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    college: '',
    year: '',
    date: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    const letterContent = `
From
${formData.name}
${formData.branch} - ${formData.year} Year
${formData.college}

To
The Head of the Department
${formData.branch} Department
${formData.college}

Date: ${formData.date}

Subject: Request for Attendance Consideration

Dear Sir/Madam,

I hope this letter finds you well. I am writing to bring to your attention my current attendance situation. My attendance percentage is currently at ${percentage}%, which is below the required 75% threshold.

The reason for my low attendance is: ${formData.reason}

I understand the importance of regular attendance and assure you that I will maintain better attendance going forward. I kindly request you to consider my case and grant me permission to continue with my studies.

Thank you for your understanding and consideration.

Yours sincerely,
${formData.name}
    `;

    doc.setFontSize(12);
    doc.text(letterContent, 20, 20, { maxWidth: 170 });
    doc.save('attendance_letter.pdf');
  };

  return (
    <Card className="p-4 mt-4">
      <h3 className="mb-4">Generate Letter to HOD</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>College Name</Form.Label>
          <Form.Control
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Year of Study</Form.Label>
          <Form.Control
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Reason for Low Attendance</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            placeholder="Please provide a valid reason for your low attendance..."
          />
        </Form.Group>

        <Button variant="primary" onClick={generatePDF}>
          Generate Letter as PDF
        </Button>
      </Form>
    </Card>
  );
}

function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState('');
  const [absentClasses, setAbsentClasses] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [showLowAttendanceForm, setShowLowAttendanceForm] = useState(false);

  const calculatePercentage = (e) => {
    e.preventDefault();
    const total = parseInt(totalClasses);
    const absent = parseInt(absentClasses);
    
    if (isNaN(total) || isNaN(absent) || total <= 0 || absent < 0 || absent > total) {
      alert('Please enter valid numbers');
      return;
    }

    const present = total - absent;
    const attendancePercentage = (present / total) * 100;
    setPercentage(attendancePercentage.toFixed(2));
    setShowLowAttendanceForm(attendancePercentage < 75);
  };

  return (
    <div>
      <Card className="p-4 mb-4 shadow-sm">
        <Form onSubmit={calculatePercentage}>
          <Form.Group className="mb-3">
            <Form.Label>Total Number of Classes</Form.Label>
            <Form.Control
              type="number"
              value={totalClasses}
              onChange={(e) => setTotalClasses(e.target.value)}
              required
              placeholder="Enter total number of classes"
              min="1"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Classes Absent</Form.Label>
            <Form.Control
              type="number"
              value={absentClasses}
              onChange={(e) => setAbsentClasses(e.target.value)}
              required
              placeholder="Enter number of classes absent"
              min="0"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Calculate Attendance
          </Button>
        </Form>
      </Card>

      {percentage !== null && (
        <Alert variant={percentage >= 75 ? 'success' : 'danger'}>
          <Alert.Heading>Attendance Result</Alert.Heading>
          Your attendance percentage is: {percentage}%
          {percentage < 75 && (
            <p className="mb-0 mt-2">
              Your attendance is below 75%. Please fill out the form below to generate a letter to the HOD.
            </p>
          )}
        </Alert>
      )}

      {showLowAttendanceForm && <LowAttendanceForm percentage={percentage} />}
    </div>
  );
}

function App() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Attendance Analyzer</h1>
      <p className="text-center text-muted mb-4">
        Calculate your attendance percentage and generate a formal letter if needed
      </p>
      <AttendanceCalculator />
    </Container>
  );
}

export default App;