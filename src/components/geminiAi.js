// import React, { useState } from 'react';
// import axios from 'axios';


// const App = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Function to handle sending messages
//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     // Add user message to the chat
//     const newMessage = { text: input, sender: 'user' };
//     setMessages([...messages, newMessage]);
//     setInput('');

//     // Simulate AI response or call an API
//     setLoading(true);
//     try {
//       const aiResponse = await getAIResponse(input);
//       setMessages((prevMessages) => [...prevMessages, { text: aiResponse, sender: 'ai' }]);
//     } catch (error) {
//       console.error('Error fetching AI response:', error);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: 'Sorry, I encountered an error.', sender: 'ai' },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Simulated AI response function (replace with API call)
//   const getAIResponse = async (message) => {
//     // Replace this with your AI API endpoint
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: message }],
//       },
//       {
//         headers: {
//           Authorization: `Bearer YOUR_OPENAI_API_KEY`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return response.data.choices[0].message.content;
//   };

//   return (
//     <div className="chat-box">
//       <div className="messages-container">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             <p>{msg.text}</p>
//           </div>
//         ))}
//         {loading && <div className="loading">AI is typing...</div>}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// // Inline CSS (Optional: You can replace this with a separate CSS file)
// const styles = `
// .chat-box {
//   width: 400px;
//   height: 600px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   background-color: #f9f9f9;
//   margin: 50px auto;
// }

// .messages-container {
//   flex: 1;
//   overflow-y: auto;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
// }

// .message {
//   max-width: 70%;
//   margin-bottom: 10px;
//   padding: 10px;
//   border-radius: 8px;
// }

// .message.user {
//   align-self: flex-end;
//   background-color: #dcf8c6;
// }

// .message.ai {
//   align-self: flex-start;
//   background-color: #ececec;
// }

// .input-container {
//   display: flex;
//   padding: 10px;
//   border-top: 1px solid #ccc;
//   background-color: #fff;
// }

// .input-container input {
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
// }

// .input-container button {
//   padding: 10px 20px;
//   margin-left: 10px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   border-radius: 4px;
//   cursor: pointer;
// }

// .input-container button:hover {
//   background-color: #0056b3;
// }

// .loading {
//   text-align: center;
//   font-style: italic;
//   color: #888;
// }
// `;

// export default App;

// // Inject inline styles into the document
// const styleSheet = document.createElement('style');
// styleSheet.type = 'text/css';
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);
import React from 'react'

function geminiAi() {
  return (
    <div>
      
    </div>
  )
}

export default geminiAi
