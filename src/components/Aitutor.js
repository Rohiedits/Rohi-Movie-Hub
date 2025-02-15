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

// import React from 'react'

// function Aitutor() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Aitutor




// import React, { useState } from 'react';
// import jsPDF from 'jspdf';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [objective, setObjective] = useState('');
//   const [education, setEducation] = useState('');
//   const [workExperience, setWorkExperience] = useState('');
//   const [skills, setSkills] = useState('');

//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(24);
//     doc.text('Resume', 100, 20);
//     doc.setFontSize(18);
//     doc.text(`Name: ${name}`, 50, 40);
//     doc.text(`Email: ${email}`, 50, 60);
//     doc.text(`Phone: ${phone}`, 50, 80);
//     doc.text(`Address: ${address}`, 50, 100);
//     doc.text(`Objective: ${objective}`, 50, 120);
//     doc.text(`Education: ${education}`, 50, 140);
//     doc.text(`Work Experience: ${workExperience}`, 50, 160);
//     doc.text(`Skills: ${skills}`, 50, 180);
//     doc.save('resume.pdf');
//   };

//   return (
//     <div>
//       <h1>Resume Builder</h1>
//       <form>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label>
//           Phone:
//           <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </label>
//         <label>
//           Address:
//           <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//         </label>
//         <label>
//           Objective:
//           <textarea value={objective} onChange={(e) => setObjective(e.target.value)} />
//         </label>
//         <label>
//           Education:
//           <textarea value={education} onChange={(e) => setEducation(e.target.value)} />
//         </label>
//         <label>
//           Work Experience:
//           <textarea value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} />
//         </label>
//         <label>
//           Skills:
//           <textarea value={skills} onChange={(e) => setSkills(e.target.value)} />
//         </label>
//         <button onClick={handleDownload}>Download as PDF</button>
//       </form>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import jsPDF from 'jspdf';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [objective, setObjective] = useState('');
//   const [education, setEducation] = useState('');
//   const [workExperience, setWorkExperience] = useState('');
//   const [skills, setSkills] = useState('');

//   const handleDownload = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(24);
//     doc.text('Resume', 100, 20);
//     doc.setFontSize(18);
//     doc.text(`Name: ${name}`, 50, 40);
//     doc.text(`Email: ${email}`, 50, 60);
//     doc.text(`Phone: ${phone}`, 50, 80);
//     doc.text(`Address: ${address}`, 50, 100);
//     doc.text(`Objective: ${objective}`, 50, 120);
//     doc.text(`Education: ${education}`, 50, 140);
//     doc.text(`Work Experience: ${workExperience}`, 50, 160);
//     doc.text(`Skills: ${skills}`, 50, 180);
//     doc.save('resume.pdf');
//   };

//   return (
//     <div style={{
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '20px',
//       backgroundColor: '#f9f9f9',
//       border: '1px solid #ddd',
//       borderRadius: '10px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     }}>
//       <h1 style={{
//         textAlign: 'center',
//         marginBottom: '20px',
//       }}>Resume Builder</h1>
//       <form style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Phone:
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Address:
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Objective:
//           <textarea
//             value={objective}
//             onChange={(e) => setObjective(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Education:
//           <textarea
//             value={education}
//             onChange={(e) => setEducation(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Work Experience:
//           <textarea
//             value={workExperience}
//             onChange={(e) => setWorkExperience(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Skills:
//           <textarea
//             value={skills}
//             onChange={(e) => setSkills(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <button
//           onClick={handleDownload}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Download Resume
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import jsPDF from 'jspdf';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [objective, setObjective] = useState('');
//   const [education, setEducation] = useState('');
//   const [workExperience, setWorkExperience] = useState('');
//   const [skills, setSkills] = useState('');
//   const [projects, setProjects] = useState('');
//   const [achievements, setAchievements] = useState('');
//   const [languages, setLanguages] = useState('');
//   const [certifications, setCertifications] = useState('');

//   const handleDownload = ({
    
//   }) => {
//     const doc = new jsPDF({    
//       orientation: "portrait",
//       unit: "mm",
//       format: "a4"});
    // doc.setFontSize(24);
    // doc.text('Resume', 100, 20);
    // doc.setFontSize(18);
    // doc.text(`Name: ${name}`, 50, 40);
    // doc.text(`Email: ${email}`, 50, 60);
    // doc.text(`Phone: ${phone}`, 50, 80);
    // doc.text(`Address: ${address}`, 50, 100);
    // doc.text(`Objective: ${objective}`, 50, 120);
    // doc.text(`Education: ${education}`, 50, 140);
    // doc.text(`Work Experience: ${workExperience}`, 50, 160);
    // doc.text(`Skills: ${skills}`, 50, 180);
    // doc.text(`Projects: ${projects}`, 50, 200);
    // doc.text(`Achievements: ${achievements}`, 50, 220);
    // doc.text(`Languages: ${languages}`, 50, 240);
    // doc.text(`Certifications: ${certifications}`, 50, 260);


// Header
// doc.setFont("helvetica", "bold");
// doc.setFontSize(24);
// doc.text("BHOJANAPU VENKATA ROHITH", 50, 20);
// doc.setFontSize(14);
// doc.setFont("helvetica", "normal");
// doc.text("Full Stack Web Developer | Full Stack Java | UI-UX Designer | Android Developer", 50, 30);
// doc.text("bhojanapuvenkatarohith@gmail.com  |  +91 6305808231  |  DOB: 01 Mar, 2005", 50, 40);

// // Skills Section
// doc.setFontSize(18);
// doc.setFont("helvetica", "bold");
// doc.text("SKILLS", 20, 60);
// doc.setFontSize(12);
// doc.setFont("helvetica", "normal");
// doc.text("PROGRAMMING LANGUAGES", 20, 70);
// doc.text("• Advanced: C, Java, Flutter, JavaScript", 25, 78);
// doc.text("• Intermediate: Python, C++, C#", 25, 86);
// doc.text("• Novice: Go", 25, 94);

// // Projects Section
// doc.setFontSize(18);
// doc.setFont("helvetica", "bold");
// doc.text("PROJECTS", 20, 110);
// doc.setFontSize(12);
// doc.setFont("helvetica", "normal");
// doc.text("Full Stack Web Page Weavelife", 20, 120);
// doc.text("Problem: Many students struggle to get proper class notes...", 25, 128);
// doc.text("• Technologies: JSI, React, Firebase", 25, 136);

// // Education Section
// doc.setFontSize(18);
// doc.setFont("helvetica", "bold");
// doc.text("EDUCATION", 20, 160);
// doc.setFontSize(12);
// doc.setFont("helvetica", "normal");
// doc.text("B. Tech, CSE (AI) - Mohan Babu University (2023-27)", 20, 170);
// doc.text("Intermediate, MPC - Sai Ram Junior College (2021-23)", 20, 180);
// doc.text("SSC - G.B.K.R Z.P.P High School (2020-21)", 20, 190);

// // Achievements Section
// doc.setFontSize(18);
// doc.setFont("helvetica", "bold");
// doc.text("ACHIEVEMENTS", 20, 210);
// doc.setFontSize(12);
// doc.setFont("helvetica", "normal");
// doc.text("• Mandal Level Quiz Competition", 25, 220);
// doc.text("• Workshop on Innovation: Weavelife Project Exploration", 25, 230);

// // Certifications Section
// doc.setFontSize(18);
// doc.setFont("helvetica", "bold");
// doc.text("CERTIFICATIONS", 20, 250);
// doc.setFontSize(12);
// doc.setFont("helvetica", "normal");
// doc.text("• Full Stack Web - Udemy", 25, 260);
// doc.text("• Android Development - Internshala", 25, 268);
// doc.text("• HTML & CSS - Brainovision", 25, 276);
// doc.text("• C++ - SoloLearn", 25, 284);





//     doc.save('resume.pdf');
//   };

//   return (
//     <div style={{
//       maxWidth: '800px',
//       margin: '40px auto',
//       padding: '20px',
//       backgroundColor: '#f9f9f9',
//       border: '1px solid #ddd',
//       borderRadius: '10px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     }}>
//       <h1 style={{
//         textAlign: 'center',
//         marginBottom: '20px',
//       }}>Resume</h1>
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Phone:
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Address:
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Objective:
//           <textarea
//             value={objective}
//             onChange={(e) => setObjective(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Education:
//           <textarea
//             value={education}
//             onChange={(e) => setEducation(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Work Experience:
//           <textarea
//             value={workExperience}
//             onChange={(e) => setWorkExperience(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Skills:
//           <textarea
//             value={skills}
//             onChange={(e) => setSkills(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Projects:
//           <textarea
//             value={projects}
//             onChange={(e) => setProjects(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Achievements:
//           <textarea
//             value={achievements}
//             onChange={(e) => setAchievements(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Languages:
//           <textarea
//             value={languages}
//             onChange={(e) => setLanguages(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <label style={{
//           marginBottom: '10px',
//         }}>
//           Certifications:
//           <textarea
//             value={certifications}
//             onChange={(e) => setCertifications(e.target.value)}
//             style={{
//               padding: '10px',
//               marginBottom: '20px',
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               width: '100%',
//               height: '100px',
//             }}
//           />
//         </label>
//         <button
//           onClick={handleDownload}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Download as PDF
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;




//final code resume
// import React, { useState } from 'react';
// import jsPDF from 'jspdf';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [objective, setObjective] = useState('');
//   const [education, setEducation] = useState('');
//   const [workExperience, setWorkExperience] = useState('');
//   const [skills, setSkills] = useState('');
//   const [projects, setProjects] = useState('');
//   const [achievements, setAchievements] = useState('');
//   const [languages, setLanguages] = useState('');
//   const [certifications, setCertifications] = useState('');

//   const handleDownload = () => {
//     const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
//     doc.setFontSize(18);
//     doc.text('Resume', 105, 20, { align: 'center' });
//     doc.setFontSize(12);
//     doc.text(`Name: ${name}`, 20, 40);
//     doc.text(`Email: ${email}`, 20, 50);
//     doc.text(`Phone: ${phone}`, 20, 60);
//     doc.text(`Address: ${address}`, 20, 70);
//     doc.text(`Objective: ${objective}`, 20, 80, { maxWidth: 170 });
//     doc.text(`Education: ${education}`, 20, 100, { maxWidth: 170 });
//     doc.text(`Work Experience: ${workExperience}`, 20, 120, { maxWidth: 170 });
//     doc.text(`Skills: ${skills}`, 20, 140, { maxWidth: 170 });
//     doc.text(`Projects: ${projects}`, 20, 160, { maxWidth: 170 });
//     doc.text(`Achievements: ${achievements}`, 20, 180, { maxWidth: 170 });
//     doc.text(`Languages: ${languages}`, 20, 200, { maxWidth: 170 });
//     doc.text(`Certifications: ${certifications}`, 20, 220, { maxWidth: 170 });
//     doc.save('resume.pdf');
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//       <h1 style={{ textAlign: 'center' }}>Resume Generator</h1>
//       <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
//       <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
//       <label>Phone: <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
//       <label>Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /></label>
//       <label>Objective: <textarea value={objective} onChange={(e) => setObjective(e.target.value)} /></label>
//       <label>Education: <textarea value={education} onChange={(e) => setEducation(e.target.value)} /></label>
//       <label>Work Experience: <textarea value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} /></label>
//       <label>Skills: <textarea value={skills} onChange={(e) => setSkills(e.target.value)} /></label>
//       <label>Projects: <textarea value={projects} onChange={(e) => setProjects(e.target.value)} /></label>
//       <label>Achievements: <textarea value={achievements} onChange={(e) => setAchievements(e.target.value)} /></label>
//       <label>Languages: <textarea value={languages} onChange={(e) => setLanguages(e.target.value)} /></label>
//       <label>Certifications: <textarea value={certifications} onChange={(e) => setCertifications(e.target.value)} /></label>
//       <button onClick={handleDownload} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Download PDF</button>
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

