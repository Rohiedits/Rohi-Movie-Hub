import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import Notes from './notes.js';
import Aiphoto from './aiphoto.js';
const python4 = () => {
  return (
    <StyledWrapper>

     <Hero  text="👨‍💻 Interview Guide.."/> 

     <div className='container'>
     <h1 style={{color:"gray",textAlign:'center'}}>7. FULL STACK WEB Development Mastery Study Guide Interview Questions with Answers</h1>;
     <iframe width="960"  height="455" className='youtube' src="https://www.youtube.com/embed/l5g38haVsJk?si=EKfbCmUlL38dH0aS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <section class="section">
    <h2>Quiz</h2>
    <p><strong>Instructions:</strong> Answer each question in 2-3 sentences.</p>
    <ol>
      <li class="question">What is hoisting in JavaScript and how does it affect variable and function declarations?</li>
      <li class="question">Describe the key differences between local storage and session storage in web browsers.</li>
      <li class="question">Explain how using a CDN (Content Delivery Network) can improve website performance.</li>
      <li class="question">What is the main difference between REST APIs and GraphQL regarding data fetching?</li>
      <li class="question">Outline the components of the CSS Box Model and how they contribute to element styling.</li>
      <li class="question">Compare and contrast class selectors and ID selectors in CSS.</li>
      <li class="question">List and describe three primitive data types and one non-primitive data type in JavaScript.</li>
      <li class="question">What is the Document Object Model (DOM) and why is it important for web development?</li>
      <li class="question">Explain how the 'this' keyword works in different JavaScript contexts, and provide an example.</li>
      <li class="question">What are the main differences between cookies and local storage and what are their respective typical uses?</li>
    </ol>
  </section>

  <section class="section">
    <h2>Quiz Answer Key</h2>
    <ol>
      <li>Hoisting in JavaScript is the behaviour where declarations of variables and functions are moved to the top of their scope before code execution. Variable hoisting only hoists declarations, not initializations, whereas function declarations are fully hoisted, allowing you to call them before their definition.</li>
      <li>Local storage provides persistent storage of data with no expiration time, persisting even after the browser is closed. Session storage, on the other hand, is temporary, storing data only within a specific browser tab or window and is cleared when the tab closes.</li>
      <li>CDNs improve website performance by storing copies of website assets on servers geographically closer to users. This reduces load times by minimising the distance data has to travel to reach the user and lowers the server load on the site's origin server.</li>
      <li>REST APIs use multiple endpoints and often return all data for a resource, leading to over-fetching, while GraphQL allows clients to specify the exact data they need, reducing both over-fetching and under-fetching.</li>
      <li>The CSS Box Model consists of content, padding, border, and margin. The content is the actual element, padding adds space within the border, the border surrounds the padding and content, and the margin creates space outside the element.</li>
      <li>Class selectors in CSS can be applied to multiple elements and have lower specificity than ID selectors, which are unique to a single element, possess a higher level of specificity and are meant to be used once per page.</li>
      <li>Primitive data types include number (integers and floating-point values), string (sequences of characters), and Boolean (true or false). A non-primitive data type is an object, which can store collections of key-value pairs and complex data structures.</li>
      <li>The DOM is a programming interface for web documents that represents the structure as a tree-like model of nodes which can be modified dynamically. It allows JavaScript to interact with HTML, and style content and is essential for creating interactive websites.</li>
      <li>The 'this' keyword in JavaScript refers to the object in which the current code is being executed, its value varying according to how a function is called, whether in a global, function, event or constructor context. For instance, within a method of an object, 'this' refers to that object itself.</li>
      <li>Cookies are primarily used for session management, personalisation, and tracking user behaviour and are temporary whereas local storage is used for long term persistent data such as saved settings and game progress.</li>
    </ol>
  </section>

  <section class="section">
    <h2>Essay Questions</h2>
    <p><strong>Instructions:</strong> Answer each question in a well-structured essay format.</p>
    <ul>
      <li>Discuss the importance of state management in React applications. Compare and contrast different state management approaches, including component state, context API, and Redux, and analyse their ideal use cases.</li>
      <li>Compare and contrast server-side rendering (SSR) and client-side rendering (CSR) in web development. Explain the benefits and drawbacks of each approach, focusing on performance, SEO, and user experience and where these might be best suited.</li>
      <li>Explain the differences between asynchronous and non-blocking programming in Node.js, and discuss how the event loop facilitates this pattern. Also, describe how child threads enhance the capability of Node.js.</li>
      <li>Describe how to implement authentication and authorization in an Express.js application. Explain the key steps involved in setting up these processes, including the use of JSON Web Tokens (JWTs), middleware and strategies for user identification and access control.</li>
      <li>Explain the principles of sharding and replication in MongoDB. Discuss how they contribute to scalability, high availability, and data consistency, and analyse scenarios where each technique would be beneficial.</li>
    </ul>
  </section>

  <section class="section">
    <h2>Glossary of Key Terms</h2>
    <dl class="section glossary">
      <dt>Asynchronous Programming</dt>
      <dd>A programming paradigm that enables a program to execute multiple tasks concurrently, without waiting for each task to complete before moving on to the next.</dd>

      <dt>Authentication</dt>
      <dd>The process of verifying the identity of a user or entity attempting to access a system or resource.</dd>

      <dt>Authorization</dt>
      <dd>The process of granting access to resources based on the verified identity of a user, determining what actions the user is permitted to perform.</dd>

      <dt>CDN (Content Delivery Network)</dt>
      <dd>A network of servers that delivers cached static content to users based on geographic proximity to reduce load times.</dd>

      <dt>Child Processes</dt>
      <dd>Independent processes created by Node.js that can handle tasks, particularly those involving substantial computation or I/O, in order to not block the main thread.</dd>

      <dt>Class Selector (CSS)</dt>
      <dd>A CSS selector that targets all HTML elements with a specified class attribute, which can be used across multiple elements.</dd>

      <dt>Component Lifecycle (React)</dt>
      <dd>The sequence of stages a React component goes through, including mounting (creation), updating, and unmounting (removal).</dd>

      <dt>Context API (React)</dt>
      <dd>A React feature that allows sharing of state and data across multiple components, without needing prop drilling and facilitating global state management.</dd>

      <dt>Cookies</dt>
      <dd>Small text files that websites store on a user’s computer to track and store various information. Usually used for session management, personalisation and analytics.</dd>

      <dt>CORS (Cross-Origin Resource Sharing)</dt>
      <dd>A security mechanism used to control which resources from different origins websites can access.</dd>

      <dt>CSS Box Model</dt>
      <dd>The foundation of CSS layout, consisting of content, padding, border, and margin.</dd>

      <dt>Document Object Model (DOM)</dt>
      <dd>A programming interface for web documents, representing its structure as a tree-like model and enabling dynamic changes using JavaScript.</dd>

      <dt>Event Loop (Node.js)</dt>
      <dd>A mechanism that handles asynchronous operations, allowing Node.js to perform non-blocking I/O operations.</dd>

      <dt>GraphQL</dt>
      <dd>A query language for APIs that allows clients to request specific data, reducing over-fetching and under-fetching.</dd>

      <dt>Hoisting (JavaScript)</dt>
      <dd>A JavaScript behaviour where variable and function declarations are moved to the top of their scope before code execution.</dd>

      <dt>Higher-Order Component (HOC)</dt>
      <dd>A pattern in React where a function takes a component as input and returns a new, enhanced component.</dd>

      <dt>ID Selector (CSS)</dt>
      <dd>A CSS selector that targets a single, specific HTML element with a unique ID attribute.</dd>

      <dt>Index (MongoDB)</dt>
      <dd>A data structure that stores a subset of data and accelerates query performance by providing faster access to specific data.</dd>

      <dt>Local Storage</dt>
      <dd>A web browser API for storing key-value pairs persistently on the client side. Has no expiration time.</dd>

      <dt>Middleware (Express.js)</dt>
      <dd>Functions that have access to the request object, response object, and the next middleware in the request-response cycle.</dd>

      <dt>MongoDB</dt>
      <dd>A NoSQL database that stores data in documents using JSON-like format, offering flexible and scalable data storage.</dd>

      <dt>Non-Blocking Programming</dt>
      <dd>A method of handling tasks in Node.js that allows the program to continue processing other actions, without waiting for a task to complete.</dd>

      <dt>Object ID (MongoDB)</dt>
      <dd>A unique identifier assigned to each document in MongoDB, containing timestamps and random components to make them unique.</dd>

      <dt>package.json</dt>
      <dd>A configuration file for a Node.js project, which lists dependencies, versions and scripts.</dd>

      <dt>Promises</dt>
      <dd>Objects that represent the eventual result of an asynchronous operation, enabling better readability in asynchronous JavaScript code.</dd>

      <dt>Props Drilling (React)</dt>
      <dd>Passing data through multiple layers of components, which can become cumbersome in complex applications.</dd>

      <dt>React Hooks</dt>
      <dd>Functions that allow functional components to use React state and lifecycle features, such as useState, useEffect, and useContext.</dd>

      <dt>Redux</dt>
      <dd>A state management library for JavaScript applications, particularly React, providing a central store for sharing state across components.</dd>

      <dt>Replica Set (MongoDB)</dt>
      <dd>A group of MongoDB servers that maintain copies of data and enhance high availability.</dd>

      <dt>Representational State Transfer (REST)</dt>
      <dd>An architectural style for designing networked applications, using standard HTTP methods to create, read, update, and delete resources.</dd>

      <dt>Routing (Express.js)</dt>
      <dd>The process of mapping incoming requests to specific handlers in a web application, using URL paths to determine what code should be executed.</dd>

      <dt>Session Storage</dt>
      <dd>A web browser API for storing temporary key-value pairs, specific to a browser tab or window and is cleared when the tab closes.</dd>

      <dt>Sharding (MongoDB)</dt>
      <dd>The practice of distributing data across multiple MongoDB servers to improve the speed of reading data and scalability.</dd>

      <dt>Streams (Node.js)</dt>
      <dd>A way of handling data piece by piece, enabling efficient processing of large or continuous data.</dd>

      <dt>Server-Side Rendering (SSR)</dt>
      <dd>Rendering a web page on the server before sending the fully-rendered HTML to the client, improving initial load time and SEO.</dd>

      <dt>Transaction (MongoDB)</dt>
      <dd>A series of operations that are treated as a single unit, ensuring all operations either complete or none do, for maintaining data integrity.</dd>

      <dt>useContext (React)</dt>
      <dd>A hook that allows access to a React context value, facilitating sharing of global state among components.</dd>

      <dt>useEffect (React)</dt>
      <dd>A hook that handles side effects, such as data fetching and DOM manipulation, in React functional components.</dd>

      <dt>useState (React)</dt>
      <dd>A hook used to add state to functional components, enabling state management within the component.</dd>

      <dt>Virtual DOM (React)</dt>
      <dd>A virtual representation of the DOM, where React compares the current and previous version and only updates the minimal needed changes to the real DOM, improving UI update efficiency.</dd>

      <dt>Worker Threads</dt>
      <dd>Independent JavaScript threads in Node.js that facilitate parallel execution of code to improve performance of multi-core systems.</dd>
    </dl>
  </section>
  
  <Aiphoto/>
</div>


      
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`

.container {
    max-width: 1500px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 1.5rem;
            margin-top: 20px;
        }

        h3 {
            font-size: 1.25rem;
            margin-bottom: 10px;
        }

        ul {
            list-style: disc inside;
            margin: 10px 0;
            padding: 0;
        }

        .btn {
            display: inline-block;
            margin: 10px 0;
            padding: 10px 20px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
        }
        .question {
            font-weight: bold;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .section {
            margin-bottom: 20px;
        }

        .example-section {
            margin-bottom: 20px;
        }

        .code-block {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: monospace;
            overflow-x: auto;
        }

        .exercise {
            background: #f9f9f9;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
        }

        .options {
            list-style: none;
            padding: 0;
        }
        .youtube{
   
   max-width: 100%;
   height:315;
   display: block;
   position: relative;
   justify-content: center;
   align-items: center;
    margin-left: auto;
    margin-right: auto;
   

     border-radius: 0.5rem;
     padding: 0.25rem;
     background-color: rgb(172, 250, 233);
     background-size: cover;
    background-image: linear-gradient(
      135deg,
      rgba(172, 250, 233, 1) 0%,
      rgba(213, 143, 235, 1) 50%,
      rgba(242, 126, 241, 1) 100%
    );
    transform-origin: center;
    transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
    transition: transform 0.3s ease-in-out;
  }
  .quiz-section {
            margin-bottom: 30px;
        }
        .glossary {
            background: #f1f1f1;
            padding: 15px;
            border-radius: 8px;
        }
        .glossary dt {
            font-weight: bold;
        }

`;

export default python4
