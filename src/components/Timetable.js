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
// import React from 'react'

// function Timetable() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Timetable



// import { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { Clock, ChefHat, Camera, Plus, X } from "lucide-react";
// import { toast } from "sonner";

// interface Recipe {
//   title: string;
//   description: string;
//   prepTime: string;
//   ingredients: string[];
//   instructions: string[];
//   mediaUrl?: string;
// }

// const Index = () => {
//   const [ingredients, setIngredients] = useState<string[]>([]);
//   const [newIngredient, setNewIngredient] = useState("");
//   const [mediaFile, setMediaFile] = useState<File | null>(null);
//   const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);

//   // Mock recipe generation based on ingredients
//   const generateRecipe = () => {
//     if (ingredients.length < 2) {
//       toast.error("Please add at least 2 ingredients");
//       return;
//     }

//     // This is a mock recipe generation - in a real app, this would call an API
//     const mockRecipes: Recipe[] = [
//       {
//         title: "Quick Protein Stir-Fry",
//         description: "A healthy and quick meal using your available ingredients",
//         prepTime: "20 mins",
//         ingredients: ingredients,
//         instructions: [
//           "Heat a large pan over medium-high heat",
//           "Prepare all ingredients by chopping them into even sizes",
//           "Cook proteins first until golden brown",
//           "Add vegetables and stir-fry until tender-crisp",
//           "Season with salt and pepper to taste",
//           "Serve hot"
//         ]
//       },
//       {
//         title: "Simple Protein Bowl",
//         description: "Nutritious bowl combining your ingredients",
//         prepTime: "15 mins",
//         ingredients: ingredients,
//         instructions: [
//           "Prepare all ingredients",
//           "If using grains, cook them according to package instructions",
//           "Arrange ingredients in sections in a bowl",
//           "Add any dressings or seasonings",
//           "Mix before eating"
//         ]
//       }
//     ];

//     // Randomly select one recipe
//     const randomRecipe = mockRecipes[Math.floor(Math.random() * mockRecipes.length)];
    
//     // Add the media URL if one was uploaded
//     if (mediaFile) {
//       randomRecipe.mediaUrl = URL.createObjectURL(mediaFile);
//     }

//     setGeneratedRecipe(randomRecipe);
//     toast.success("Recipe generated successfully!");
//   };

//   const addIngredient = () => {
//     if (newIngredient.trim()) {
//       if (ingredients.includes(newIngredient.trim())) {
//         toast.error("This ingredient is already in your list");
//         return;
//       }
//       setIngredients([...ingredients, newIngredient.trim()]);
//       setNewIngredient("");
//       toast.success("Ingredient added!");
//     }
//   };

//   const removeIngredient = (index: number) => {
//     setIngredients(ingredients.filter((_, i) => i !== index));
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: {
//       'image/*': ['.png', '.jpg', '.jpeg'],
//       'video/*': ['.mp4', '.mov']
//     },
//     maxFiles: 1,
//     onDrop: (acceptedFiles) => {
//       if (acceptedFiles.length > 0) {
//         setMediaFile(acceptedFiles[0]);
//         toast.success("Media file uploaded!");
//       }
//     }
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-gray-900">Recipe Generator</h1>
//           <p className="mt-2 text-lg text-gray-600">
//             Enter your ingredients and let's create something delicious!
//           </p>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Input Section */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-semibold mb-4">Your Ingredients</h2>
              
//               <div className="flex gap-2 mb-4">
//                 <input
//                   type="text"
//                   value={newIngredient}
//                   onChange={(e) => setNewIngredient(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && addIngredient()}
//                   placeholder="Add an ingredient"
//                   className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <button
//                   onClick={addIngredient}
//                   className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
//                 >
//                   <Plus className="w-5 h-5" />
//                 </button>
//               </div>

//               <div className="space-y-2">
//                 {ingredients.map((ingredient, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg"
//                   >
//                     <span>{ingredient}</span>
//                     <button
//                       onClick={() => removeIngredient(index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <X className="w-4 h-4" />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-semibold mb-4">Add Photo/Video</h2>
//               <div
//                 {...getRootProps()}
//                 className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-green-500 transition-colors"
//               >
//                 <input {...getInputProps()} />
//                 <Camera className="w-12 h-12 mx-auto text-gray-400 mb-2" />
//                 <p className="text-gray-600">
//                   Drop your photo/video here, or click to select
//                 </p>
//                 {mediaFile && (
//                   <p className="mt-2 text-green-600">
//                     File uploaded: {mediaFile.name}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <button
//               onClick={generateRecipe}
//               className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
//             >
//               <ChefHat className="w-5 h-5" />
//               Generate Recipe
//             </button>
//           </div>

//           {/* Recipe Display Section */}
//           <div>
//             {generatedRecipe ? (
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-3xl font-bold mb-4">{generatedRecipe.title}</h2>
//                 <p className="text-gray-600 mb-6">{generatedRecipe.description}</p>

//                 {generatedRecipe.mediaUrl && (
//                   <div className="mb-6 rounded-lg overflow-hidden">
//                     {mediaFile?.type.startsWith('video/') ? (
//                       <video 
//                         src={generatedRecipe.mediaUrl} 
//                         controls 
//                         className="w-full h-auto"
//                       />
//                     ) : (
//                       <img
//                         src={generatedRecipe.mediaUrl}
//                         alt="Recipe"
//                         className="w-full h-auto"
//                       />
//                     )}
//                   </div>
//                 )}

//                 <div className="flex items-center mb-6">
//                   <Clock className="w-5 h-5 text-gray-500 mr-2" />
//                   <span>{generatedRecipe.prepTime}</span>
//                 </div>

//                 <div className="grid gap-6">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
//                     <ul className="space-y-2">
//                       {generatedRecipe.ingredients.map((ingredient, index) => (
//                         <li key={index} className="flex items-start">
//                           <span className="mr-2">•</span>
//                           {ingredient}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-semibold mb-3">Instructions</h3>
//                     <ol className="space-y-3">
//                       {generatedRecipe.instructions.map((instruction, index) => (
//                         <li key={index} className="flex">
//                           <span className="font-bold mr-2">{index + 1}.</span>
//                           {instruction}
//                         </li>
//                       ))}
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//                 <ChefHat className="w-16 h-16 mx-auto text-gray-400 mb-4" />
//                 <h2 className="text-2xl font-semibold text-gray-600">
//                   Add ingredients and generate your recipe!
//                 </h2>
//                 <p className="text-gray-500 mt-2">
//                   Your recipe will appear here once generated
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <footer className="bg-gray-50 mt-12">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <p className="text-center text-gray-600">
//             © 2024 Recipe Generator. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;


//interviewer-1

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Button, Card, Form, ProgressBar, Modal } from 'react-bootstrap';

// const AiInterviewApp = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [isStarted, setIsStarted] = useState(false);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [userAnswer, setUserAnswer] = useState('');
//   const [showInstructions, setShowInstructions] = useState(false);

//   // Sample interview questions
//   const questions = [
//     {
//       id: 1,
//       question: "Tell me about yourself and your background.",
//       expectedPoints: ["Professional experience", "Education", "Relevant skills"]
//     },
//     {
//       id: 2,
//       question: "What is your greatest professional achievement?",
//       expectedPoints: ["Specific example", "Measurable results", "Skills demonstrated"]
//     },
//     {
//       id: 3,
//       question: "Where do you see yourself in 5 years?",
//       expectedPoints: ["Career goals", "Growth plans", "Realistic ambitions"]
//     }
//   ];

//   const handleStart = () => {
//     setIsStarted(true);
//   };

//   const handleSubmitAnswer = () => {
//     if (userAnswer.trim()) {
//       setAnswers([...answers, userAnswer]);
//       setUserAnswer('');
      
//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion(currentQuestion + 1);
//       } else {
//         setShowFeedback(true);
//       }
//     }
//   };

//   const getFeedback = (answer) => {
//     // Simple feedback generation based on answer length and keyword matching
//     if (answer.length < 50) {
//       return "Try to provide more detailed answers. Elaborate on your experiences.";
//     } else if (answer.length > 200) {
//       return "Good detailed answer! You've provided substantial information.";
//     }
//     return "Your answer is concise. Consider adding specific examples.";
//   };

//   const resetInterview = () => {
//     setCurrentQuestion(0);
//     setAnswers([]);
//     setIsStarted(false);
//     setShowFeedback(false);
//     setUserAnswer('');
//   };

//   return (
//     <Container fluid className="min-vh-100 bg-light py-4">
//       {/* Header */}
//       <Row className="mb-4">
//         <Col>
//           <h1 className="text-center text-primary">AI Mock Interview Assistant</h1>
//           <p className="text-center text-muted">Practice your interview skills with our AI interviewer</p>
//         </Col>
//       </Row>

//       {/* Main Content */}
//       <Row className="justify-content-center">
//         <Col md={8}>
//           {!isStarted ? (
//             <Card className="text-center p-4 shadow">
//               <Card.Body>
//                 <Card.Title className="mb-4">Welcome to Your Mock Interview</Card.Title>
//                 <Card.Text>
//                   Ready to practice your interview skills? Our AI interviewer will ask you common interview questions
//                   and provide feedback on your responses.
//                 </Card.Text>
//                 <Button 
//                   variant="primary" 
//                   size="lg" 
//                   onClick={handleStart}
//                   className="me-2"
//                 >
//                   Start Interview
//                 </Button>
//                 <Button 
//                   variant="outline-primary" 
//                   size="lg" 
//                   onClick={() => setShowInstructions(true)}
//                 >
//                   View Instructions
//                 </Button>
//               </Card.Body>
//             </Card>
//           ) : (
//             <Card className="shadow">
//               <Card.Body>
//                 {!showFeedback ? (
//                   <>
//                     <ProgressBar 
//                       now={(currentQuestion + 1) * (100 / questions.length)} 
//                       className="mb-4"
//                     />
//                     <h4 className="mb-4">Question {currentQuestion + 1} of {questions.length}</h4>
//                     <p className="h5 mb-4">{questions[currentQuestion].question}</p>
//                     <Form>
//                       <Form.Group className="mb-3">
//                         <Form.Control
//                           as="textarea"
//                           rows={5}
//                           value={userAnswer}
//                           onChange={(e) => setUserAnswer(e.target.value)}
//                           placeholder="Type your answer here..."
//                         />
//                       </Form.Group>
//                       <Button 
//                         variant="primary" 
//                         onClick={handleSubmitAnswer}
//                         disabled={!userAnswer.trim()}
//                       >
//                         {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Interview'}
//                       </Button>
//                     </Form>
//                   </>
//                 ) : (
//                   <div>
//                     <h3 className="mb-4">Interview Feedback</h3>
//                     {answers.map((answer, index) => (
//                       <div key={index} className="mb-4">
//                         <h5>Question {index + 1}: {questions[index].question}</h5>
//                         <p className="text-muted">Your Answer:</p>
//                         <p>{answer}</p>
//                         <Card className="bg-light">
//                           <Card.Body>
//                             <p className="mb-0"><strong>Feedback:</strong> {getFeedback(answer)}</p>
//                           </Card.Body>
//                         </Card>
//                       </div>
//                     ))}
//                     <Button variant="primary" onClick={resetInterview}>
//                       Start New Interview
//                     </Button>
//                   </div>
//                 )}
//               </Card.Body>
//             </Card>
//           )}
//         </Col>
//       </Row>

//       {/* Instructions Modal */}
//       <Modal show={showInstructions} onHide={() => setShowInstructions(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>How to Use the Mock Interview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ol className="ps-3">
//             <li className="mb-2">Click 'Start Interview' to begin your session.</li>
//             <li className="mb-2">You'll be presented with common interview questions one at a time.</li>
//             <li className="mb-2">Take your time to think and type your response in the text area.</li>
//             <li className="mb-2">Click 'Next Question' to proceed to the next question.</li>
//             <li className="mb-2">After completing all questions, you'll receive AI-generated feedback on your responses.</li>
//             <li>You can start a new interview session at any time.</li>
//           </ol>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowInstructions(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default AiInterviewApp;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Form, ProgressBar, Modal } from 'react-bootstrap';

const AiInterviewApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [interviewType, setInterviewType] = useState('');

  // General HR questions
  const generalQuestions = [
    {
      id: 1,
      question: "Tell me about yourself and your background.",
      expectedPoints: ["Professional experience", "Education", "Relevant skills"]
    },
    {
      id: 2,
      question: "What is your greatest professional achievement?",
      expectedPoints: ["Specific example", "Measurable results", "Skills demonstrated"]
    },
    {
      id: 3,
      question: "Where do you see yourself in 5 years?",
      expectedPoints: ["Career goals", "Growth plans", "Realistic ambitions"]
    },
    {
      id: 4,
      question: "Why did you choose this career path?",
      expectedPoints: ["Motivation", "Passion", "Goals"]
    },
    {
      id: 5,
      question: "How do you handle pressure or stressful situations?",
      expectedPoints: ["Coping mechanisms", "Examples", "Problem-solving approach"]
    }
  ];

  // Technical questions by track
  const technicalQuestions = {
    python: [
      {
        id: 1,
        question: "Explain list comprehension in Python with an example.",
        expectedPoints: ["Syntax", "Use cases", "Example"]
      },
      {
        id: 2,
        question: "What are decorators in Python and how do they work?",
        expectedPoints: ["Function decorators", "Class decorators", "Real-world usage"]
      },
      {
        id: 3,
        question: "Write a function to check if a string is a palindrome.",
        expectedPoints: ["Algorithm", "Edge cases", "Optimization"]
      },
      {
        id: 4,
        question: "Explain the difference between deep copy and shallow copy.",
        expectedPoints: ["Definition", "Implementation", "Use cases"]
      },
      {
        id: 5,
        question: "How does memory management work in Python?",
        expectedPoints: ["Garbage collection", "Reference counting", "Memory allocation"]
      },
      {
        id: 6,
        question: "What are generators and how do they differ from regular functions?",
        expectedPoints: ["Yield keyword", "Memory efficiency", "Iterator protocol"]
      },
      {
        id: 7,
        question: "Explain multithreading vs multiprocessing in Python.",
        expectedPoints: ["GIL", "Use cases", "Implementation"]
      },
      {
        id: 8,
        question: "How would you handle exceptions in Python?",
        expectedPoints: ["Try-except blocks", "Custom exceptions", "Best practices"]
      },
      {
        id: 9,
        question: "Explain the concept of duck typing in Python.",
        expectedPoints: ["Definition", "Benefits", "Examples"]
      },
      {
        id: 10,
        question: "What are context managers and when would you use them?",
        expectedPoints: ["With statement", "Implementation", "Resource management"]
      }
    ],
    java: [
      {
        id: 1,
        question: "Explain the difference between abstract classes and interfaces.",
        expectedPoints: ["Implementation", "Use cases", "Examples"]
      },
      {
        id: 2,
        question: "What is the difference between ArrayList and LinkedList?",
        expectedPoints: ["Implementation", "Performance", "Use cases"]
      },
      {
        id: 3,
        question: "Explain the concept of Java garbage collection.",
        expectedPoints: ["Memory management", "GC types", "Best practices"]
      },
      {
        id: 4,
        question: "What are the different types of exceptions in Java?",
        expectedPoints: ["Checked vs Unchecked", "Exception hierarchy", "Handling"]
      },
      {
        id: 5,
        question: "Explain the concept of multithreading in Java.",
        expectedPoints: ["Thread lifecycle", "Synchronization", "Thread safety"]
      },
      {
        id: 6,
        question: "What are Java 8 streams and how do they work?",
        expectedPoints: ["Stream operations", "Lambda expressions", "Use cases"]
      },
      {
        id: 7,
        question: "Explain the singleton design pattern in Java.",
        expectedPoints: ["Implementation", "Thread safety", "Use cases"]
      },
      {
        id: 8,
        question: "What is the difference between final, finally, and finalize?",
        expectedPoints: ["Usage", "Implementation", "Best practices"]
      },
      {
        id: 9,
        question: "Explain dependency injection in Java.",
        expectedPoints: ["Types", "Benefits", "Spring framework"]
      },
      {
        id: 10,
        question: "What are Java annotations and how are they used?",
        expectedPoints: ["Built-in annotations", "Custom annotations", "Use cases"]
      }
    ],
    webdev: [
      {
        id: 1,
        question: "Explain the box model in CSS.",
        expectedPoints: ["Content", "Padding", "Border", "Margin"]
      },
      {
        id: 2,
        question: "What is the difference between let, const, and var in JavaScript?",
        expectedPoints: ["Scope", "Hoisting", "Use cases"]
      },
      {
        id: 3,
        question: "Explain the concept of React hooks.",
        expectedPoints: ["useState", "useEffect", "Custom hooks"]
      },
      {
        id: 4,
        question: "What is REST API and what are its principles?",
        expectedPoints: ["HTTP methods", "Statelessness", "Resource-based"]
      },
      {
        id: 5,
        question: "Explain the concept of responsive web design.",
        expectedPoints: ["Media queries", "Flexbox", "Grid"]
      },
      {
        id: 6,
        question: "What is Cross-Origin Resource Sharing (CORS)?",
        expectedPoints: ["Same-origin policy", "Headers", "Implementation"]
      },
      {
        id: 7,
        question: "Explain the virtual DOM in React.",
        expectedPoints: ["Concept", "Benefits", "Reconciliation"]
      },
      {
        id: 8,
        question: "What are promises in JavaScript and how do they work?",
        expectedPoints: ["Async operations", "Error handling", "Chaining"]
      },
      {
        id: 9,
        question: "Explain the concept of CSS specificity.",
        expectedPoints: ["Selectors", "Inheritance", "Calculation"]
      },
      {
        id: 10,
        question: "What is webpack and why is it used?",
        expectedPoints: ["Bundling", "Loaders", "Plugins"]
      }
    ]
  };

  const getQuestions = () => {
    if (interviewType === 'general') {
      return generalQuestions;
    } else if (interviewType === 'technical' && selectedTrack) {
      return technicalQuestions[selectedTrack];
    }
    return [];
  };

  const handleStart = () => {
    if (interviewType) {
      setIsStarted(true);
    }
  };

  const handleSubmitAnswer = () => {
    if (userAnswer.trim()) {
      setAnswers([...answers, userAnswer]);
      setUserAnswer('');
      
      if (currentQuestion < getQuestions().length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowFeedback(true);
      }
    }
  };

  const getFeedback = (answer, question) => {
    // Enhanced feedback generation
    const feedback = [];
    
    // Length-based feedback
    if (answer.length < 100) {
      feedback.push("Try to provide more detailed answers. Elaborate on your experiences.");
    } else if (answer.length > 300) {
      feedback.push("Good detailed answer! You've provided substantial information.");
    }

    // Content-based feedback
    const expectedPoints = question.expectedPoints || [];
    const pointsCovered = expectedPoints.filter(point => 
      answer.toLowerCase().includes(point.toLowerCase())
    ).length;

    if (pointsCovered === expectedPoints.length) {
      feedback.push("Excellent! You've covered all the key points.");
    } else {
      feedback.push(`Consider including information about: ${expectedPoints.join(', ')}`);
    }

    return feedback.join(' ');
  };

  const resetInterview = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsStarted(false);
    setShowFeedback(false);
    setUserAnswer('');
    setSelectedTrack('');
    setInterviewType('');
  };

  return (
    <Container fluid className="min-vh-100 bg-light py-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-primary">AI Mock Interview Assistant</h1>
          <p className="text-center text-muted">Practice your interview skills with our AI interviewer</p>
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="justify-content-center">
        <Col md={8}>
          {!isStarted ? (
            <Card className="text-center p-4 shadow">
              <Card.Body>
                <Card.Title className="mb-4">Welcome to Your Mock Interview</Card.Title>
                <Form className="mb-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Select Interview Type</Form.Label>
                    <Form.Select 
                      value={interviewType}
                      onChange={(e) => setInterviewType(e.target.value)}
                    >
                      <option value="">Choose type...</option>
                      <option value="general">General HR Interview</option>
                      <option value="technical">Technical Interview</option>
                    </Form.Select>
                  </Form.Group>

                  {interviewType === 'technical' && (
                    <Form.Group className="mb-3">
                      <Form.Label>Select Technical Track</Form.Label>
                      <Form.Select
                        value={selectedTrack}
                        onChange={(e) => setSelectedTrack(e.target.value)}
                      >
                        <option value="">Choose track...</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="webdev">Web Development</option>
                      </Form.Select>
                    </Form.Group>
                  )}
                </Form>

                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleStart}
                  className="me-2"
                  disabled={!interviewType || (interviewType === 'technical' && !selectedTrack)}
                >
                  Start Interview
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  onClick={() => setShowInstructions(true)}
                >
                  View Instructions
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Card className="shadow">
              <Card.Body>
                {!showFeedback ? (
                  <>
                    <ProgressBar 
                      now={(currentQuestion + 1) * (100 / getQuestions().length)} 
                      className="mb-4"
                    />
                    <h4 className="mb-4">Question {currentQuestion + 1} of {getQuestions().length}</h4>
                    <p className="h5 mb-4">{getQuestions()[currentQuestion].question}</p>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows={5}
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="Type your answer here..."
                        />
                      </Form.Group>
                      <Button 
                        variant="primary" 
                        onClick={handleSubmitAnswer}
                        disabled={!userAnswer.trim()}
                      >
                        {currentQuestion < getQuestions().length - 1 ? 'Next Question' : 'Finish Interview'}
                      </Button>
                    </Form>
                  </>
                ) : (
                  <div>
                    <h3 className="mb-4">Interview Feedback</h3>
                    {answers.map((answer, index) => (
                      <div key={index} className="mb-4">
                        <h5>Question {index + 1}: {getQuestions()[index].question}</h5>
                        <p className="text-muted">Your Answer:</p>
                        <p>{answer}</p>
                        <Card className="bg-light">
                          <Card.Body>
                            <p className="mb-0"><strong>Feedback:</strong> {getFeedback(answer, getQuestions()[index])}</p>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                    <Button variant="primary" onClick={resetInterview}>
                      Start New Interview
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/* Instructions Modal */}
      <Modal show={showInstructions} onHide={() => setShowInstructions(false)}>
        <Modal.Header closeButton>
          <Modal.Title>How to Use the Mock Interview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol className="ps-3">
            <li className="mb-2">Select your interview type (General HR or Technical)</li>
            <li className="mb-2">For technical interviews, choose your preferred track (Python, Java, or Web Development)</li>
            <li className="mb-2">Click 'Start Interview' to begin your session</li>
            <li className="mb-2">Answer each question thoughtfully and completely</li>
            <li className="mb-2">Click 'Next Question' to proceed</li>
            <li className="mb-2">Review your comprehensive feedback at the end</li>
            <li>Start a new session anytime to practice different questions</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInstructions(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AiInterviewApp;