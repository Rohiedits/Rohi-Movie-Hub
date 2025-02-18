



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';

// const YouTubeTranscriber = () => {
//   const [url, setUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [videoInfo, setVideoInfo] = useState(null);
//   const [notes, setNotes] = useState('');
//   const [generating, setGenerating] = useState(false);

//   // Function to extract video ID from YouTube URL
//   const extractVideoId = (url) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   // Function to validate YouTube URL
//   const validateYouTubeUrl = (url) => {
//     const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
//     return regex.test(url);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setVideoInfo(null);
//     setNotes('');
    
//     if (!validateYouTubeUrl(url)) {
//       setError('Please enter a valid YouTube URL');
//       return;
//     }

//     const videoId = extractVideoId(url);
//     if (!videoId) {
//       setError('Could not extract video ID from URL');
//       return;
//     }

//     setLoading(true);
//     try {
//       // In a real application, this would be an API call to your backend
//       // For demo purposes, we'll simulate the API call with a timeout
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Simulated video information
//       setVideoInfo({
//         title: 'Sample YouTube Video',
//         duration: '10:30',
//         thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
//         channel: 'Sample Channel'
//       });
      
//       setGenerating(true);
//       // Simulate note generation
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Simulated notes
//       setNotes(`Key Points from the Video:

// 1. Introduction
//    - Brief overview of the topic
//    - Main objectives discussed
//    - Speaker's background and expertise

// 2. Main Concepts
//    - Definition of key terms
//    - Important principles explained
//    - Real-world examples provided

// 3. Detailed Analysis
//    - Step-by-step breakdown of processes
//    - Critical factors highlighted
//    - Common misconceptions addressed

// 4. Practical Applications
//    - Industry use cases
//    - Implementation strategies
//    - Best practices and recommendations

// 5. Summary
//    - Key takeaways
//    - Action items
//    - Additional resources mentioned

// Additional Notes:
// - Important timestamps marked for reference
// - Related topics mentioned for further study
// - Questions addressed during presentation`);
      
//     } catch (err) {
//       setError('Failed to process video');
//     } finally {
//       setLoading(false);
//       setGenerating(false);
//     }
//   };

//   const handleCopyNotes = () => {
//     navigator.clipboard.writeText(notes);
//     alert('Notes copied to clipboard!');
//   };

//   const handleDownloadNotes = () => {
//     const element = document.createElement('a');
//     const file = new Blob([notes], {type: 'text/plain'});
//     element.href = URL.createObjectURL(file);
//     element.download = 'video_notes.txt';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   return (
//     <Container fluid className="min-vh-100 bg-light py-5">
//       <Row className="justify-content-center">
//         <Col md={10} lg={8}>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <h1 className="text-center mb-4">YouTube Video Notes Generator</h1>
              
//               {/* URL Input Form */}
//               <Form onSubmit={handleSubmit} className="mb-4">
//                 <Form.Group className="mb-3">
//                   <Form.Label>YouTube Video URL</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="https://www.youtube.com/watch?v=..."
//                     value={url}
//                     onChange={(e) => setUrl(e.target.value)}
//                     required
//                   />
//                   <Form.Text className="text-muted">
//                     Paste a YouTube video URL to generate detailed notes
//                   </Form.Text>
//                 </Form.Group>
//                 <Button 
//                   type="submit" 
//                   variant="primary" 
//                   className="w-100"
//                   disabled={loading || generating}
//                 >
//                   {loading ? (
//                     <>
//                       <Spinner
//                         as="span"
//                         animation="border"
//                         size="sm"
//                         role="status"
//                         className="me-2"
//                       />
//                       Processing video...
//                     </>
//                   ) : (
//                     'Generate Notes'
//                   )}
//                 </Button>
//               </Form>

//               {/* Error Message */}
//               {error && (
//                 <Alert variant="danger" className="mb-4">
//                   {error}
//                 </Alert>
//               )}

//               {/* Video Information */}
//               {videoInfo && (
//                 <Card className="mb-4">
//                   <Row className="g-0">
//                     <Col md={4}>
//                       <img
//                         src={videoInfo.thumbnail}
//                         alt="Video thumbnail"
//                         className="img-fluid rounded-start"
//                       />
//                     </Col>
//                     <Col md={8}>
//                       <Card.Body>
//                         <Card.Title>{videoInfo.title}</Card.Title>
//                         <Card.Text>
//                           <small className="text-muted">
//                             {videoInfo.channel} • {videoInfo.duration}
//                           </small>
//                         </Card.Text>
//                       </Card.Body>
//                     </Col>
//                   </Row>
//                 </Card>
//               )}

//               {/* Generated Notes */}
//               {generating && (
//                 <div className="text-center my-4">
//                   <Spinner animation="border" role="status" />
//                   <p className="mt-2">Generating notes...</p>
//                 </div>
//               )}

//               {notes && (
//                 <div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h4>Generated Notes</h4>
//                     <div>
//                       <Button
//                         variant="outline-primary"
//                         className="me-2"
//                         onClick={handleCopyNotes}
//                       >
//                         Copy to Clipboard
//                       </Button>
//                       <Button
//                         variant="outline-success"
//                         onClick={handleDownloadNotes}
//                       >
//                         Download Notes
//                       </Button>
//                     </div>
//                   </div>
//                   <Card className="bg-light">
//                     <Card.Body>
//                       <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
//                         {notes}
//                       </pre>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               )}
//             </Card.Body>
//           </Card>

//           {/* Footer Note */}
//           <div className="text-center mt-3">
//             <small className="text-muted">
//               This is a demo interface. For actual video transcription, you'll need to implement a backend service with speech-to-text capabilities.
//             </small>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default YouTubeTranscriber;



// //3





import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card, Alert, Tab, Tabs, Spinner } from 'react-bootstrap';

const OnlineCompiler = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Default code templates for each language
  const defaultCode = {
   
    web: `<!-- HTML, CSS, and JavaScript code here -->
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            text-align: center;
            margin-top: 50px;
        }
        .title {
            color: blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">Hello, World!</h1>
        <button onclick="showMessage()">Click Me</button>
    </div>

    <script>
        function showMessage() {
            alert('Button clicked!');
        }
    </script>
</body>
</html>`
  };

  // Language-specific settings
  const languageSettings = {
    
    web: {
      name: 'Web (HTML/CSS/JS)',
      mode: 'html',
      fileExtension: '.html'
    }
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(defaultCode[lang]);
    setOutput('');
    setError('');
  };

  // Handle code execution
  const handleExecute = async () => {
    setLoading(true);
    setError('');
    setOutput('');

    try {
      // Simulated compilation/execution delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock execution - In a real app, this would make an API call to a backend service
      if (language === 'web') {
        // For web, create an iframe with the code
        const iframe = document.createElement('iframe');
        iframe.srcdoc = code;
        const outputDiv = document.getElementById('output-frame');
        outputDiv.innerHTML = '';
        outputDiv.appendChild(iframe);
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        iframe.style.border = '1px solid #dee2e6';
      } else {
        // Mock output for other languages
        setOutput(`[Program output for ${languageSettings[language].name}]
Running code...
Hello, World!
Program completed successfully.
Execution time: 0.05s`);
      }
    } catch (err) {
      setError('Error executing code. Please check your syntax and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle code download
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code${languageSettings[language].fileExtension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        <Col md={12} lg={10}>
          <Card className="shadow-sm">
            <Card.Body>
              <h1 className="text-center mb-4">Online Code Compiler</h1>

              <Tabs
                activeKey={language}
                onSelect={handleLanguageChange}
                className="mb-3"
              >
                {/* <Tab eventKey="python" title="Python" />
                <Tab eventKey="cpp" title="C++" />
                <Tab eventKey="java" title="Java" /> */}
                <Tab eventKey="web" title="Web (HTML/CSS/JS)" />
              </Tabs>

              <Row className="mb-3">
                <Col>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">Code Editor</h5>
                    <div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        onClick={handleDownload}
                      >
                        Download Code
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleExecute}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              className="me-2"
                            />
                            Running...
                          </>
                        ) : (
                          'Run Code'
                        )}
                      </Button>
                    </div>
                  </div>
                  <Form.Control
                    as="textarea"
                    rows={15}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="font-monospace"
                    style={{ resize: 'vertical' }}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <h5>Output</h5>
                  {error && (
                    <Alert variant="danger" className="mb-3">
                      {error}
                    </Alert>
                  )}
                  {language === 'web' ? (
                    <div id="output-frame" className="border rounded p-2 bg-light">
                      {/* Web output will be rendered here */}
                    </div>
                  ) : (
                    <Form.Control
                      as="textarea"
                      rows={6}
                      value={output}
                      readOnly
                      className="font-monospace bg-light"
                    />
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="text-center mt-3">
            <small className="text-muted">
              This is a demo Web compiler
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OnlineCompiler;

