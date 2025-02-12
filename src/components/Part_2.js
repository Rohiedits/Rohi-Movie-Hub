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

import React, { useState } from "react";

function AttendanceAnalyzer() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [attendancePercentage, setAttendancePercentage] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [letter, setLetter] = useState("");

  const calculateAttendance = () => {
    if (totalClasses === "" || attendedClasses === "" || totalClasses <= 0) {
      alert("Please enter valid inputs.");
      return;
    }

    const percentage = (attendedClasses / totalClasses) * 100;
    setAttendancePercentage(percentage.toFixed(2));

    if (percentage < 75) {
      setLetter(""); // Reset letter when attendance is recalculated
    }
  };

  const generateLetter = () => {
    if (!studentName || !collegeName || !branch || !year || !date) {
      alert("Please enter all details (Name, College Name, Branch, Year, and Date).");
      return;
    }

    const generatedLetter = `To,\nThe Head of the Department,\n${collegeName}\n\nDate: ${date}\n\nSubject: Request for Consideration of Low Attendance\n\nRespected Sir/Madam,\n\nI hope this letter finds you well. I am ${studentName}, a student of ${branch} in ${year} year. Due to unforeseen circumstances, my attendance has fallen below the required 75%.\n\nThe reason for my low attendance is due to [mention your reason, e.g., health issues, personal emergencies, or other valid reasons]. I sincerely regret this situation and assure you that I will make every effort to improve my attendance in the future.\n\nI kindly request your consideration in this matter. I would be grateful for any opportunity to compensate for my missed classes.\n\nThank you for your time and understanding.\n\nSincerely,\n${studentName}`;

    setLetter(generatedLetter);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Attendance Analyzer</h1>
      <div>
        <label>
          Total Classes:{" "}
          <input
            type="number"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Attended Classes:{" "}
          <input
            type="number"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateAttendance} style={{ marginTop: "20px" }}>
        Submit
      </button>

      {attendancePercentage !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Attendance: {attendancePercentage}%</h2>
          {attendancePercentage < 75 ? (
            <div>
              <h3 style={{ color: "red" }}>Below 75% Attendance</h3>
              <p>Please enter your details to generate the letter.</p>

              <div style={{ marginTop: "10px" }}>
                <label>
                  Your Name:{" "}
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </label>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  College Name:{" "}
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                  />
                </label>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  Branch:{" "}
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                </label>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  Year of Study:{" "}
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </label>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label>
                  Date:{" "}
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
              </div>

              <button onClick={generateLetter} style={{ marginTop: "20px" }}>
                Generate Letter
              </button>
            </div>
          ) : (
            <h3 style={{ color: "green" }}>Good Attendance!</h3>
          )}
        </div>
      )}

      {letter && (
        <div
          style={{
            marginTop: "30px",
            textAlign: "left",
            padding: "20px",
            border: "1px solid black",
            display: "inline-block",
            width: "80%",
          }}
        >
          <h3>Generated Letter</h3>
          <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
            {letter}
          </pre>
        </div>
      )}
    </div>
  );
}

export default AttendanceAnalyzer;
