// import axios from "axios";

// const handleAIResponse = async (input) => {
//   if (!input) return;

//   const apiKey = "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";  // Replace with your API key
//   const apiUrl = "https://api.openai.com/v1/chat/completions";

//   try {
//     const response = await axios.post(
//       apiUrl,
//       {
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: input }]
//       },
//       {
//         headers: {
//           "Authorization": `Bearer ${apiKey}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     const aiText = response.data.choices[0].message.content;
//     setAiResponse(aiText);
//     speakText(aiText);
//   } catch (error) {
//     console.error("Error fetching AI response:", error);
//     setAiResponse("Sorry, I couldn't fetch the response. Please try again.");
//   }
// };
// export default handleAIResponse;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
//   const [userText, setUserText] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [isListening, setIsListening] = useState(false);
//   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//   const synth = window.speechSynthesis;
//   const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

//   // Supported Languages
//   const languageOptions = [
//     { code: "en-US", label: "English (US)" },
//     { code: "hi-IN", label: "Hindi (India)" },
//     { code: "te-IN", label: "Telugu (India)" },
//     { code: "es-ES", label: "Spanish (Spain)" },
//     { code: "fr-FR", label: "French (France)" }
//   ];

//   recognition.lang = selectedLanguage;
//   recognition.continuous = true;
//   recognition.interimResults = false;

//   useEffect(() => {
//     recognition.lang = selectedLanguage;
//   }, [selectedLanguage]);

//   // Start/Stop Speech Recognition
//   const handleStartListening = () => {
//     setIsListening(true);
//     recognition.start();
//   };

//   const handleStopListening = () => {
//     setIsListening(false);
//     recognition.stop();
//   };

//   recognition.onresult = (event) => {
//     const speechResult = event.results[event.results.length - 1][0].transcript;
//     setUserText(speechResult);
//     handleAIResponse(speechResult);
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//     setIsListening(false);
//   };

//   // Fetch AI Response from OpenAI API
//   const handleAIResponse = async (input) => {
//     if (!input) return;

//     const apiUrl = "https://api.openai.com/v1/chat/completions";

//     try {
//       const response = await axios.post(
//         apiUrl,
//         {
//           model: "gpt-3.5-turbo",
//           messages: [{ role: "user", content: input }]
//         },
//         {
//           headers: {
//             "Authorization": `Bearer ${apiKey}`,
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       const aiText = response.data.choices[0].message.content;
//       setAiResponse(aiText);
//       speakText(aiText);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setAiResponse("Sorry, I couldn't fetch the response. Please try again.");
//     }
//   };

//   // Text-to-Speech
//   const speakText = (text) => {
//     if (!text) return;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = selectedLanguage;
//     synth.speak(utterance);
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", backgroundColor: "#1a1a1a", color: "white", minHeight: "100vh" }}>
//       <h1 style={{ color: "#4CAF50" }}>AI Tutor with Voice & OpenAI</h1>

//       {/* Language Selection */}
//       <div style={{ marginBottom: "20px" }}>
//         <label style={{ marginRight: "10px", fontSize: "18px" }}>Select Language:</label>
//         <select 
//           value={selectedLanguage} 
//           onChange={(e) => setSelectedLanguage(e.target.value)} 
//           style={{ padding: "8px", fontSize: "16px", borderRadius: "5px" }}
//         >
//           {languageOptions.map((lang) => (
//             <option key={lang.code} value={lang.code}>
//               {lang.label}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Speech Control Buttons */}
//       <button 
//         onClick={isListening ? handleStopListening : handleStartListening}
//         style={{
//           padding: "12px 20px",
//           fontSize: "18px",
//           backgroundColor: isListening ? "red" : "#4CAF50",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "20px"
//         }}
//       >
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>

//       {/* User Input */}
//       <div style={{ marginTop: "20px" }}>
//         <h3>User Input:</h3>
//         <textarea 
//           value={userText} 
//           onChange={(e) => setUserText(e.target.value)} 
//           rows="4" 
//           cols="50" 
//           placeholder="Type or speak your question..."
//           style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", width: "60%" }}
//         />
//         <button 
//           onClick={() => handleAIResponse(userText)} 
//           style={{
//             marginLeft: "10px",
//             padding: "10px 15px",
//             fontSize: "16px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer"
//           }}
//         >
//           Submit
//         </button>
//       </div>

//       {/* AI Response */}
//       <div style={{ marginTop: "20px", padding: "20px", borderRadius: "10px", backgroundColor: "#333", width: "60%", margin: "auto" }}>
//         <h3>AI Response:</h3>
//         <p style={{ fontSize: "18px", color: "#fff" }}>{aiResponse}</p>
//       </div>
//     </div>
//   );
// };

// export default App;

//gemini

// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useState } from "react";

// const apiKey = "AIzaSyBYl0AFcxQjvADa64ImZ0AR0J0Q2bLt7O4";  // Replace with your actual API key

// const AIComponent = () => {
//   const [input, setInput] = useState("");
//   const [aiResponse, setAiResponse] = useState("");

//   const handleAIResponse = async () => {
//     if (!input) return;

//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     try {
//       const result = await model.generateContent(input);
//       const response = result.response.text();

//       setAiResponse(response);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setAiResponse("Sorry, I couldn't fetch the response. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Gemini AI Tutor</h2>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask something..."
//       />
//       <button onClick={handleAIResponse}>Get AI Response</button>
//       <p><strong>AI Says:</strong> {aiResponse}</p>
//     </div>
//   );
// };

// export default AIComponent;



//3rd gemini
// import { useState, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = "AIzaSyBYl0AFcxQjvADa64ImZ0AR0J0Q2bLt7O4"; // Replace with your actual API key

// const AITutor = () => {
//   const [input, setInput] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [listening, setListening] = useState(false);
  
//   useEffect(() => {
//     if ("speechSynthesis" in window) {
//       window.speechSynthesis.cancel();
//     }
//   }, []);

//   const handleAIResponse = async () => {
//     if (!input) return;
//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     try {
//       const result = await model.generateContent(input);
//       const response = result.response.text();
//       setAiResponse(response);
//       speakText(response);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setAiResponse("Sorry, I couldn't fetch the response. Please try again.");
//     }
//   };

//   const speakText = (text) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = "en-US";
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   const startListening = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }
//     const recognition = new webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);
//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };
//     recognition.start();
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
//       <h2 className="text-3xl font-bold mb-4">Gemini AI Tutor</h2>
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           className="p-2 rounded bg-gray-800 border border-gray-600 text-white"
//           placeholder="Ask something..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={handleAIResponse}>Get AI Response</button>
//         <button className="p-2 bg-green-600 hover:bg-green-700 rounded" onClick={startListening}>
//           {listening ? "Listening..." : "🎙️ Voice Input"}
//         </button>
//       </div>
//       <p className="text-xl mt-4 p-4 bg-gray-800 rounded-lg w-full max-w-2xl">{aiResponse}</p>
//     </div>
//   );
// };

// export default AITutor;


//4th gemini


// import { useState, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = "AIzaSyBYl0AFcxQjvADa64ImZ0AR0J0Q2bLt7O4"; // Replace with your actual API key

// const AITutor = () => {
//   const [input, setInput] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [listening, setListening] = useState(false);

//   useEffect(() => {
//     if ("speechSynthesis" in window) {
//       window.speechSynthesis.cancel();
//     }
//   }, []);

//   const handleAIResponse = async () => {
//     if (!input) return;
//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     try {
//       const result = await model.generateContent(input);
//       const response = result.response.text();
//       setAiResponse(response);
//       speakText(response);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setAiResponse("Sorry, I couldn't fetch the response. Please try again.");
//     }
//   };

//   const speakText = (text) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = "en-US";
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }
//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);
//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };
//     recognition.start();
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
//       <h2 className="text-3xl font-bold mb-4 text-black">Gemini AI Tutor</h2>
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           className="p-2 rounded bg-gray-800 text-black border border-gray-600 text-white"
//           placeholder="Ask something..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={handleAIResponse}>Get AI Response</button>
//         <button className="p-2 bg-green-600 hover:bg-green-700 rounded" onClick={startListening}>
//           {listening ? "Listening..." : "🎙️ Voice Input"}
//         </button>
//       </div>
//       <p  className="text-xl text-black mt-4 p-4 bg-gray-800 rounded-lg w-full max-w-2xl">{aiResponse}</p>
//     </div>
//   );
// };

// export default AITutor;


//5th gemini
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [isListening, setIsListening] = useState(false);

//   const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const synth = window.speechSynthesis;
//   let recognition;

//   if (SpeechRecognition) {
//     recognition = new SpeechRecognition();
//     recognition.lang = selectedLanguage;
//     recognition.continuous = false;
//     recognition.interimResults = false;
//   }

//   useEffect(() => {
//     if (recognition) recognition.lang = selectedLanguage;
//   }, [selectedLanguage]);

//   const handleStartListening = () => {
//     if (!recognition) return;
//     setIsListening(true);
//     recognition.start();
//   };

//   const handleStopListening = () => {
//     if (!recognition) return;
//     setIsListening(false);
//     recognition.stop();
//   };

//   recognition.onresult = (event) => {
//     const speechResult = event.results[0][0].transcript;
//     setInputText(speechResult);
//     handleAIResponse(speechResult);
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//     setIsListening(false);
//   };

//   // Fetch AI Response from Gemini API
//   const handleAIResponse = async (input) => {
//     if (!input) return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);

//     const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";

//     try {
//       const response = await axios.post(
//         `${apiUrl}?key=${apiKey}`,
//         {
//           prompt: { text: input },
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const aiText = response.data.candidates[0]?.output || "No response from AI.";
//       setMessages((prev) => [...prev, { text: aiText, sender: "ai" }]);
//       speakText(aiText);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages((prev) => [...prev, { text: "Error fetching AI response.", sender: "ai" }]);
//     }
//   };

//   // AI Voice Output
//   const speakText = (text) => {
//     if (!text) return;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = selectedLanguage;
//     synth.speak(utterance);
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", backgroundColor: "#1a1a1a", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1 style={{ color: "#4CAF50" }}>AI Tutor (Google Gemini)</h1>

//       {/* Chat Container */}
//       <div style={{ width: "80%", maxWidth: "600px", height: "60vh", overflowY: "auto", backgroundColor: "#333", padding: "10px", borderRadius: "10px" }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{
//             textAlign: msg.sender === "user" ? "right" : "left",
//             marginBottom: "10px"
//           }}>
//             <span style={{
//               display: "inline-block",
//               padding: "10px",
//               borderRadius: "10px",
//               backgroundColor: msg.sender === "user" ? "#4CAF50" : "#555",
//               color: "white",
//               maxWidth: "80%"
//             }}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Input & Controls */}
//       <div style={{ width: "80%", maxWidth: "600px", marginTop: "10px", display: "flex", gap: "10px" }}>
//         <button onClick={isListening ? handleStopListening : handleStartListening} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", backgroundColor: isListening ? "red" : "#4CAF50", color: "white", border: "none" }}>
//           {isListening ? "Stop Listening" : "🎤 Voice Input"}
//         </button>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           placeholder="Type or speak your question..."
//           style={{ flexGrow: 1, padding: "10px", borderRadius: "5px", border: "none" }}
//         />
//         <button onClick={() => handleAIResponse(inputText)} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", backgroundColor: "#2196F3", color: "white", border: "none" }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
//6th gemini



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [isListening, setIsListening] = useState(false);

//   const GEMINI_API_KEY = "AIzaSyBYl0AFcxQjvADa64ImZ0AR0J0Q2bLt7O4"; // 🔥 Replace this with your API key

//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const synth = window.speechSynthesis;
//   let recognition;

//   if (SpeechRecognition) {
//     recognition = new SpeechRecognition();
//     recognition.lang = selectedLanguage;
//     recognition.continuous = false;
//     recognition.interimResults = false;
//   }

//   useEffect(() => {
//     if (recognition) recognition.lang = selectedLanguage;
//   }, [selectedLanguage]);

//   const handleStartListening = () => {
//     if (!recognition) return;
//     setIsListening(true);
//     recognition.start();
//   };

//   const handleStopListening = () => {
//     if (!recognition) return;
//     setIsListening(false);
//     recognition.stop();
//   };

//   recognition.onresult = (event) => {
//     const speechResult = event.results[0][0].transcript;
//     setInputText(speechResult);
//     handleAIResponse(speechResult);
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//     setIsListening(false);
//   };

//   // Fetch AI Response from Gemini API
//   const handleAIResponse = async (input) => {
//     if (!input) return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`;

//     try {
//       const response = await axios.post(
//         apiUrl,
//         {
//           prompt: { text: input },
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const aiText = response.data.candidates?.[0]?.output || "No response from AI.";
//       setMessages((prev) => [...prev, { text: aiText, sender: "ai" }]);
//       speakText(aiText);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages((prev) => [...prev, { text: "Error fetching AI response.", sender: "ai" }]);
//     }
//   };

//   // AI Voice Output
//   const speakText = (text) => {
//     if (!text) return;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = selectedLanguage;
//     synth.speak(utterance);
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", backgroundColor: "#1a1a1a", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1 style={{ color: "#4CAF50" }}>AI Tutor (Google Gemini)</h1>

//       {/* Chat Container */}
//       <div style={{ width: "80%", maxWidth: "600px", height: "60vh", overflowY: "auto", backgroundColor: "#333", padding: "10px", borderRadius: "10px" }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{
//             textAlign: msg.sender === "user" ? "right" : "left",
//             marginBottom: "10px"
//           }}>
//             <span style={{
//               display: "inline-block",
//               padding: "10px",
//               borderRadius: "10px",
//               backgroundColor: msg.sender === "user" ? "#4CAF50" : "#555",
//               color: "white",
//               maxWidth: "80%"
//             }}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Input & Controls */}
//       <div style={{ width: "80%", maxWidth: "600px", marginTop: "10px", display: "flex", gap: "10px" }}>
//         <button onClick={isListening ? handleStopListening : handleStartListening} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", backgroundColor: isListening ? "red" : "#4CAF50", color: "white", border: "none" }}>
//           {isListening ? "Stop Listening" : "🎤 Voice Input"}
//         </button>
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           placeholder="Type or speak your question..."
//           style={{ flexGrow: 1, padding: "10px", borderRadius: "5px", border: "none" }}
//         />
//         <button onClick={() => handleAIResponse(inputText)} style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", backgroundColor: "#2196F3", color: "white", border: "none" }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// 7th time
// import { useState, useEffect } from "react";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = "AIzaSyBYl0AFcxQjvADa64ImZ0AR0J0Q2bLt7O4"; // 🔹 Replace this with your actual API key

// const AITutor = () => {
//   const [input, setInput] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [listening, setListening] = useState(false);

//   useEffect(() => {
//     if ("speechSynthesis" in window) {
//       window.speechSynthesis.cancel(); // 🔹 Stop any previous speech output
//     }
//   }, []);

//   // 🔹 Function to get AI Response
//   const handleAIResponse = async () => {
//     if (!input.trim()) {
//       setAiResponse("Please ask a question.");
//       return;
//     }

//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     try {
//       const result = await model.generateContent(input);
//       const response = result.response.text();
//       setAiResponse(response);
//       speakText(response); // 🔹 Convert AI response to speech
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setAiResponse(`Error: ${error.message || "Could not fetch response. Try again!"}`);
//     }
//   };

//   // 🔹 Function to Convert AI Text Response to Speech
//   const speakText = (text) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = "en-US"; // You can change to other languages like "hi-IN" for Hindi
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   // 🔹 Function to Start Voice Recognition
//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US"; // You can change to other languages
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);
//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setAiResponse("Voice recognition error. Please try again.");
//       setListening(false);
//     };
//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };

//     recognition.start();
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
//       <h2 className="text-3xl font-bold mb-4">Gemini AI Tutor 🤖</h2>
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           className="p-2 rounded bg-gray-800 border border-gray-600 text-white w-80"
//           placeholder="Ask something..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={handleAIResponse}>
//           Get AI Response
//         </button>
//         <button className="p-2 bg-green-600 hover:bg-green-700 rounded" onClick={startListening}>
//           {listening ? "Listening..." : "🎙️ Voice Input"}
//         </button>
//       </div>
//       <p className="text-xl mt-4 p-4 bg-gray-800 rounded-lg w-full max-w-2xl">{aiResponse}</p>
//     </div>
//   );
// };

// export default AITutor;

//8th gemini


// import { useState, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = "AIzaSyBYl0AFcxQjvADa64ImZ0AR0J0Q2bLt7O4"; // 🔹 Replace this with your actual API key

// const AITutor = () => {
//   const [input, setInput] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [listening, setListening] = useState(false);

//   useEffect(() => {
//     if ("speechSynthesis" in window) {
//       window.speechSynthesis.cancel(); // 🔹 Stop any previous speech output
//     }
//   }, []);

//   // 🔹 Function to get AI Response
//   const handleAIResponse = async () => {
//     if (!input.trim()) {
//       setAiResponse("Please ask a question.");
//       return;
//     }

//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     try {
//       const result = await model.generateContent(input);
//       const response = result.response.text();
//       setAiResponse(response);
//       speakText(response); // 🔹 Convert AI response to speech
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setAiResponse(`Error: ${error.message || "Could not fetch response. Try again!"}`);
//     }
//   };

//   // 🔹 Function to Convert AI Text Response to Speech
//   const speakText = (text) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang = "en-US"; // You can change to other languages like "hi-IN" for Hindi
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   // 🔹 Function to Start Voice Recognition
//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Your browser does not support speech recognition.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US"; // You can change to other languages
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onstart = () => setListening(true);
//     recognition.onend = () => setListening(false);
//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setAiResponse("Voice recognition error. Please try again.");
//       setListening(false);
//     };
//     recognition.onresult = (event) => {
//       setInput(event.results[0][0].transcript);
//     };

//     recognition.start();
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
//       <h2 className="text-3xl font-bold mb-4">Gemini AI Tutor 🤖</h2>
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           className="p-2 rounded bg-gray-800 border text-black border-gray-600 text-white w-80"
//           placeholder="Ask something..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={handleAIResponse}>
//           Get AI Response
//         </button>
//         <button className="p-2 bg-green-600 hover:bg-green-700 rounded" onClick={startListening}>
//           {listening ? "Listening..." : "🎙️ Voice Input"}
//         </button>
//       </div>
//       <p className="text-xl text-black mt-4 p-4 bg-gray-800 rounded-lg w-full max-w-2xl">{aiResponse}</p>
//     </div>
//   );
// };

// export default AITutor;


//9th gemini


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en-US");
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [isListening, setIsListening] = useState(false);

//   const GEMINI_API_KEY = "AIzaSyAWfKvAV1155U_EkxIN-EChnCEDjN9lLQU"; // 🔥 Replace this with your actual API key

//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const synth = window.speechSynthesis;
//   let recognition;

//   if (SpeechRecognition) {
//     recognition = new SpeechRecognition();
//     recognition.lang = selectedLanguage;
//     recognition.continuous = false;
//     recognition.interimResults = false;
//   }

//   useEffect(() => {
//     if (recognition) recognition.lang = selectedLanguage;
//   }, [selectedLanguage]);

//   const handleStartListening = () => {
//     if (!recognition) return;
//     setIsListening(true);
//     recognition.start();
//   };

//   const handleStopListening = () => {
//     if (!recognition) return;
//     setIsListening(false);
//     recognition.stop();
//   };

//   recognition.onresult = (event) => {
//     const speechResult = event.results[0][0].transcript;
//     setInputText(speechResult);
//     handleAIResponse(speechResult);
//   };

//   recognition.onerror = (event) => {
//     console.error("Speech recognition error:", event.error);
//     setIsListening(false);
//   };

//   // Fetch AI Response from Gemini API
//   const handleAIResponse = async (input) => {
//     if (!input) return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`;

//     try {
//       const response = await axios.post(
//         apiUrl,
//         {
//           prompt: { text: input },
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const aiText = response.data.candidates?.[0]?.output || "No response from AI.";
//       setMessages((prev) => [...prev, { text: aiText, sender: "ai" }]);
//       speakText(aiText);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages((prev) => [...prev, { text: "Error fetching AI response.", sender: "ai" }]);
//     }
//   };

//   // AI Voice Output
//   const speakText = (text) => {
//     if (!text) return;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = selectedLanguage;
//     synth.speak(utterance);
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px", backgroundColor: "#121212", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1 style={{ color: "#4CAF50", marginBottom: "10px" }}>AI Tutor (Google Gemini)</h1>

//       {/* Chat Container */}
//       <div style={{ width: "80%", maxWidth: "600px", height: "60vh", overflowY: "auto", backgroundColor: "#1e1e1e", padding: "15px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", display: "flex", flexDirection: "column" }}>
//         {messages.map((msg, index) => (
//           <div key={index} style={{
//             textAlign: msg.sender === "user" ? "right" : "left",
//             marginBottom: "10px"
//           }}>
//             <span style={{
//               display: "inline-block",
//               padding: "12px",
//               borderRadius: "12px",
//               wordWrap: "break-word",
//               backgroundColor: msg.sender === "user" ? "#4CAF50" : "#333",
//               color: "white",
//               maxWidth: "75%",
//               borderBottomRightRadius: msg.sender === "user" ? "2px" : "12px",
//               borderBottomLeftRadius: msg.sender === "ai" ? "2px" : "12px"
//             }}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Input & Controls */}
//       <div style={{ width: "80%", maxWidth: "600px", marginTop: "10px", display: "flex", gap: "10px" }}>
//         <button
//           onClick={isListening ? handleStopListening : handleStartListening}
//           style={{
//             padding: "12px",
//             borderRadius: "5px",
//             cursor: "pointer",
//             backgroundColor: isListening ? "red" : "#4CAF50",
//             color: "white",
//             border: "none"
//           }}>
//           {isListening ? "Stop Listening" : "🎤 Voice Input"}
//         </button>

//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           placeholder="Type or speak your question..."
//           style={{
//             flexGrow: 1,
//             padding: "12px",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#333",
//             color: "white"
//           }}
//         />

//         <button
//           onClick={() => handleAIResponse(inputText)}
//           style={{
//             padding: "12px",
//             borderRadius: "5px",
//             cursor: "pointer",
//             backgroundColor: "#2196F3",
//             color: "white",
//             border: "none"
//           }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;


//final 10th gemini

// import { useState, useRef, useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";

// function App() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generatingAnswer, setGeneratingAnswer] = useState(false);

//   const chatContainerRef = useRef(null);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, generatingAnswer]);

//   async function generateAnswer(e) {
//     e.preventDefault();
//     if (!question.trim()) return;
    
//     setGeneratingAnswer(true);
//     const currentQuestion = question;
//     setQuestion(""); // Clear input immediately after sending
    
//     // Add user question to chat history
//     setChatHistory(prev => [...prev, { type: 'question', content: currentQuestion }]);
    
//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
//           import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
//         }`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });

//       const aiResponse = response["data"]["candidates"][0]["content"]["parts"][0]["text"];
//       setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
//       setAnswer(aiResponse);
//     } catch (error) {
//       console.log(error);
//       setAnswer("Sorry - Something went wrong. Please try again!");
//     }
//     setGeneratingAnswer(false);
//   }

//   return (
//     <div className="fixed inset-0 bg-gradient-to-r from-blue-50 to-blue-100">
//       <div className="h-full max-w-4xl mx-auto flex flex-col p-3">
//         {/* Fixed Header */}
//         <header className="text-center py-4">
//           <a href="https://github.com/Rohiedits?tab=repositories" 
//              target="_blank" 
//              rel="noopener noreferrer"
//              className="block">
//             <h1 className="text-4xl font-bold text-blue-500 hover:text-blue-600 transition-colors">
//               Bujji The AI
//             </h1>
//           </a>
//         </header>

//         {/* Scrollable Chat Container - Updated className */}
//         <div 
//           ref={chatContainerRef}
//           className="flex-1 overflow-y-auto mb-4 rounded-lg bg-white shadow-lg p-4 hide-scrollbar"
//         >
//           {chatHistory.length === 0 ? (
//             <div className="h-full flex flex-col items-center justify-center text-center p-6">
//               <div className="bg-blue-50 rounded-xl p-8 max-w-2xl">
//                 <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to Bujji AI! 👋</h2>
//                 <p className="text-gray-600 mb-4">
//                   I'm here to help you with anything you'd like to know. You can ask me about:
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <span className="text-blue-500">💡</span> General knowledge
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <span className="text-blue-500">🔧</span> Technical questions
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <span className="text-blue-500">📝</span> Writing assistance
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm">
//                     <span className="text-blue-500">🤔</span> Problem solving
//                   </div>
//                 </div>
//                 <p className="text-gray-500 mt-6 text-sm">
//                   Just type your question below and press Enter or click Send!
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <>
//               {chatHistory.map((chat, index) => (
//                 <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'}`}>
//                   <div className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
//                     chat.type === 'question' 
//                       ? 'bg-blue-500 text-white rounded-br-none'
//                       : 'bg-gray-100 text-gray-800 rounded-bl-none'
//                   }`}>
//                     <ReactMarkdown className="overflow-auto hide-scrollbar">{chat.content}</ReactMarkdown>
//                   </div>
//                 </div>
//               ))}
//             </>
//           )}
//           {generatingAnswer && (
//             <div className="text-left">
//               <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
//                 Thinking...
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Fixed Input Form */}
//         <form onSubmit={generateAnswer} className="bg-white rounded-lg shadow-lg p-4">
//           <div className="flex gap-2">
//             <textarea
//               required
//               className="flex-1 border border-gray-300 rounded p-3 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               placeholder="Ask anything..."
//               rows="2"
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' && !e.shiftKey) {
//                   e.preventDefault();
//                   generateAnswer(e);
//                 }
//               }}
//             ></textarea>
//             <button
//               type="submit"
//               className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
//                 generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//               disabled={generatingAnswer}
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react'

function Aitutor() {
  return (
    <div>
      
    </div>
  )
}

export default Aitutor
