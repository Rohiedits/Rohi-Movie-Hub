// import React, { useState, useEffect } from 'react';
// import { Alert, AlertTitle } from '@/components/ui/alert';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const TimeTableManager = () => {
//   const [timetable, setTimetable] = useState([]);
//   const [todayClasses, setTodayClasses] = useState([]);
//   const [notification, setNotification] = useState(null);

//   // Function to handle file upload
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       try {
//         const data = JSON.parse(e.target.result);
//         setTimetable(data);
//         filterTodayClasses(data);
//       } catch (error) {
//         setNotification({
//           type: 'error',
//           message: 'Invalid file format. Please upload a valid JSON file.'
//         });
//       }
//     };

//     reader.readAsText(file);
//   };

//   // Function to filter today's classes
//   const filterTodayClasses = (data) => {
//     const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
//     const todaySchedule = data.filter(item => 
//       item.day.toLowerCase() === daysOfWeek[today].toLowerCase()
//     );
    
//     setTodayClasses(todaySchedule);
//   };

//   // Check for upcoming classes
//   useEffect(() => {
//     const checkUpcomingClasses = () => {
//       const now = new Date();
//       const currentTime = now.getHours() * 60 + now.getMinutes();

//       todayClasses.forEach(classItem => {
//         const [hours, minutes] = classItem.startTime.split(':');
//         const classTime = parseInt(hours) * 60 + parseInt(minutes);

//         // Check if class starts in next 5 minutes
//         if (classTime - currentTime <= 5 && classTime - currentTime > 0) {
//           setNotification({
//             type: 'info',
//             message: Class ${classItem.subject} starts in ${classTime - currentTime} minutes!
//           });
//         }
//       });
//     };

//     const interval = setInterval(checkUpcomingClasses, 60000); // Check every minute
//     return () => clearInterval(interval);
//   }, [todayClasses]);

//   return (
//     <div className="p-4">
//       <Card className="mb-4">
//         <CardHeader>
//           <CardTitle>Time Table Manager</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="mb-4">
//             <input
//               type="file"
//               accept=".json"
//               onChange={handleFileUpload}
//               className="hidden"
//               id="timetable-upload"
//             />
//             <Button
//               onClick={() => document.getElementById('timetable-upload').click()}
//               className="w-full"
//             >
//               Upload Timetable
//             </Button>
//           </div>

//           {notification && (
//             <Alert className="mb-4" variant={notification.type === 'error' ? 'destructive' : 'default'}>
//               <AlertTitle>{notification.message}</AlertTitle>
//             </Alert>
//           )}

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Today's Classes</h3>
//             {todayClasses.length > 0 ? (
//               <div className="grid gap-4">
//                 {todayClasses.map((classItem, index) => (
//                   <Card key={index}>
//                     <CardContent className="p-4">
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <h4 className="font-medium">{classItem.subject}</h4>
//                           <p className="text-sm text-gray-500">
//                             {classItem.startTime} - {classItem.endTime}
//                           </p>
//                         </div>
//                         {classItem.room && (
//                           <div className="text-sm bg-blue-100 px-2 py-1 rounded">
//                             Room {classItem.room}
//                           </div>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-500">No classes scheduled for today</p>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default TimeTableManager;

//2
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Card, Form, Alert, Spinner } from 'react-bootstrap';

// const TimetableAnalyzer = () => {
//   const [timetableImage, setTimetableImage] = useState(null);
//   const [extractedClasses, setExtractedClasses] = useState([]);
//   const [notification, setNotification] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imageProcessingStatus, setImageProcessingStatus] = useState('');

//   // Function to extract subjects based on click positions
//   const [clickPositions, setClickPositions] = useState([]);
//   const [isAddingSubjects, setIsAddingSubjects] = useState(false);
// //   const [newSubjectName, setNewSubjectName] = useState('');

//   const handleImageClick = (e) => {
//     if (!isAddingSubjects) return;

//     const rect = e.target.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     setClickPositions([...clickPositions, { x, y }]);
    
//     // Show input form for subject name
//     const subjectName = prompt("Enter subject name for this position:");
//     if (subjectName) {
//       const newClass = {
//         time: `${(9 + extractedClasses.length).toString().padStart(2, '0')}:00`,
//         subject: subjectName,
//         room: `${(101 + extractedClasses.length)}`,
//         duration: '1h',
//         coordinates: { x, y }
//       };
//       setExtractedClasses([...extractedClasses, newClass]);
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setLoading(true);
//       setImageProcessingStatus('Loading image...');

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setTimetableImage(reader.result);
//         setExtractedClasses([]);
//         setClickPositions([]);
//         setLoading(false);
//         setIsAddingSubjects(true);
//         setImageProcessingStatus('Click on the image to add subjects');
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const finishAddingSubjects = () => {
//     setIsAddingSubjects(false);
//     setImageProcessingStatus('Schedule created successfully');
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
      
//       extractedClasses.forEach(classItem => {
//         const [hours, minutes] = classItem.time.split(':');
//         const classTime = new Date();
//         classTime.setHours(parseInt(hours), parseInt(minutes), 0);
        
//         const timeDiff = (classTime - now) / 1000 / 60;
//         if (timeDiff > 0 && timeDiff <= 5) {
//           setNotification({
//             subject: classItem.subject,
//             time: classItem.time,
//             room: classItem.room,
//             timeUntil: Math.ceil(timeDiff)
//           });
//         }
//       });
//     }, 30000);

//     return () => clearInterval(timer);
//   }, [extractedClasses]);

//   const isCurrentClass = (classItem) => {
//     const [hours, minutes] = classItem.time.split(':');
//     const classTime = new Date();
//     classTime.setHours(parseInt(hours), parseInt(minutes), 0);
    
//     const duration = 1; // 1 hour duration
//     const classEndTime = new Date(classTime.getTime() + duration * 60 * 60 * 1000);
//     const now = new Date();
    
//     return now >= classTime && now <= classEndTime;
//   };

//   return (
//     <Container className="py-4">
//       <Card className="mb-4">
//         <Card.Body>
//           <Card.Title className="mb-4">
//             <h1 className="h3">Interactive Timetable Creator</h1>
//           </Card.Title>
          
//           <Form.Group className="mb-4">
//             <Form.Label>Upload Your Timetable Image:</Form.Label>
//             <Form.Control 
//               type="file" 
//               accept="image/*"
//               onChange={handleImageUpload}
//             />
//             <Form.Text className="text-muted">
//               After uploading, click on the image to add subjects
//             </Form.Text>
//           </Form.Group>

//           {loading && (
//             <div className="text-center py-4">
//               <Spinner animation="border" role="status" className="mb-2" />
//               <p className="text-muted">{imageProcessingStatus}</p>
//             </div>
//           )}

//           {timetableImage && !loading && (
//             <div className="mb-4">
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <h5 className="mb-0">Your Timetable</h5>
//                 {isAddingSubjects && (
//                   <button 
//                     className="btn btn-success btn-sm"
//                     onClick={finishAddingSubjects}
//                   >
//                     Finish Adding Subjects
//                   </button>
//                 )}
//               </div>
//               <div className="position-relative">
//                 <img 
//                   src={timetableImage} 
//                   alt="Timetable" 
//                   className="img-fluid rounded shadow-sm"
//                   onClick={handleImageClick}
//                   style={{ cursor: isAddingSubjects ? 'crosshair' : 'default' }}
//                 />
//                 {clickPositions.map((pos, index) => (
//                   <div
//                     key={index}
//                     className="position-absolute bg-success bg-opacity-10 border border-success rounded p-1"
//                     style={{
//                       left: `${pos.x - 5}px`,
//                       top: `${pos.y - 5}px`,
//                       width: '10px',
//                       height: '10px'
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {extractedClasses.length > 0 && (
//             <div>
//               <h5 className="mb-3">Your Schedule</h5>
//               {extractedClasses.map((classItem, index) => (
//                 <Card 
//                   key={index} 
//                   className={`mb-3 ${isCurrentClass(classItem) ? 'border-success bg-light' : ''}`}
//                 >
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-start">
//                       <div>
//                         <h6 className="mb-2">{classItem.subject}</h6>
//                         <p className="mb-1 text-muted">
//                           <small>Time: {classItem.time} (1 hour)</small>
//                         </p>
//                         <p className="mb-0 text-muted">
//                           <small>Room: {classItem.room}</small>
//                         </p>
//                       </div>
//                       {isCurrentClass(classItem) && (
//                         <span className="badge bg-success">Current Class</span>
//                       )}
//                     </div>
//                   </Card.Body>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </Card.Body>
//       </Card>

//       {notification && (
//         <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
//           <Alert 
//             variant="success" 
//             dismissible 
//             onClose={() => setNotification(null)}
//           >
//             <Alert.Heading>{notification.subject}</Alert.Heading>
//             <p className="mb-0">
//               Starts in {notification.timeUntil} minutes
//               <br />
//               Room: {notification.room}
//             </p>
//           </Alert>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default TimetableAnalyzer;
import React from 'react'

function Timetable() {
  return (
    <div>
      
    </div>
  )
}

export default Timetable
